import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/index'
import Home from './Components/Home/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
        </Route>        
      </Routes>
    </>
  );
}

export default App;
