import './App.css'
import Navbar from './component/Navbar/Navbar'
import { Link, Navigate, Route, Routes} from 'react-router-dom'
import CardProducts from './component/ItemListContainer/CardProducts'
import { db } from '../db/firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ListSillas from './component/ItemList/ListSillas'
import ListAlfombras from './component/ItemList/ListAlfombras'
import ListPuff from './component/ItemList/ListPuff'
import ItemDetail from './component/ItemDetail/ItemDetail'
import Create from './component/Create/Create';



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
    <div className="container">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" 
          element={<CardProducts productos={productos} />} />
          <Route path="/Productos"  element= { <CardProducts productos={productos} /> }  />
          <Route path="/Productos/sillas"  element={<ListSillas productos={productos} />} />
          <Route path="/Productos/puff"  element={<ListPuff productos={productos} />} /> 
          <Route path="/Productos/alfombras"  element={<ListAlfombras productos={productos} />} /> 
          <Route path="/Productos/detalles/:idparams"  element={<ItemDetail productos={productos} />} />
          <Route path="/Nosotros"  element={<p>N</p>} />
          <Route path="/Contactos"  element={<p>hola</p>} />
          <Route path='*' element={<Navigate to="/"/>}/>
          <Route path='/Productos/crear' element={<Create/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
