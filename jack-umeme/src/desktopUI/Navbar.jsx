import React, { useState } from "react";

function Navbar() {
  return (
    <div className="landing-wrapper">
      <div className="full-nav">
        <header>
          <img src="./com.jackumeme1.png" alt="logo" />
        </header>

        <nav>
          <ul>
            <li>User App</li>
            <li> Store App </li>
            <li> Terms & Conditions</li>
            <li> Privacy Policy</li>
          </ul>
        </nav>
      </div>

      <div className="intro">
        <p className="intro-1">
          Shop Smart, <span>Shop Easy</span>: Your One Stop Ecommerce
          Destination!
        </p>

        <p className="intro-2">
          Welcome to Jack Umeme, Where Shopping Meets Convenience: <br />{" "}
          Browse, Discover, and Embrace a World of Endless Possibilities! <br />{" "}
          Experience Seamless Ecommerce Delight with Exclusive Deals, <br />{" "}
          Effortless Navigation, and Personalized Recommendations Tailored Just
          for You. Embrace the Future of Shopping, Shop with Confidence,
          Anytime, Anywhere!
        </p>
      </div>

      <div className="app-stores">
        <div className="iphone">
          <img className="link2" src="./img/AppStore.png" alt="appstore" />
          <img src="./img/iPhone 13 Pro (1).png" alt="app store" />
        </div>

        <div className="android">
          <img className="link" src="./img/Playstore.png" alt="appstore" />
          <img src="./img/iPhone 13 Pro.png" alt="app store" />
        </div>
      </div>

      <h1>Our Features</h1>

      <div className="features">
        <div className="features-1">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo
          hic rem dolores. Doloremque incidunt, nobis repudiandae ullam ut esse,
          nisi id voluptate ducimus, ratione tempore maiores alias labore fuga?
        </div>
        <div className="features-2">
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            asperiores sequi, itaque quaerat ducimus illo deserunt. Officiis et
            necessitatibus reiciendis laudantium sed doloribus, mollitia tenetur
            ullam sapiente deserunt dolor voluptatum?
          </div>
          <div className="content">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            maiores magni consequatur sapiente alias quis architecto ipsum non
            at! Reiciendis repellat qui suscipit quam rerum placeat cupiditate
            accusamus maiores tenetur.
          </div>
        </div>
      </div>
      <div className="qualities">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M15 5H35V10H15V5ZM10 15V10H15V15H10ZM10 35H5V15H10V35ZM15 40H10V35H15V40ZM35 40V45H15V40H35ZM40 35H35V40H40V45H45V50H50V55H55V50H50V45H45V40H40V35ZM40 15H45V35H40V15ZM40 15V10H35V15H40Z"
              fill="#212121"
            />
          </svg>
          <h2>Smart Shopping</h2>
          <p>
            With our Ecommerce App, finding your favorite products is a breeze!
            Our intuitive search and filtering options make sure you find what
            you need quickly and efficiently.
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
          >
            <path
              d="M18 45C20.75 45 23 47.25 23 50C23 52.75 20.75 55 18 55C15.25 55 13 52.75 13 50C13 47.25 15.25 45 18 45ZM43 45C45.75 45 48 47.25 48 50C48 52.75 45.75 55 43 55C40.25 55 38 52.75 38 50C38 47.25 40.25 45 43 45ZM18.5 37C18.5 37.25 18.75 37.5 19 37.5H48V42.5H18C15.25 42.5 13 40.25 13 37.5C13 36.5 13.25 35.75 13.5 35L16.75 29L8 10H3V5H11.25L22 27.5H39.5L49.25 10L53.5 12.5L43.75 30C43 31.5 41.25 32.5 39.5 32.5H20.75L18.5 36.5V37ZM24 2.5C26 2.5 27.5 4 27.5 6C27.5 8 26 9.5 24 9.5C22 9.5 20.5 8 20.5 6C20.5 4 22.25 2.5 24 2.5ZM37 22.5C35 22.5 33.5 21 33.5 19C33.5 17 35 15.5 37 15.5C39 15.5 40.5 17 40.5 19C40.5 21 38.75 22.5 37 22.5ZM23.5 22.5L20.5 19.5L37.5 2.5L40.5 5.5L23.5 22.5Z"
              fill="#212121"
            />
          </svg>

          <h2>Exclusive Deals</h2>
          <p>
            Enjoy the thrill of unbeatable discounts and exclusive offers
            personalized to your preferences. Our Ecommerce App ensures you get
            the best deals on your favorite items, every time you shop.
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M30 53.375L26.375 50.075C13.5 38.4 5 30.675 5 21.25C5 13.525 11.05 7.5 18.75 7.5C23.1 7.5 27.275 9.525 30 12.7C32.725 9.525 36.9 7.5 41.25 7.5C48.95 7.5 55 13.525 55 21.25C55 30.675 46.5 38.4 33.625 50.075L30 53.375Z"
              fill="#212121"
            />
          </svg>
          <h2>Effortless Wishlist</h2>
          <p>
            Effortless Wishlist: Save your favorite products for later with our
            convenient Wishlist feature. Easily access and manage your wishlist,
            making it simpler than ever to keep track of your most-wanted items.
          </p>
        </div>
      </div>
      <div className="qualities-2">
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
        </div>

        <div className="qualities-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
            >
              <path
                d="M30.7578 2.86914L8.25781 12.8691V27.8691C8.25781 41.7441 17.8578 54.7191 30.7578 57.8691C43.6578 54.7191 53.2578 41.7441 53.2578 27.8691V12.8691L30.7578 2.86914ZM30.7578 17.8691C34.2578 17.8691 37.7578 20.6191 37.7578 24.1191V27.8691C39.2578 27.8691 40.7578 29.3691 40.7578 31.1191V39.8691C40.7578 41.3691 39.2578 42.8691 37.5078 42.8691H23.7578C22.2578 42.8691 20.7578 41.3691 20.7578 39.6191V30.8691C20.7578 29.3691 22.2578 27.8691 23.7578 27.8691V24.1191C23.7578 20.6191 27.2578 17.8691 30.7578 17.8691ZM30.7578 20.8691C28.7578 20.8691 27.0078 22.1191 27.0078 24.1191V27.8691H34.5078V24.1191C34.5078 22.1191 32.7578 20.8691 30.7578 20.8691Z"
                fill="#212121"
              />
            </svg>

            <h2>Easy Checkout</h2>
            <p>
              A simplified checkout process for a smoother all round experience.
              In just a fe clicks a customer can cart and buy their chosen
              product.
            </p>
          </div>
          <div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
            >
              <path
                d="M30.7578 2.86914L8.25781 12.8691V27.8691C8.25781 41.7441 17.8578 54.7191 30.7578 57.8691C43.6578 54.7191 53.2578 41.7441 53.2578 27.8691V12.8691L30.7578 2.86914ZM30.7578 17.8691C34.2578 17.8691 37.7578 20.6191 37.7578 24.1191V27.8691C39.2578 27.8691 40.7578 29.3691 40.7578 31.1191V39.8691C40.7578 41.3691 39.2578 42.8691 37.5078 42.8691H23.7578C22.2578 42.8691 20.7578 41.3691 20.7578 39.6191V30.8691C20.7578 29.3691 22.2578 27.8691 23.7578 27.8691V24.1191C23.7578 20.6191 27.2578 17.8691 30.7578 17.8691ZM30.7578 20.8691C28.7578 20.8691 27.0078 22.1191 27.0078 24.1191V27.8691H34.5078V24.1191C34.5078 22.1191 32.7578 20.8691 30.7578 20.8691Z"
                fill="#212121"
              />
            </svg>

            <h2>Easy Checkout</h2>
            <p>
              A simplified checkout process for a smoother all round experience.
              In just a fe clicks a customer can cart and buy their chosen
              product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
