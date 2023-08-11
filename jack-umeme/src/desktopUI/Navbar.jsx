import React ,{useState} from 'react'


function Navbar (){
    return(
        
        <div className='landing-wrapper'>
            <div className='full-nav'>
                <header>
                    <img src='./com.jackumeme1.png' alt='logo'/>
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

            <div className='intro'>
                <p className='intro-1'>Shop Smart, <span>Shop Easy</span>: Your One Stop Ecommerce Destination!</p>

                <p className='intro-2'>Welcome to Jack Umeme, Where Shopping Meets Convenience: <br/> Browse, Discover, and Embrace a World of Endless Possibilities! <br/> Experience Seamless Ecommerce Delight with Exclusive Deals, <br/>  Effortless Navigation, and Personalized Recommendations Tailored Just for You. Embrace the Future of Shopping, Shop with Confidence, Anytime, Anywhere!</p>
            </div>

            <div className='app-stores'>

            </div>

            <p>Our Features</p>

            <div className='features'>
                <div className='features-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo hic rem dolores. Doloremque incidunt, nobis repudiandae ullam ut esse, nisi id voluptate ducimus, ratione tempore maiores alias labore fuga?</div>
                <div className='features-1'>
                    <div className='content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur asperiores sequi, itaque quaerat ducimus illo deserunt. Officiis et necessitatibus reiciendis laudantium sed doloribus, mollitia tenetur ullam sapiente deserunt dolor voluptatum?</div>
                    <div className='content'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam maiores magni consequatur sapiente alias quis architecto ipsum non at! Reiciendis repellat qui suscipit quam rerum placeat cupiditate accusamus maiores tenetur.</div>
                    
                </div>
            </div>
        </div>
    )
}


export default Navbar