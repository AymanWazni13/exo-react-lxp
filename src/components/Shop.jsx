import { CardShop } from "./CardShop";

export function Shop({ productShop }) {
  return (
    <>
      <h2>Your Shop Products</h2>
      {productShop.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <ul className="ProductGallery">
          {productShop.map((product) => (
            <CardShop
              key={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          ))}
        </ul>
      )}
    </>
  );
}
