import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Curriculum from './components/Curriculum/Curriculum';
import Gallery from './components/Gallery/Gallery';
import BottomNav from './components/BottomNav/BottomNav';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';

import Admin from './components/Admin/AdminControl';

import Update from './components/Admin/Updates/Update'
import Update2 from './components/Admin/Updates/Update2'
import Update3 from './components/Admin/Updates/Update3'
import Update4 from './components/Admin/Updates/Update4'

import Create from './components/Admin/CreateNew/Create'
import Create2 from './components/Admin/CreateNew/Create2'
import Create3 from './components/Admin/CreateNew/Create3'
import Create4 from './components/Admin/CreateNew/Create4'
import Create5 from './components/Admin/CreateNew/Create5'


import Delete from './components/Admin/Delete/Delete'
import Delete2 from './components/Admin/Delete/Delete2'
import Delete3 from './components/Admin/Delete/Delete3'
import Delete4 from './components/Admin/Delete/Delete4'
import Delete5 from './components/Admin/Delete/Delete5'
import Delete6 from './components/Admin/Delete/Delete6'

function App() {

  return (
    <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='About' element={<About/>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path='Gallery' element={<Gallery/>} />
          <Route path='Curriculum' element={<Curriculum/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='v6/crjfirvnrijvnvjrijvf/Admin' element={<Admin/>} />

          <Route path='update/:id' element={<Update/>} />
          <Route path='update2/:id' element={<Update2/>} />
          <Route path='update3/:id' element={<Update3/>} />
          <Route path='update4/:id' element={<Update4/>} />

          <Route path='create/:id' element={<Create/>} />
          <Route path='create2/:id' element={<Create2/>} />
          <Route path='create3/:id' element={<Create3/>} />
          <Route path='create4/:id' element={<Create4/>} />
          <Route path='create5/:id' element={<Create5/>} />

          <Route path='delete/:id' element={<Delete/>} />
          <Route path='delete2/:id' element={<Delete2/>}/>
          <Route path='delete3/:id' element={<Delete3/>}/>
          <Route path='delete4/:id' element={<Delete4/>}/>
          <Route path='delete5/:nid' element={<Delete5/>}/>
          <Route path='delete6/:id'  element={<Delete6/>}/>
        
        </Routes>
        <BottomNav />
        <Footer />
    </BrowserRouter>
  )
}

export default App;
