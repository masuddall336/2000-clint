import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import FlashSale from '../flash-sale/FlashSale';
import './home.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Home = () => {
  const flash_sale_products_initial = useLoaderData();
  const [prodcuts, setProducts] = useState(flash_sale_products_initial);
  const sliderRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const onMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add('grabbing');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('grabbing');
  };

  const onMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('grabbing');
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollLeftArrow = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRightArrow = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Flash Sale */}
      <div className="home-container">
        <div className="header flex justify-between max-w-7xl mx-auto mb-3">
          <h2>Flash Sale</h2>
          <h1>All Products</h1>
        </div>

        <div className="slider-wrapper relative max-w-7xl mx-auto ">
          <button className="arrow left-arrow" onClick={scrollLeftArrow}>
            <FaChevronLeft />
          </button>

          <div
            ref={sliderRef}
            className={`slider flex overflow-x-hidden cursor-grab select-none h-[300px] ${prodcuts.length <= 4 ? 'justify-center items-center' : ''
              }`}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={(e) => onMouseDown(e.touches[0])}
            onTouchEnd={onMouseUp}
            onTouchMove={(e) => onMouseMove(e.touches[0])}
          >
            {shuffleArray(prodcuts).map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 product-item"
              >
                <FlashSale all_flash_sale={item} setProducts={setProducts} prodcuts={prodcuts} />
              </div>
            ))}
          </div>

          <button className="arrow right-arrow" onClick={scrollRightArrow}>
            <FaChevronRight />
          </button>
        </div>
      </div>





    </div>
  );
};

export default Home;
