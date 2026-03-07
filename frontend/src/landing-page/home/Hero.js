import React from 'react';

function Hero() {
    return ( 
        <div>
            <div className='container p-5'>
                <div className='row text-center'>
                    <img src='media/homehero.png' alt ='homeHero' className='mb-5'></img>
                    <h1 className='mt-5'>Invest In Everything.</h1>
                    <p>Online platform to invest in stocks, derivatives and more...</p>
                    <button className='p-1 btn btn-primary fs-5 mb-5'style={{width:"15%",margin:"0 auto"}}>Sign Up</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;