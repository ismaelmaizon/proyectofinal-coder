import { db } from '../../../db/firebase-config';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import CardProducts from '../Card/CardProducts';



const DataBase = () => {

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

    
    
    return(
        productos.map(({name, description, url, id}) =>(
            <CardProducts key={id} name={name} description={description} url={url}  id={id}/>)
    ))
    
}

export default DataBase;
