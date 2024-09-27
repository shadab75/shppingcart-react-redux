import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import store from "./redux/store";
import {Provider} from "react-redux"
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
function App() {

  return(
      <BrowserRouter>
          <Provider store={store}>
          <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/cart" element={<ShoppingCart/>}></Route>
        </Routes>
         </Provider>
      </BrowserRouter>
  )

}

export default App;
