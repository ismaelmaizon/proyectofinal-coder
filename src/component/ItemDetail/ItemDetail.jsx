import React from 'react'
import { useParams } from 'react-router-dom';
import style from './ItemDetail.module.css'


const ItemDetail = ( {productos} ) => {

    const {idparams}  = useParams()

    console.log(idparams);
    console.log(productos);

    const producto = productos.find(pr => {
        return pr.id === idparams;
    } )

    console.log(producto);

    


    return(
        <div className= {style.card} >
            <img src={producto.url} alt="" className={style.card_url}/>
            <div className= {style.card_info} >
                <div className= {style.card_destalles} >
                    <h1 className= {style.card_title} > Nombre del producto: {producto.name}</h1>
                    <p className={style.card_description}> Descripcion: {producto.description}</p>
                    <h2>cantidad en stock: {producto.stok}</h2>
                </div>
                <div className= {style.btns} >
                    <button>comprar</button>
                    <button>+</button><button>-</button>
                    <h3>unidades deceadas: "harcodeados" </h3>
                </div>
            </div>
        </div>
    )


    


}

export default ItemDetail;
