import { Link } from 'react-router-dom';
import style from './List.module.css';

const ListPuff = function ({productos}) {


    const pff = []
    
    productos.forEach(function (producto) {
      if (producto.tipo == "puff") {
        pff.push(producto)}}
    )

    console.log(pff);

    
    return (
      pff.map((el) => {
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


export default ListPuff;