export function Card({ name, price, img, addToShop }) {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <section>
        <p>Price: ${price.toFixed(2)}</p> 
      </section>
      <footer>
        <button onClick={addToShop} aria-label={`Ajouter ${name} au panier`}>
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
