
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
          <div key={el.id} >
            <h1> {el.name} </h1>
            <p> {el.description} </p>
          </div>
        )
      })
    )

    
  }


export default ListSillas;
