
const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-[#102a43] text-white px-[5%] py-4 flex items-center justify-between flex-wrap gap-4 shadow-lg">
      <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
        <i className="fas fa-cloud-download-alt text-[#3fa9f5] text-3xl"></i>
        <span>DigitalStore</span>
      </div>

      <div className="flex items-center gap-6 flex-wrap">
        <a
          href="#home"
          className="text-slate-200 hover:text-[#8ed1fc] transition flex items-center gap-1.5 text-[1.05rem] font-medium"
        >
          <i className="fas fa-home"></i>
          Home
        </a>

        <a
          href="#products"
          className="text-slate-200 hover:text-[#8ed1fc] transition flex items-center gap-1.5 text-[1.05rem] font-medium"
        >
          <i className="fas fa-compact-disc"></i>
          Products
        </a>

        <a
          href="#support"
          className="text-slate-200 hover:text-[#8ed1fc] transition flex items-center gap-1.5 text-[1.05rem] font-medium"
        >
          <i className="fas fa-headset"></i>
          Support
        </a>

        <button
          onClick={onCartClick}
          className="bg-[#243b53] border border-[#243b53] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#2a4b72] transition cursor-pointer"
        >
          <i className="fas fa-shopping-cart"></i>

          <span className="font-medium">Cart</span>

          <span className="bg-[#3fa9f5] text-[#102a43] font-bold px-2.5 py-0.5 rounded-full text-sm ml-1">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;