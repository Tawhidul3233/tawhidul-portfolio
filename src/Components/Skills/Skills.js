import React from 'react';
import img1 from '../../img/skills.gif'
import skillbd from '../../img/skillbd.png'
import bongorent from '../../img/bongorent.png'
import usedphone from '../../img/usedphone.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import html from '../../img/html.png'
import css from '../../img/css3.png'
import bootstrap from '../../img/Bootstrap_logo.svg.png'
import tailwind from '../../img/Tailwind_CSS_Logo.svg.png'
import expresjs from '../../img/express-js.png'
import firebase from '../../img/firebase.png'
import javascript from '../../img/JavaScript-logo.png'
import jwt from '../../img/jwt.png'
import mongodb from '../../img/mongodb.png'
import nodejs from '../../img/Node.js.png'
import react from '../../img/React-icon.svg.png'
import { Link } from 'react-router-dom';

const Skills = () => {
     return (
          <div style={{ backgroundColur: 'black' }} className='grid grid-cols-1 lg:grid-cols-2'>
               <div className=''>
                    <h1 className='my-5 text-xl sm:text-2xl font-bold text-white'>View <span className='text-warning'>My Skills</span></h1>

                    <div className='my-10 '>
                         <div className=' flex justify-around'>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 animate-pulse mx-auto ' src={react} alt="" />
                              </div>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 mx-auto ' src={javascript} alt="" />
                              </div>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 animate-pulse mx-auto' src={nodejs} alt="" />
                              </div>
                         </div>
                         <div className='flex justify-around my-6'>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 mx-auto' src={expresjs} alt="" />
                              </div>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 animate-pulse mx-auto' src={mongodb} alt="" />
                              </div>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-12 sm:w-16 mx-auto' src={firebase} alt="" />
                              </div>
                         </div>
                         <div className='flex justify-around'>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 animate-pulse mx-auto' src={jwt} alt="" />
                              </div>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 mx-auto' src={tailwind} alt="" />
                              </div>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 animate-pulse mx-auto' src={bootstrap} alt="" />
                              </div>
                         </div>
                         <div className='flex justify-around mt-6'>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 animate-pulse mx-auto' src={html} alt="" />
                              </div>
                              <div className=' w-1/4 bg-white rounded-lg py-2 sm:py-4 '>
                                   <img className=' w-16 sm:w-20 animate-pulse mx-auto' src={css} alt="" />
                              </div>
                         </div>
                    </div>
               </div>
               <div className='mx-auto'>
                    <h1 className='my-5 text-xl sm:text-2xl font-bold text-white'>View <span className='text-warning'>Recent Projects</span></h1>
                    <div className='mx-5 '>
                         <div className="hero bg-primary  rounded-md max-w-2xl mx-auto">
                              <div className="hero-content  ">
                                   <div className='w-6/12 block'>
                                        <PhotoProvider>
                                             <PhotoView src={usedphone} >
                                                  <img className=" rounded-lg shadow-2xl" src={usedphone} alt="" />
                                             </PhotoView>
                                        </PhotoProvider>
                                   </div>
                                   <div className=' w-6/12'>
                                        <h1 className="text-xl font-bold">UsedPhone</h1>

                                        <button className='btn btn-xs sm:btn-sm btn-outline btn-warning my-6'><Link to='/usedphone'> Project Details </Link></button>
                                   </div>
                              </div>
                         </div>
                         <div className="hero  bg-primary rounded-md my-4 max-w-2xl mx-auto">
                              <div className="hero-content  ">
                                   <div className='w-6/12 block'>
                                        <PhotoProvider>
                                             <PhotoView src={skillbd} >
                                                  <img className=" rounded-lg shadow-2xl" src={skillbd} alt="" />
                                             </PhotoView>
                                        </PhotoProvider>
                                   </div>
                                   <div className=' w-6/12'>
                                        <h1 className="text-xl font-bold" >Skillbd</h1>

                                        <button className='btn btn-xs sm:btn-sm btn-outline btn-warning my-6'><Link to='/skillbd'> Project Details </Link></button>
                                   </div>
                              </div>
                         </div>
                         <div className="hero bg-primary rounded-md max-w-2xl mx-auto">
                              <div className="hero-content  ">
                                   <div className='w-6/12 block'>
                                        <PhotoProvider>
                                             <PhotoView src={bongorent} >
                                                  <img className=" rounded-lg shadow-2xl" src={bongorent} alt="" />
                                             </PhotoView>
                                        </PhotoProvider>
                                   </div>
                                   <div className=' w-6/12'>
                                        <h1 className="text-xl font-bold">Bongorent</h1>

                                        <button className='btn btn-xs sm:btn-sm btn-outline btn-warning my-6'><Link to='/bongorent'> Project Details </Link></button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Skills;