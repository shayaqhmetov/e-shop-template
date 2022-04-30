import './App.css';

import Navigation from './components/navigation/navigations.template';

import HomePage from './pages/homepage/homepage.template';
import SignInPage from './pages/sign-in/sign-in.template';

import {
  Routes,
  Route,
} from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='' element={<HomePage />} />
        <Route path='shop' element={<HatsPage />} />
        <Route path='sign-in' element={<SignInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
