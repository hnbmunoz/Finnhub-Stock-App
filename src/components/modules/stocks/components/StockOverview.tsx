import Cards from '../../../custom-components/cards/Cards'
import { useSelector } from 'react-redux'

const StockOverview = () => {
  const stockDetails = useSelector((state: any) => state.stockDtl);
  const stockQuote = useSelector((state: any) => state.stockQuote);

  return (
    <Cards>
      <div className="d-flex align-items-center justify-content-center fw-bold" style={{fontSize: '1.5rem', width: '40vw' }}>
        <div className='d-flex'>
          <div className="m-1">
            Stock Price:
          </div>
          <div className="d-flex m-1">
            {stockQuote.pc}
            {stockDetails.currency} |
          </div>
        </div>
        <div className="d-flex m-1">
          <div className={`text-${stockQuote.d > 0 ? 'success' : 'danger'}`}>
            {stockQuote.d}
          </div>
          <div className={`text-${stockQuote.d > 0 ? 'success' : 'danger'}`}>
            {`(${stockQuote.dp ?? 0})%`}
          </div>
        </div>
        {stockDetails.logo && <div className="m-1">
          <img src={stockDetails.logo} alt="Stock Logo" style={{ height: '10vh' }} />
        </div>}
      </div>
    </Cards>
  )
}

export default StockOverview