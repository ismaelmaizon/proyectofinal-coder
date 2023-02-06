import React from 'react'
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import './CardProducts.css';

const CartProducts = ({name, description, url, id}) => {
    
    // console.log(name);

    console.log(name);
    console.log(description);
    console.log(url);
    console.log(id);
    
    return (
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
    )

}

export default CartProducts;
