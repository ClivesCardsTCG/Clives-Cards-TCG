// Clives Cards TCG - Full Store React App

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Neon Logo Tee",
    price: 29.99,
    image: "/images/tee.jpg",
    description: "Premium cotton T-shirt with the Clives Cards neon logo."
  },
  {
    id: 2,
    title: "Graded Charizard",
    price: 199.99,
    image: "/images/charizard.jpg",
    description: "PSA 9 graded holographic Charizard from Base Set."
  },
  {
    id: 3,
    title: "Sealed Booster Pack",
    price: 14.99,
    image: "/images/booster.jpg",
    description: "Original sealed booster pack from Sword & Shield era."
  }
];

export default function StoreApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-purple-900 via-black to-black">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-neon-pink mb-4">
          Clives Cards TCG
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Your hub for Pokémon merch, graded cards & sealed products
        </p>
        <div className="space-x-4">
          <Button className="bg-pink-600 hover:bg-pink-700">Shop Merch</Button>
          <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-800/20">
            Shop Cards
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="bg-zinc-900 border-zinc-700 rounded-2xl shadow-md">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-1">{product.title}</h3>
              <p className="text-sm text-gray-400 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mb-4">{product.description}</p>
              <Button onClick={() => addToCart(product)} className="w-full bg-pink-600 hover:bg-pink-700">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Cart & Checkout */}
      <section className="max-w-4xl mx-auto p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between border-b border-zinc-700 py-2">
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold mt-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
              Checkout with Shopify
            </Button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-gray-400 text-sm py-6 px-4 text-center">
        <div className="flex justify-center mb-2">
          <a
            href="https://instagram.com/clivescards"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 hover:text-white"
          >
            <Instagram className="w-5 h-5" />
            <span>@clivescards</span>
          </a>
        </div>
        <p>&copy; 2025 Clives Cards TCG. All rights reserved.</p>
      </footer>
    </div>
  );
}
