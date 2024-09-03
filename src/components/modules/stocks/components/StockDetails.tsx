import Cards from "../../../custom-components/cards/Cards"
import { useSelector } from 'react-redux'
const StockDetails = () => {
  const stockDetails = useSelector((state: any) => state.stockDtl);
  const selectedStock = useSelector((state: any) => state.selectedStocks)

  const detailsList = {
    name: "Name",
    symbol: "Symbol",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number: number) => {
    return (number / 1000).toFixed(2);
  };

  const displayValue = (item: string) => {
    if (item === "marketCapitalization") {
      return `${convertMillionToBillion(stockDetails[item])}B`;
    } else if (item === "name") {
      return stockDetails[item] ?? selectedStock.label;
    } else if (item === "symbol") {
      return  selectedStock.value;
    } else {
      return stockDetails[item];
    }

  }

  return (
    <Cards>
      <div style={{ height: '25rem', fontSize: '1.2rem' }}>
        <ul className='w-100 d-flex-col justify-content-between align-items-center p-0' >
          {Object.keys(detailsList).map((item: any) => {
            return (
              <li key={item} className="w-100 d-flex justify-content-between align-items-center p-0">
                <span style={{ marginRight: '1rem', marginBottom: '1rem' }}>{detailsList[item as keyof typeof detailsList]}</span>
                <span className="fw-bold">
                  {
                    displayValue(item)                    
                  }
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Cards>
  )
}

export default StockDetails