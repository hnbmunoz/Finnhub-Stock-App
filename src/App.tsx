import Layout from './components/layout/Layout'
import './assets/scss/main.scss'
import { StocksModule } from './components/modules/stocks/StocksModule'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Layout>
      <Provider store={store}>
        <StocksModule />
      </Provider>
    </Layout>
  )
}

export default App
