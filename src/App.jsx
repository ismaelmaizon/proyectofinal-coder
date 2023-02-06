import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { Link, Navigate, Route, Routes} from 'react-router-dom'
import Form from './component/Form/Form'
import CardProducts from './component/Card/CardProducts'
import { db } from '../db/firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import List from './component/List/List'


function App() {

  const [productos, setProductos] = useState([])
    const prodCollection = collection(db, "productos" )

    const getProductos = async () => {
        const dataProd = await getDocs(prodCollection);
        console.log(dataProd);
        setProductos(dataProd.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    useEffect(() => {
        getProductos();
    }, []);

    const deleteProductos = async (id) => {
       const productoDoc = doc(db, "productos", id );
       await deleteDoc(productoDoc);
       getProductos();
    }

    useEffect(() => {
        getProductos();
    }, []);
  
  
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" 
          element={<CardProducts productos={productos} />} />
          {/* <Route path="/Productos/Mojito/:name"  element={<ItemDetail data={mojito} />} />
          <Route path="/Productos/Negroni"  element={<List data={negroni} />} />
          <Route path="/Productos/Negroni/:name"  element={<ItemDetail data={negroni} />} />
          <Route path="/Productos/Gin Tonic"  element={<List data={gin} />} />
          <Route path="/Productos/Gin Tonic/:name"  element={<ItemDetail data={gin} />} /> */}
          <Route path="/Productos"  element= { <CardProducts productos={productos} /> }  />
          <Route path="/Productos/:sillas"  element={<List productos={productos} />} />
          <Route path="/Productos/:puff"  element={<List productos={productos} />} />
          <Route path="/Productos/:alfombras"  element={<List productos={productos} />} />
          <Route path="/Productos/detalles/:idparams"  element={<Form productos={productos} />} />
          <Route path="/Nosotros"  element={<p>N</p>} />
          <Route path="/Contactos"  element={<p>hola</p>} />
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
