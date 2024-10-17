export function Card ({name, price, img}){
    return (
        <article >
    <header>
      <h2>{name}</h2>
    </header>
    <figure>
      <img src={img}/>
    </figure>
    <section>
      <p>Price: ${price}</p>
    </section>
    <footer>
      <button>Add to Cart</button>
    </footer>
  </article>



)
}