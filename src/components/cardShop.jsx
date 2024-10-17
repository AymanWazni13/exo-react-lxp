export function CardShop ({name, price, img}){
    return (
        <article >
    <header>
      <h2>{name}</h2>
    </header>
    <figure>
      <img src={img}/>
    </figure>
    <section>
      <p>${price}</p>
    </section>

  </article>



)
}