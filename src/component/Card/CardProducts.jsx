import React from 'react'
import { Link } from 'react-router-dom';
import './CardProducts.css';

const CardProducts = ( {productos } ) => {
    
    console.log( productos)

    return (
        productos.map((producto) => {
            return (
                <div className="card1">
                    <h1 className='card1Title'>{producto.name}</h1>
                    <img src={producto.url} alt="" className='imagenesCard'/>
                    <p className='card1Description'>{producto.description}</p>
                    <div className='card1Btn'>
                        <button>eliminar</button>
                        <Link to={`/Productos/detalles/${producto.id}`}>
                            <button>detalles</button>
                        </Link>
                    </div>
                </div>
            )

        })
    )

}

export default CardProducts;



/*
<div className="card1">
            <h1 className='card1Title'>{name}</h1>
            <img src={url} alt="" className='imagenesCard'/>
            <p className='card1Description'>{description}</p>
            <div className='card1Btn'>
                <button>eliminar</button>
                <Link to={`/Productos/detalles/${id}`}>
                    <button>detalles</button>
                </Link>
            </div>
        </div>


*/ 