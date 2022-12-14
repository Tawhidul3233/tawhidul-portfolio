import React from 'react';
import './Banner.css'
import img1 from '../../img/simulation10.gif'
import Navbar from '../Navbar/Navbar';
import resume from '../../img/Tawhidul-islam-resume.pdf'
import { BiDownload } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';
import profileimg from '../../img/linkdinprofilephoto.jpg'

const Banner = () => {
     return (
          <div>

               <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                         <div className='banner-img w-full'>
                              <img alt='' className=" w-full min-h-[350px] sm:h-[350px] md:h-[600px] " src={img1} />

                         </div>

                         <div className="avatar absolute hidden md:block md:top-1/4 md:left-1/4    ">
                              <div className="md:w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src={profileimg} />
                              </div>
                         </div>

                         <div className="absolute  top-[40%] right-0 md:text-left text-center w-full md:w-2/5    transform -translate-y-1/2   ">
                              <p className=' text-xl md:text-2xl lg:text-3xl font-semibold  text-white'> Md Tawhidul islam
                              </p>

                              <p className='  text-xl md:text-2xl lg:text-3xl font-semibold  text-warning'>
                                   Web Developer<span className='  text-error'> (MERN) </span>
                              </p>
                         </div>
                         <div className="absolute  top-[60%] justify-center md:right-0 md:text-left text-center w-full md:w-2/5 transform -translate-y-1/2  
                         
                         ">
                              <p className='text-white md:mr-5 text-xs md:text-lg mx-3 sm:mx-0 '>A junior MERN Stack developer. Expertise
                                   in front-end and back-end development
                                   using JavaScript, ES6, React js, Node js,
                                   and Express js. </p>
                         </div>

                         <div className="absolute top-[80%] right-0 w-full md:w-2/5    transform -translate-y-1/2  md:text-left ">
                              <button className="btn btn-xs sm:btn-sm md:btn-md  btn-outline btn-warning mr-5" ><a href='#contact'>Contact me</a><GrContact className=' bg-warning ml-3'></GrContact></button>
                              <button className="btn btn-xs sm:btn-sm md:btn-md  btn-outline btn-warning "> <a href={resume} download > Downlode Resume  </a> <BiDownload className='ml-3 text-xl'></BiDownload>  </button>
                         </div>
                    </div>
               </div>
               <div className=' absolute top-0 left-0 w-full mt-2'>
                    <Navbar> </Navbar>
               </div>
          </div>
     );
};

export default Banner;