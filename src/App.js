import './App.css';

import Navigation from './components/navigation/navigations.template';

import HomePage from './pages/homepage/homepage.template';
import Authentification from './pages/authentification/authentification.template';
import Shop from './pages/shop/shop.template';


import {
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='' element={<HomePage />} />
        <Route path='auth' element={<Authentification />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
