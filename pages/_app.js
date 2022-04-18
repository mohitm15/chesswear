import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Router, { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  const router = useRouter();

  useEffect(() => {
    //console.log("From useEffect");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (err) {
      console.error(err);
      localStorage.clear();
    }
  }, []);

  const saveCart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let temp = 0;
    let keysi = Object.keys(mycart);
    for (let index = 0; index < keysi.length; index++) {
      temp = temp + mycart[keysi[index]].price * mycart[keysi[index]].qty;
    }
    setSubtotal(temp);
  };

  const addToCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = cart;
    //console.log("added")
    if (itemcode in cart) {
      //console.log("alredy present")
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      newCart[itemcode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    //console.log("newcart - ", newCart)
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const removeFromCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
    }
    //console.log("newcart[itemcode] - ",newCart)
    if (newCart[itemcode].qty <= 0) {
      delete newCart[itemcode];
    }
    setCart(newCart);
    saveCart(newCart);
  };


  const buyNow = (itemcode, qty, price, name, size, variant) => {
    saveCart({});
    let newCart = {itemcode: {qty, price, name, size, variant}};
    setCart(newCart);
    saveCart(newCart);
    console.log("newcart - ", newCart)
    router.push('/checkout');
  }

  return (
    <>
      <Navbar
        cart={cart}
        subtotal={subtotal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Component
        cart={cart}
        subtotal={subtotal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        buyNow={buyNow}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
