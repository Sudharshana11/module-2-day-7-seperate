
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage'
import ViewPage from './Pages/ViewPage'
import CreatePage from './Pages/CreatePage'
import DeletePage from './Pages/DeletePage'
import UpdatePage from './Pages/UpdatePage'

function App() {
  return (
 <BrowserRouter> 
  <NavBar/>
    <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/ViewPage' element={ <ViewPage/>}/>
        <Route path='/CreatePage' element={ <CreatePage/>}/>
        <Route path='/DeletePage' element={ <DeletePage/>}/>
        <Route path='/UpdatePage' element={ <UpdatePage/>}/>
     </Routes>
  </BrowserRouter>
      
   
  );
}

export default App;
