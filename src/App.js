import './App.scss';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchToken} from "./config/asyncAction";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchToken());
    },[])
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={<HomePage />} />
          <Route path='/testtask' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
