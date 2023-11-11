import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { router } from './router';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Header />
        <Routes>
          {router.map((route, key) => <Route path={`${route.path}`} element={route.element} key={key}/>)}
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
