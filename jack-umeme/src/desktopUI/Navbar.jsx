import React ,{useState} from 'react'

function Navbar (){
    return(
        
        <div>
            <div className='full-nav'>
                <header>
                    <img src='./com.jackumeme1.png' alt='logo'/>
                    Jack Umeme
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

            <div>
                <p>Shop Smart, <span>Shop Easy</span>: Your One Stop Ecommerce Destination!</p>

                <p>Welcome to Jack Umeme, Where Shopping Meets Convenience: Browse, Discover, and Embrace a World of Endless Possibilities! Experience Seamless Ecommerce Delight with Exclusive Deals, Effortless Navigation, and Personalized Recommendations Tailored Just for You. Embrace the Future of Shopping, Shop with Confidence, Anytime, Anywhere!</p>
            </div>
        </div>
    )
}


export default Navbar