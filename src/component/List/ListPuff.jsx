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
            <div key={el.id} >
                <h1> {el.name} </h1>
                <p> {el.description} </p>
            </div>
        )
      })
    )

    
  }


export default ListPuff;