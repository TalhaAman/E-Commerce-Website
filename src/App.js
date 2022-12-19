import { Provider } from 'react-redux';

import Navigation from "./navigation"
import store from './store';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App