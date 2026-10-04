// <div id="overlay" class="fixed inset-0 bg-black/40 z-[999] opacity-0 pointer-events-none overlay"></div>
// <aside id="cartPanel" class="cart-panel fixed top-0 right-[-400px] w-[380px] max-w-[90vw] h-screen bg-white shadow-2xl z-[1000] flex flex-col p-6 border-l border-slate-200 overflow-y-auto">
//     <div class="flex justify-between items-center mb-6 border-b-2 border-slate-100 pb-4">
//         <h3 class="text-2xl font-bold text-brand-dark flex items-center gap-2">
//             <i class="fas fa-shopping-bag"></i> Your cart
//         </h3>
//         <button id="closeCartBtn" class="text-3xl leading-none text-slate-400 hover:text-brand-dark transition">&times;</button>
//     </div>

//     <div id="cartItemsContainer" class="cart-items flex-1 flex flex-col gap-5 mb-6 overflow-y-auto pr-1">
//         {/* <!-- filled by JS --> */}
//         <div class="text-slate-500 text-center py-12 text-lg">Your cart is empty</div>
//     </div>

//     <div class="border-t-2 border-slate-100 pt-5 flex justify-between text-2xl font-extrabold text-brand-dark mb-5">
//         <span>Total</span>
//         <span id="cartTotalPrice">$0.00</span>
//     </div>

//     <button id="checkoutBtn" class="bg-brand-light text-white font-bold py-4 rounded-full text-lg flex items-center justify-center gap-2.5 transition hover:bg-brand-medium disabled:bg-slate-300 disabled:cursor-not-allowed" disabled>
//         <i class="fas fa-credit-card"></i> Checkout
//     </button>
// </aside>



const Cart = ({
    cart,
    isOpen,
    onClose,
    onRemove,
    onCheckout,
}) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/40 z-[999]"
                />
            )}

            <aside
                className={`fixed top-0 right-0 w-[380px] max-w-[90vw] h-screen bg-white shadow-2xl z-[1000] flex flex-col p-6 border-l border-slate-200 overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-6 border-b-2 border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-2">
                        <i className="fas fa-shopping-bag"></i>
                        Your cart
                    </h3>

                    <button
                        onClick={onClose}
                        className="text-3xl leading-none text-slate-400 hover:text-brand-dark transition"
                    >
                        &times;
                    </button>
                </div>

                <div className="flex-1 flex flex-col gap-5 mb-6 overflow-y-auto pr-1">
                    {cart.length === 0 ? (
                        <div className="text-slate-500 text-center py-12 text-lg">
                            Your cart is empty
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 items-center border-b border-slate-100 pb-4"
                            >
                                <div className="bg-[#eef4fe] w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-brand-dark flex-shrink-0">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>

                                <div className="flex-1">
                                    <div className="font-bold text-brand-dark text-sm mb-0.5">
                                        {item.title}
                                    </div>

                                    <div className="text-brand-light font-semibold text-sm">
                                        ${item.price.toFixed(2)}
                                    </div>
                                </div>

                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="text-slate-400 hover:text-red-500 transition p-1.5 text-lg"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="border-t-2 border-slate-100 pt-5 flex justify-between text-2xl font-extrabold text-brand-dark mb-5">
                    <span>Total</span>

                    <span>${total.toFixed(2)}</span>
                </div>

                <button
                    onClick={onCheckout}
                    disabled={cart.length === 0}
                    className="bg-brand-light text-white font-bold py-4 rounded-full text-lg flex items-center justify-center gap-2.5 transition hover:bg-brand-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                    <i className="fas fa-credit-card"></i>
                    Checkout
                </button>
            </aside>
        </>
    );
};

export default Cart;