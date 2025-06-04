import { FilterForm } from "../../components/filter-form/FilterForm";
import { apiRoot, projectKey } from "../client/client";
import { getProductsWithCategories } from "./getProductWithCategory";





export const sortProducts = async (params: FilterForm) => {
  let allProducts = (await apiRoot.withProjectKey({ projectKey }).productProjections().get().execute()).body.results;


  if(params.genres) {
    const productsArray = params.genres.map(genre =>
       getProductsWithCategories(genre)
    )
    const products = await Promise.all(productsArray);
    allProducts = products.flat();
  }
  if (params.countries) {
    const productsArray = params.countries.map(country =>
      getProductsWithCategories(country)
   )
   const products = await Promise.all(productsArray);
   allProducts = allProducts.concat(products.flat());
  }
  if (params.yearsFrom) {

    allProducts = allProducts.filter(product => new Date(product.masterVariant.attributes?.find(attribute => attribute.name === 'release_year')?.value).getFullYear() >= params.yearsFrom!);
  }
  if (params.yearsTo) {
   allProducts = allProducts.filter(product => new Date(product.masterVariant.attributes?.find(attribute => attribute.name === 'release_year')?.value).getFullYear() <= params.yearsTo!);

  }
  if (params.labels?.length) {
    params.labels.forEach(lable => allProducts =allProducts.filter(product => product.masterVariant.attributes?.find(attr => attr.name === "record_label")?.value.includes(lable)))
  }




  console.log(allProducts)











};


