// // import { useState } from 'react'
// // import heroImg from './assets/hero.png'

// // // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           {/* <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" /> */}
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 {/* <img className="logo" src={viteLogo} alt="" /> */}
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 {/* <img className="button-icon" src={reactLogo} alt="" /> */}
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>

// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App


// import { useState } from "react";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import FeaturedProducts from "./components/FeaturedProducts";
// import Cart from "./components/cart";
// import Footer from "./components/footer";
// import { products } from "./data/products";

// const App = () => {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addToCart = (product) => {
//     setCart((currentCart) => {
//       const alreadyExists = currentCart.some(
//         (item) => item.id === product.id
//       );

//       if (alreadyExists) {
//         return currentCart;
//       }

//       return [
//         ...currentCart,
//         {
//           id: product.id,
//           title: product.title,
//           price: product.price,
//           icon: product.icon,
//         },
//       ];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((currentCart) =>
//       currentCart.filter((item) => item.id !== productId)
//     );
//   };

//   const checkout = () => {
//     if (cart.length === 0) return;

//     const total = cart.reduce(
//       (sum, item) => sum + item.price,
//       0
//     );

//     alert(
//       `✅ Demo checkout — you ordered ${cart.length} item(s) for $${total.toFixed(
//         2
//       )}.\nThank you for shopping at DigitalStore!`
//     );
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col">
//       <Navbar
//         cartCount={cart.length}
//         onCartClick={() => setIsCartOpen(true)}
//       />

//       <Hero />

//       <FeaturedProducts
//         products={products}
//         cart={cart}
//         onAddToCart={addToCart}
//       />

//       <Cart
//         cart={cart}
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         onRemove={removeFromCart}
//         onCheckout={checkout}
//       />

//       <Footer />
//     </div>
//   );
// };

// export default App;


import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedProducts from "./components/featuredProducts";
import Cart from "./components/cart";
import Footer from "./components/footer";
import { products} from "./product";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const alreadyExists = currentCart.some(
        (item) => item.id === product.id
      );

      // Don't add the same product twice
      if (alreadyExists) {
        return currentCart;
      }

      return [
        ...currentCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          icon: product.icon,
        },
      ];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // Checkout
  const checkout = () => {
    if (cart.length === 0) {
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );

    alert(
      `✅ Demo checkout — you ordered ${cart.length} item(s) for $${total.toFixed(
        2
      )}.\n\nThank you for shopping at DigitalStore!`
    );

    // Clear cart after checkout
    setCart([]);

    // Close cart
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts
        products={products}
        cart={cart}
        onAddToCart={addToCart}
      />

      {/* Cart */}
      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;