


const ListAlfombras = function ({productos}) {


    const alfom = []
    
    productos.forEach(function (producto) {
      if (producto.tipo == "alfombra") {
        alfom.push(producto)}}
    )

    console.log(alfom);

    
    return (
      alfom.map((el) => {
        return (
          <div key={el.id} >
            <h1> {el.name} </h1>
            <p> {el.description} </p>
          </div>
        )
      })
    )

    
  }


export default ListAlfombras;