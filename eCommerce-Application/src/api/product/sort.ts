import { ClientResponse, ProductProjection, ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { FilterForm } from '../../components/filter-form/FilterForm';
import { apiRoot, projectKey } from '../client/client';
import { getProductsWithCategories } from './getProductWithCategory';
import { CountriesCodes, CountryNames } from '../../types/enums';

export const sortProducts = async (parameters: FilterForm): Promise<ProductProjection[]> => {
  const response: ClientResponse<ProductProjectionPagedQueryResponse> = await apiRoot
    .withProjectKey({ projectKey })
    .productProjections()
    .get()
    .execute();

  let allProducts: ProductProjection[] = response.body.results;

  if (parameters.genres) {
    const productsArray = parameters.genres.map((genre) => getProductsWithCategories(genre));
    const products = await Promise.all(productsArray);
    allProducts = products.flat();
  }
  if (parameters.countries?.length) {
    const countryCodes = new Set<string>();

    for (const countryName of parameters.countries) {
      switch (countryName) {
        case CountryNames.RU: {
          countryCodes.add(CountriesCodes.RU);
          break;
        }
        case CountryNames.US: {
          countryCodes.add(CountriesCodes.US);
          break;
        }
        case CountryNames.UK: {
          countryCodes.add(CountriesCodes.UK);
          break;
        }
      }
    }

    allProducts = allProducts.filter((product) => {
      const countryAttribute = product.masterVariant.attributes?.find((attribute) => attribute.name === 'country')
        ?.value.en;

      return countryAttribute && countryCodes.has(countryAttribute);
    });
  }
  if (parameters.yearsFrom) {
    allProducts = allProducts.filter(
      (product) =>
        new Date(
          product.masterVariant.attributes?.find((attribute) => attribute.name === 'release_year')?.value,
        ).getFullYear() >= parameters.yearsFrom!,
    );
  }
  if (parameters.yearsTo) {
    allProducts = allProducts.filter(
      (product) =>
        new Date(
          product.masterVariant.attributes?.find((attribute) => attribute.name === 'release_year')?.value,
        ).getFullYear() <= parameters.yearsTo!,
    );
  }
  if (parameters.labels?.length) {
    for (const lable of parameters.labels)
      allProducts = allProducts.filter((product) =>
        product.masterVariant.attributes?.find((attribute) => attribute.name === 'record_label')?.value.includes(lable),
      );
  }
  console.log(allProducts);
  if (parameters.priceFrom) {
    allProducts = allProducts.filter((product) => {
      const priceCents = product.masterVariant.price?.value?.centAmount;
      return priceCents !== undefined && priceCents / 100 >= parameters.priceTo!;
    });
  }
  if (parameters.priceTo) {
    allProducts = allProducts.filter((product) => {
      const priceCents = product.masterVariant.price?.value?.centAmount;
      return priceCents !== undefined && priceCents / 100 <= parameters.priceTo!;
    });
  }
  if (parameters.discounted === true) {
    allProducts = allProducts.filter((product) => product.masterVariant.price?.discounted);
  }

  console.log(allProducts);
  return allProducts;
};
