import { dataProducts } from "./getProducts";

export function Product() {
  
  dataProducts().then(data => {
    data[0];
   });


  return <>
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
      <p>{images[0]}</p>
    </div>
  </>
}