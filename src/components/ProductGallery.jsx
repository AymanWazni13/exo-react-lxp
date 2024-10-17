import {Card} from "./card"

const allProduct = [{id:1,name:"Air Force",price:"19,11",img:"https://nikeuyprod.vtexassets.com/arquivos/ids/256879-1200-1200?width=1200&height=1200&aspect=true"},{id:2,name:"Air et Force",price:"19,11",img:"https://nikeuyprod.vtexassets.com/arquivos/ids/256879-1200-1200?width=1200&height=1200&aspect=true"},{id:3,name:" Force",price:"19,11",img:"https://nikeuyprod.vtexassets.com/arquivos/ids/256879-1200-1200?width=1200&height=1200&aspect=true"},{id:4,name:"Air ",price:"19,11",img:"https://nikeuyprod.vtexassets.com/arquivos/ids/256879-1200-1200?width=1200&height=1200&aspect=true"}]

export function ProductGallery(){
    console.log(allProduct)
    return (<div className="ProductGallery">

{allProduct.map((product) => {
        return (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        );
      })}


    </div>)
}