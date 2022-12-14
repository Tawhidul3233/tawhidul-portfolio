import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import backimg from '../../img/backimg.jpg'
import './Home'
import About from '../About/About';

const Home = () => {
     return (
          <div  >
               {/* <Navbar> </Navbar> */}
               <div className='back-img  '>
                    <img className=' fixed -z-10 min-h-screen w-screen max-w-screen-2xl brightness-50 blur-md ' src={backimg} alt="" />
               </div>
               <Banner> </Banner>
               <Skills> </Skills>
               <About> </About>
               <Contact> </Contact>
               <Footer> </Footer>
          </div>
     );
};

export default Home;