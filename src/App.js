import { useState } from "react";
import { nanoid } from "nanoid";

import Navbar from "./components/Navbar";
import ProductImage from "./components/ProductImage";
import { productImages, productThumbs } from './assets'
import ProductDetails from "./components/ProductDetails";
import Lightbox from "./components/Lightbox";

function App() {
  const [lightbox, setLightbox] = useState(false)
  const [count, setCount] = useState(0)
  const [addCart, setAddCart] = useState([])

  const handleLightbox = () => {
    setLightbox(!lightbox)
  }

  const handleAddCart = () => {
    if (count === 0) return
    setAddCart([{cart_count: count, cart_id: nanoid()}])
  }

  return (
    <main className="App">
      <Navbar addCart={addCart} setAddCart={setAddCart} />
      <div className="product-all">
        <ProductImage images={productImages} thumbs={productThumbs} handleLightbox={handleLightbox} />
        <ProductDetails count={count} setCount={setCount} handleAddCart={handleAddCart} />
      </div>
      {lightbox && <Lightbox handleLightbox={handleLightbox}><ProductImage images={productImages} thumbs={productThumbs} handleLightbox={handleLightbox}  /></Lightbox>}
    </main>
  );
}

export default App;
