import React from 'react'
import { useParams } from 'react-router-dom';


const Form = ( {productos} ) => {

    const {idparams}  = useParams()

    console.log(idparams);
    console.log(productos);

    const producto = productos.find(pr => {
        return pr.id === idparams;
    } )

    console.log(producto);


    return(
        <div className="card1">
            <h1 className='card1Title'>{producto.name}</h1>
            <img src={producto.url} alt="" className='imagenesCard'/>
            <p className='card1Description'>{producto.description}</p>
        </div>
    )


    


}

export default Form;
