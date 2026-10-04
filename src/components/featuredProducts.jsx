import { useMemo, useState } from "react";
import ProductCard from "./productCard";

const FeaturedProducts = ({ products, cart, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeFilter
    );
  }, [products, activeFilter]);

  const filters = ["all", "design", "audio", "code"];

  return (
    <main
      id="products"
      className="max-w-7xl mx-auto px-[5%] py-12 flex-1 w-full"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold text-brand-dark flex items-center gap-2.5">
          <i className="fas fa-star text-brand-light"></i>
          Featured products
        </h2>

        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition capitalize ${
                  active
                    ? "bg-brand-dark text-white border border-brand-dark hover:bg-brand-medium"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-slate-500 text-lg">
          No products in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isInCart={cart.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default FeaturedProducts;