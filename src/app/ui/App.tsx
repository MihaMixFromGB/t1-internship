// import { HomePage } from '@/pages/home-page';
import { Layout } from '@/pages/layouts';
import { ProductPage } from '@/pages/product-page';

const product = {
  id: '1',
  label: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  priceInUSD: 549,
  discountInPercent: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  // thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  images: [
    'https://cdn.dummyjson.com/product-images/1/1.jpg',
    'https://cdn.dummyjson.com/product-images/1/2.jpg',
    'https://cdn.dummyjson.com/product-images/1/3.jpg',
    'https://cdn.dummyjson.com/product-images/1/4.jpg',
    'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  ],
};

function App() {
  // return <HomePage />;
  return (
    <Layout>
      <ProductPage product={product} />
    </Layout>
  );
}

export default App;
