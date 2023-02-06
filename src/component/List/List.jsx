import { useParams } from "react-router-dom";


const List = function ({productos}) {

    console.log(productos);

    const {sillas} = useParams()

    console.log(sillas);

    let pr = []

    productos.forEach(function (producto) {
      if (producto.tipo == "silla") {
        pr.push(producto)
      }
    })

    console.log(pr);



    return (
      pr.map((silla) => {
        return (
          <div>
            <h1> {silla.name} </h1>
            <p> {silla.description} </p>
          </div>
        )
      })
    )

    
  }


export default List;
