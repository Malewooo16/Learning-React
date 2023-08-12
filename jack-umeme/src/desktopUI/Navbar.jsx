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
          <div>
            <h1>2 apps for the price of 1</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="51"
              viewBox="0 0 50 51"
              fill="none"
            >
              <path
                d="M17.5 5.86914C16.1739 5.86914 14.9021 6.39592 13.9645 7.33361C13.0268 8.27129 12.5 9.54306 12.5 10.8691V40.8691C12.5 42.1952 13.0268 43.467 13.9645 44.4047C14.9021 45.3424 16.1739 45.8691 17.5 45.8691H32.5C33.8261 45.8691 35.0979 45.3424 36.0355 44.4047C36.9732 43.467 37.5 42.1952 37.5 40.8691V10.8691C37.5 9.54306 36.9732 8.27129 36.0355 7.33361C35.0979 6.39592 33.8261 5.86914 32.5 5.86914H17.5ZM5 15.8691C5 14.5431 5.52678 13.2713 6.46447 12.3336C7.40215 11.3959 8.67392 10.8691 10 10.8691V40.8691C8.67392 40.8691 7.40215 40.3424 6.46447 39.4047C5.52678 38.467 5 37.1952 5 35.8691V15.8691ZM40 40.8691V10.8691C41.3261 10.8691 42.5979 11.3959 43.5355 12.3336C44.4732 13.2713 45 14.5431 45 15.8691V35.8691C45 37.1952 44.4732 38.467 43.5355 39.4047C42.5979 40.3424 41.3261 40.8691 40 40.8691Z"
                fill="#212121"
              />
            </svg>
          </div>
          <p>A User app for customers and a Store app for shops</p>
          <img
            className="phone-1"
            src="./img/iPhone 13 Pro (2).png"
            alt="features"
          />
          <img
            className="phone-2"
            src="./img/iPhone 13 Pro (3).png"
            alt="features"
          />
        </div>
        <div className="features-2">
          <div className="content">
            
            <h1> Top Notch Security <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
  <path d="M25 2.95215L6.25 11.2855V23.7855C6.25 35.348 14.25 46.1605 25 48.7855C35.75 46.1605 43.75 35.348 43.75 23.7855V11.2855L25 2.95215ZM25 15.4521C27.9167 15.4521 30.8333 17.7438 30.8333 20.6605V23.7855C32.0833 23.7855 33.3333 25.0355 33.3333 26.4938V33.7855C33.3333 35.0355 32.0833 36.2855 30.625 36.2855H19.1667C17.9167 36.2855 16.6667 35.0355 16.6667 33.5771V26.2855C16.6667 25.0355 17.9167 23.7855 19.1667 23.7855V20.6605C19.1667 17.7438 22.0833 15.4521 25 15.4521ZM25 17.9521C23.3333 17.9521 21.875 18.9938 21.875 20.6605V23.7855H28.125V20.6605C28.125 18.9938 26.6667 17.9521 25 17.9521Z" fill="#212121"/>
</svg> & Mobile payments  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M11.1 9C10.7 8.9 10.3 8.7 10 8.4C9.7 8.3 9.6 8 9.6 7.8C9.6 7.6 9.7 7.3 9.9 7.2C10.2 7 10.5 6.8 10.8 6.9C11.4 6.9 11.9 7.2 12.2 7.6L13.1 6.4C12.8 6.1 12.5 5.9 12.2 5.7C11.9 5.5 11.5 5.4 11.1 5.4V4H9.9V5.4C9.4 5.5 8.9 5.8 8.5 6.2C8.1 6.7 7.8 7.3 7.9 7.9C7.9 8.5 8.1 9.1 8.5 9.5C9 10 9.7 10.3 10.3 10.6C10.6 10.7 11 10.9 11.3 11.1C11.5 11.3 11.6 11.6 11.6 11.9C11.6 12.2 11.5 12.5 11.3 12.8C11 13.1 10.6 13.2 10.3 13.2C9.9 13.2 9.4 13.1 9.1 12.8C8.8 12.6 8.5 12.3 8.3 12L7.3 13.1C7.6 13.5 7.9 13.8 8.3 14.1C8.8 14.4 9.4 14.7 10 14.7V16H11.1V14.5C11.7 14.4 12.2 14.1 12.6 13.7C13.1 13.2 13.4 12.4 13.4 11.7C13.4 11.1 13.2 10.4 12.7 10C12.2 9.5 11.7 9.2 11.1 9ZM10.5 2C6.1 2 2.5 5.6 2.5 10C2.5 14.4 6.1 18 10.5 18C14.9 18 18.5 14.4 18.5 10C18.5 5.6 14.9 2 10.5 2ZM10.5 16.9C6.7 16.9 3.6 13.8 3.6 10C3.6 6.2 6.7 3.1 10.5 3.1C14.3 3.1 17.4 6.2 17.4 10C17.4 13.8 14.3 16.9 10.5 16.9Z" fill="#212121"/>
</svg></h1>
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
