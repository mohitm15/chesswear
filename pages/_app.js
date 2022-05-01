import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [usertoken, setUsertoken] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    //console.log("From useEffect");
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (err) {
      console.error(err);
      localStorage.clear();
    }

    const token = localStorage.getItem("token");
    if (token != null) {
      setUsertoken({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

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
    if (localStorage.getItem("token")) {
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

      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    else {
      toast.error("Kindly Login before adding items to the cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    }
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
    if(localStorage.getItem('token')) {
      saveCart({});
      let newCart = {};
      newCart[itemcode] = { qty, price, name, size, variant };
      setCart(newCart);
      saveCart(newCart);
      //console.log("newcart - ", newCart);
      router.push("/checkout");
    }
    else {
      toast.error("Kindly Login before buying your selected item.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out Successfully !", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      router.push("/");
    }, 2500);
    setUsertoken({ value: null });
    setKey(Math.random());
  };

  return (
    <>
      <Navbar
        usertoken={usertoken}
        logout={logout}
        key={key}
        cart={cart}
        subtotal={subtotal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <LoadingBar
        color="#2563EB  "
        progress={progress}
        height={4}
        waitingTime={200}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component
        cart={cart}
        usertoken={usertoken}
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
