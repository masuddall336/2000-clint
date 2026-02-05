
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
  const detailOfProducts = useLoaderData();
  console.log(detailOfProducts);
  
  return (
    <div>
      <h2>Product Details for: {detailOfProducts.productName}</h2>
    </div>
  );
};

export default ProductDetails;