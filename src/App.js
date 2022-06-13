import Validations from './ValidateForm/login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './home/home';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import {store} from './redux/store'

// username : foo, password : bar

function App() {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Validations />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </Provider>
  );
}

export default App;
