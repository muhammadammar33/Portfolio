import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/index'
import Home from './Components/Home/index'
import About from './Components/About/index';
import Contact from './Components/Contact/index';
import Skills from './Components/Skills/index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='skills' element={<Skills />}/>
        </Route>        
      </Routes>
    </>
  );
}

export default App;
