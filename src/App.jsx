import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import DataBase from './component/DataBase/DataBase'
import Form from './component/Form/Form'


function App() {
  
  
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" 
          element={<DataBase/>} />
          {/* <Route path="/Productos/Mojito/:name"  element={<ItemDetail data={mojito} />} />
          <Route path="/Productos/Negroni"  element={<List data={negroni} />} />
          <Route path="/Productos/Negroni/:name"  element={<ItemDetail data={negroni} />} />
          <Route path="/Productos/Gin Tonic"  element={<List data={gin} />} />
          <Route path="/Productos/Gin Tonic/:name"  element={<ItemDetail data={gin} />} /> */}
          <Route path="/Productos"  element= { <DataBase/> }  />
          <Route path="/Productos/detalles/:idparams"  element={<Form/>} />
          <Route path="/Nosotros"  element={<p>N</p>} />
          <Route path="/Contactos"  element={<p>hola</p>} />
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
