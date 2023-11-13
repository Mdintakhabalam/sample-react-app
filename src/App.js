import './App.css';
import Header from './components/Header/Header';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { router } from './router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
        <Header />
        <Routes>
          {router.map((route, key) => <Route path={`${route.path}`} element={route.element} key={key}/>)}
        </Routes>
     </BrowserRouter>
     <ToastContainer />
    </div>
  );
}

export default App;
