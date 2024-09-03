import Cards from "../../../custom-components/cards/Cards"
import { useSelector } from 'react-redux'

const StockNews = () => {
  const stockNews = useSelector((state: any) => state.stockNws);

  return (
    <Cards>
      <div className="d-flex">
        <h2 className="fw-bold d-flex">
          Company News
        </h2>
      </div>
      <div className="news-panel">

        <div className="d-flex-col">
          {stockNews?.map((data: any, idx: number) => {
            let index = idx
            return (
              <div key={index} className="d-flex-col">
                <div className="d-flex-col">
                  {data?.image && <div className="m-1">
                    <a href={data?.url} target="_blank">
                      <img src={data?.image} alt="News Logo" style={{ height: '25vh', width: '100%' }} />
                    </a>
                  </div>}
                </div>

                <div className="d-flex-col">
                  <div className="fw-bold">
                    {data?.headline}
                  </div>
                  <div>
                    {data?.summary}
                  </div>
                </div>
              </div>
            )
          })}
        </div>



      </div>

    </Cards>
  )
}

export default StockNews