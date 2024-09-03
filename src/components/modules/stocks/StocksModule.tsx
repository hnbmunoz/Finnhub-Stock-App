import { SearchBySymbol, GetStockDetails, GetLatestQuote, GetCompanyNews } from "./api/stocksApi"
import { useState, useRef, useEffect } from 'react'
import useDebounce from "../../custom-hooks/useDebounce";
import { HttpStatusCodeEnum, SwalFailMsg, PROMPT_MSG } from "../../constants/Constants"
import ToggleComponent from "../../custom-components/toggle/ToggleComponent";
import swal from 'sweetalert';
import GridWithLoader from "../../custom-components/grids/GridWithLoader";
import Select from 'react-select'
import StockDetails from "./components/StockDetails";
import StockOverview from "./components/StockOverview";
import StockNews from "./components/StockNews";
import { useDispatch } from 'react-redux';
import { updateDetails } from "../../../reducer/stockDetailsSlice";
import { updateQuote } from "../../../reducer/stockQuoteSlice";
import { updateNews } from "../../../reducer/stockNewsSlice";
import { updateSelection } from "../../../reducer/selectedStockSlice";
import { FormatDateToday, FormatDateLastYear } from "./utils/helpers";


export interface LookupModel {
  label: string
  value: string
}

export const StocksModule = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showTable, setShowTable] = useState<boolean>(false)
  const [selectedStockSymbol, setSelectedStockSymbol] = useState<LookupModel | null>();
  const [userInput, setUserInput] = useState<string>('')
  const [rowData, setRowData] = useState<any[]>([]);
  const [drpData, setDrpData] = useState<LookupModel[]>([])
  const symbolRef: any = useRef();
  const dispatch = useDispatch(); 

  const debouncedValue = useDebounce(userInput, 500)

  useEffect(() => {
    symbolRef?.current?.focus()    
    return () => { }
  }, [])

  useEffect(() => {
    userInput && handlGetData(debouncedValue)
    return () => { }
  }, [debouncedValue])

  const handleUserInput = (input: string) => {
    setUserInput(input)

  }

  const handlGetData = async (filtr: string) => {
    setIsLoading(true)
    try {
      const response: any = await SearchBySymbol(filtr)
      setIsLoading(false)
      if (response.status === HttpStatusCodeEnum.Ok) {
        setRowData(response.data.result)
        setDrpData(response.data.result.map((data: any) => {
          return {
            value: data.symbol,
            label: `${data.symbol} | ${data.description}`
          }
        }))

        if (response.data.result.length === 0) {
          swal(SwalFailMsg.title, SwalFailMsg.noRecord, SwalFailMsg.icon)
        }
      } else {
        swal(SwalFailMsg.title, SwalFailMsg.defaultMsg, SwalFailMsg.icon)
      }
    } catch (error) {
      setIsLoading(false)
      swal(SwalFailMsg.title, SwalFailMsg.serverError, SwalFailMsg.icon)
    }

  }

  const handlGetStockDetails = async (stockSymbol: string) => {
    setIsLoading(true)
    try {
      const result = await GetStockDetails(stockSymbol)
      setIsLoading(false)
      !result.name && swal(SwalFailMsg.title, PROMPT_MSG.NoProfile, SwalFailMsg.icon)
      dispatch(updateDetails(result));
      setSelectedStockSymbol(null)
    } catch (error: any) {
      setSelectedStockSymbol(null)
      if (error?.message === 'An error has occured: 403') {
        swal(SwalFailMsg.title, SwalFailMsg.noAccess, SwalFailMsg.icon)
      } else {
        swal(SwalFailMsg.title, SwalFailMsg.serverError, SwalFailMsg.icon)
      }

      setIsLoading(false)
    }
  }

  const handlGetStockQuote = async (stockSymbol: string) => {
    setIsLoading(true)
    try {
      const result = await GetLatestQuote(stockSymbol)
      setIsLoading(false)
      dispatch(updateQuote(result));
    } catch (error: any) {
      if (error?.message === 'An error has occured: 403') {
        swal(SwalFailMsg.title, SwalFailMsg.noAccess, SwalFailMsg.icon)
      } else {
        swal(SwalFailMsg.title, SwalFailMsg.serverError, SwalFailMsg.icon)
      }

      setIsLoading(false)
    }
  }

  const handlGetDailyCompanyNews = async (stockSymbol: string) => {
    setIsLoading(true)
    try {
      const result = await GetCompanyNews(stockSymbol, FormatDateLastYear(), FormatDateToday())
      console.log(result)

      setIsLoading(false)
      dispatch(updateNews(result));
    } catch (error: any) {
      if (error?.message === 'An error has occured: 403') {
        swal(SwalFailMsg.title, SwalFailMsg.noAccess, SwalFailMsg.icon)
      } else {
        swal(SwalFailMsg.title, SwalFailMsg.serverError, SwalFailMsg.icon)
      }

      setIsLoading(false)
    }
  }

  const columnDefs = [
    { headerName: 'Stock Symbol', field: 'symbol', width: 200 },
    { headerName: 'Description', field: 'description', minWidth: 450, resizable: true },
    { headerName: 'Type', field: 'type', minWidth: 450, resizable: true },
  ]

  return (
    <div className="stock-module d-flex-col">
      <div className="d-flex m-3 w-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center" >
          <div style={{ width: '70vw', marginRight: '1rem' }}>
            <Select
              menuPlacement='auto'
              menuPosition='fixed'
              isMulti={false}
              options={drpData}
              onChange={(e: any) => {
                handlGetStockDetails(e.value)
                handlGetStockQuote(e.value)
                handlGetDailyCompanyNews(e.value)
                dispatch(updateSelection({value: e.value, label: e.label}));
                setSelectedStockSymbol(e ?? undefined)
              }}
              onInputChange={handleUserInput}
              isDisabled={false}
              value={selectedStockSymbol}
              placeholder='Type Here To Search For Stock Symbol...'
              ref={symbolRef}
              isLoading={isLoading}
            />
          </div>
        </div>
        <ToggleComponent
          toggleId='showTable'
          toggleChange={() => { setShowTable(!showTable) }}
          toggleDefaultValue={false}
          toggleTagging='Show Table List'
          isDisabled={false}
        />
      </div>
      {showTable && <div className="d-flex m-3">
        <GridWithLoader
          rowData={rowData}
          columnDefs={columnDefs}
          isLoading={isLoading}
        />
      </div>}
      <div className="d-flex justify-content-center">
        <div className="d-flex">
          <StockNews />
        </div>
        <div className="d-flex-col">
          <StockOverview />
          <StockDetails />
        </div>
      </div>
    </div>
  )
}
