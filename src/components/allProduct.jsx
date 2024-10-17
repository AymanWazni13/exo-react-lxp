export const allProduct = [
  {
    id: 1,
    name: "Air Force 1",
    price: 100.11, 
    img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
  },
  {
    id: 2,
    name: "Air Force 1 black",
    price: 100.11,
    img: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/0a3da710-8fc4-40fe-b76a-04fc261ce7a3/date-de-sortie-de-la-air-max-sndr-«%C2%A0black-and-metallic-gold%C2%A0»-hj4130-002.jpg",
  },
  {
    id: 3,
    name: "Force",
    price: 19.11,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/31219197-856b-4477-aabc-2792f0b6ca43/AIR+MAX+90+%28GS%29.png",
  },
  {
    id: 4,
    name: "Air",
    price: 19.11,
    img: "https://nikeuyprod.vtexassets.com/arquivos/ids/256879-1200-1200?width=1200&height=1200&aspect=true",
  },
];

export const productShop = [];

export const addProductToShop = (product) => {
  if (!productShop.some(item => item.id === product.id)) {
    productShop.push(product);
    console.log("Produit ajouté :", product);
    console.log("Panier actuel :", productShop);
  } else {
    console.log("Le produit est déjà dans le panier.");
  }
};
