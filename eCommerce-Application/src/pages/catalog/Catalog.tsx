import { useEffect, useState } from 'react';
import { dataProducts } from '../../api/product/getProduct';
import ProductCard from '../../components/product-card/ProductCard';
import { DataProduct } from '../../api/types-api';

export default function Catalog() {
  const [content, setContent] = useState<DataProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await dataProducts();
      setContent(products);
    };
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap',
        padding: '30px',
      }}
    >
      {content.map((item) => (
        <ProductCard key={item.id} content={item} />
      ))}
    </div>
  );
}
