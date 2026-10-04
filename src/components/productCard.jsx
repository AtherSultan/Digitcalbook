const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col">
      
      {/* Product Icon */}
      <div className="bg-[#eef4fe] p-8 flex justify-center items-center text-6xl text-brand-dark border-b border-slate-200/70">
        <i className={`fas ${product.icon}`}></i>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs uppercase tracking-wider font-semibold text-brand-light mb-1.5">
          {product.category}
        </div>

        <h3 className="text-xl font-bold text-brand-dark mb-2 leading-snug">
          {product.title}
        </h3>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
          {product.desc}
        </p>

        <div className="flex items-center justify-between mb-4 mt-auto">
          <span className="text-2xl font-extrabold text-brand-dark tracking-tight">
            ${Number(product.price).toFixed(2)}

            <small className="text-sm font-medium text-slate-400 line-through ml-1">
              ${Number(product.oldPrice).toFixed(2)}
            </small>
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={isInCart}
          className={`w-full py-2.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition ${
            isInCart
              ? "bg-emerald-500 text-white border border-emerald-500 cursor-not-allowed"
              : "bg-brand-dark text-white border border-brand-dark hover:bg-brand-medium hover:border-brand-medium"
          }`}
        >
          <i
            className={`fas ${
              isInCart ? "fa-check" : "fa-cart-plus"
            }`}
          ></i>

          {isInCart ? "In cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;