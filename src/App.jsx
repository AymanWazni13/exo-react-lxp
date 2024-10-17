import { useState } from "react";
import { ProductGallery } from "./components/ProductGallery";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/Shop";

function App() {
  const [productShop, setProductShop] = useState([]); 

  const addProductToShop = (product) => {
    if (!productShop.some(item => item.id === product.id)) {
      setProductShop([...productShop, product]); 
      console.log("Produit ajouté :", product);
    } else {
      console.log("Le produit est déjà dans le panier.");
    }
  };

  return (
    <div>
      <Navbar />
      <ProductGallery addProductToShop={addProductToShop} />
      <Shop productShop={productShop} />
    </div>
  );
}

export default App;
