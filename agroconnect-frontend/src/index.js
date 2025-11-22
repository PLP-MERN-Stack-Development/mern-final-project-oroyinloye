import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";                // ✅ add .js
import { AuthProvider } from "./context/AuthContext.js";  // ✅ add .js
import { CartProvider } from "./context/CartContext.js";  // ✅ add .js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
