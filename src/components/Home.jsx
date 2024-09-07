import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className='home' id = "home">
       
       <main>
       <h1>Tech Star</h1>
           <p>Here the Solutions for your all Tech Problems</p>
       </main>
     
   </div>
   <div className='home2'>
    <img src={vg} alt="Graphics" /> 

  <div>
    <p>
        We are your only Solution for all your Tech Problems and we are here to help you
        with all your problems you face every day in your life. We are leading a tech company how aim to 
        increase the problem solving skills of the people and make them more productive and creative.
    </p>
  </div>
   </div>
   <div className="home3" id = "about">
    <div>
        <h1>WHO WE ARE</h1>
        <p>We are a team of Tech Enthusiasts who are here to help you with all
           your problems you face every day in your life. We are leading a tech company
           how aim to increase the problem solving skills of the people and make them more
           productive and creative. I have a passionate team of people who are working hard to
           make this company a success. Our company work on the latest technology and we are
           always trying to provide the best solutions for our customers.

           </p>
    </div>
   </div>
   <div className="home4" id = "brands">
    <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay: '0.3s',
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
             <div style={{
                animationDelay: '0.5s',
            }}>
                <AiFillAmazonCircle/>
                 <p>Amazon</p>
            </div>
            <div style={{
                animationDelay: '0.7s',
            }}>
                <AiFillYoutube/>
                 <p>Youtube</p>
               
            </div>
            <div style={{
                animationDelay: '0.9s',
            }}>
                <AiFillInstagram/>
                 <p>Instagram</p>
            </div>

        </article>
    </div>
   </div>
    </>
  )
}

export default Home
