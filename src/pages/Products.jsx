import ProductList from '../components/products/ProductList';

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-4">All Products</h1>
      <p className="text-center text-text-secondary dark:text-dark-text-secondary mb-12">
        Discover our curated collection of high-quality products.
      </p>
      {/* Placeholder for sorting/filtering UI */}
      <div className="flex justify-end mb-8">
        <select className="p-2 border rounded-lg dark:bg-dark-surface dark:border-gray-600">
          <option>Sort by popularity</option>
          <option>Sort by price: low to high</option>
          <option>Sort by price: high to low</option>
        </select>
      </div>
      <ProductList />
    </div>
  );
}