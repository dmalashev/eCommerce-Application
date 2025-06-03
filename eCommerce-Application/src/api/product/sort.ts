import {  ProductProjection } from "@commercetools/platform-sdk";
import { FilterForm } from "../../components/filter-form/FilterForm";
import { getProductsWithCategories } from "./getProductWithCategory";

export async function sortProducts(params: FilterForm) {

  // const categoryIds = params.genres!


  const productsArrays = await Promise.all(


      [ params.genres?.map(item => getProductsWithCategories(item)) || [],
      params.countries?.map(item => getProductsWithCategories(item)) || [],
      params.labels?.map(item => getProductsWithCategories(item)) || [],

    ].flat()
     );
  let allProducts: ProductProjection[] = productsArrays.flat();
  console.log(allProducts)
  if (params.priceFrom) {
    allProducts = allProducts.filter(item => item.masterVariant.price?.value.centAmount! >= params.priceFrom!);
  }
  else if (params.priceTo) {
    allProducts = allProducts.filter(item => item.masterVariant.price?.value.centAmount! <= params.priceTo!);
  }
  if(params.yearsFrom || params.yearsTo){
    allProducts = allProducts.filter(item => item.masterVariant.attributes?.find((attribute) => attribute.name === "release_year")?.value >= params.yearsFrom!);
    allProducts = allProducts.filter(item => item.masterVariant.attributes?.find((attribute) => attribute.name === "release_year")?.value <= params.yearsTo!);
  }

  if (params.discounted) {
    allProducts = allProducts.filter(item => item.masterVariant.price?.discounted);
  }
  console.log(allProducts)



}


