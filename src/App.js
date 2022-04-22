import './App.scss';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchToken} from "./config/asyncAction";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchToken());
    },[])
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/testtask' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
