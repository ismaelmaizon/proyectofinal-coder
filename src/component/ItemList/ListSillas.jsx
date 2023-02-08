import { Link } from 'react-router-dom';
import style from './List.module.css';

const ListSillas = function ({productos}) {

    console.log(productos);
    const pr = []
    
    productos.forEach(function (producto) {
        if (producto.tipo == "silla") {
          pr.push(producto)
        }
    })
    

  

    console.log(pr);



    return (
      pr.map((el) => {
        return (
          <div className={style.card1}>
                    <h1 className={style.card1Title}>{el.name}</h1>
                    <img src={el.url} alt="" className={style.imagenesCard} />
                    <p className={style.card1Description}>{el.description}</p>
                    <div className={style.card1Btn}>
                        <button>eliminar</button>
                        <Link to={`/Productos/detalles/${el.id}`}>
                            <button>detalles</button>
                        </Link>
                    </div>
                </div>
        )
      })
    )

    
  }


export default ListSillas;
