import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../db/firebase-config';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Form = () => {

    const {idparams} = useParams()
    console.log(idparams)
    


    const [productos, setProductos] = useState([])
    const prodCollection = collection(db, "productos" )

    const getProductos = async () => {
        const dataProd = await getDocs(prodCollection);
        console.log(dataProd);
        setProductos(dataProd.docs.map((doc) => ({...doc.data(), id: doc.id})));
        console.log(productos)
    };

    useEffect(() => {
        getProductos();
    }, []);

    
    const producto = []

    const el = productos.find(pr => pr.id === idparams)

    producto.push(el)
    console.log(producto)


}

export default Form;
