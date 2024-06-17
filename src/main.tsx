import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../app/globals.css'
import { Provider } from "react-redux"
import { store } from './lib/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
