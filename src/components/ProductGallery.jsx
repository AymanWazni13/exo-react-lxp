import { Card } from "./Card";
import { allProduct } from "./allProduct";

export function ProductGallery({ addProductToShop }) {
  return (
    <div className="ProductGallery">
      {allProduct.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          addToShop={() => addProductToShop(product)} 
        />
      ))}
    </div>
  );
}
