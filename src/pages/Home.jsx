import Hero from '../components/home/Hero';
import ProductList from '../components/products/ProductList';
import ExclusiveBanner from '../components/home/ExclusiveBanner'; // ✅ Import
import ProductSpecs from '../components/home/ProductSpecs';     // ✅ Import
import ProductReviews from '../components/home/ProductReviews'; // ✅ Import
import Testimonials from '../components/home/Testimonials';
import Brands from '../components/home/Brands';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center my-12 dark:text-dark-text-primary relative title">Featured Products</h2>
        <ProductList />
      </div>
      <ExclusiveBanner /> {/* ✅ Add Banner */}
      <div className="container mx-auto px-4">
        <ProductSpecs />    {/* ✅ Add Specs Table */}
        <ProductReviews />  {/* ✅ Add Reviews Section */}
        <Testimonials />
        <Brands />
      </div>
    </>
  );
}