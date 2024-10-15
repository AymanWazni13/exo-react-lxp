export function Cart ({name, price}){
    return (<div>
        <article>
    <header>
      <h2>{name}</h2>
    </header>
    <figure>
      <img src="https://nikeuyprod.vtexassets.com/arquivos/ids/256879-1200-1200?width=1200&height=1200&aspect=true" alt="Description of the product"/>
    </figure>
    <section>
      <p>Price: ${price}</p>
    </section>
    <footer>
      <button>Add to Cart</button>
    </footer>
  </article>



    </div>)
}