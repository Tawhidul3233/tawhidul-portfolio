import React from 'react';
import about from '../../img/about.gif'

const About = () => {
     return (
          <div className='my-10' id='aboutme'>
               <div className="flex flex-col w-full">

                    <div className="divider bg-white h-[1px] w-4/5 mx-auto "></div>

               </div>
               <h1 className='text-white'>  </h1>
               <h1 className='my-5 text-xl sm:text-2xl font-bold text-white'>About <span className='text-warning'>me</span></h1>
               <h1 className=' text-white  font-semibold  my-5  text-lg sm:text-2xl
                           mx-3'>MD Tawhidul islam a junior web developer (MERN).</h1>
               <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className=' my-auto '>
                         <div className=' w-5/6 '>
                              <img className=' w-40 mx-auto' src={about} alt="" />
                         </div>
                         <div className=' w-5/6 mx-auto  '>
                              <p className='text-white text-left  '> I have completed 25+ full-stake projects in the last year. I have completed web development courses from two reputed institutes and
                                   acquired a lot of skills from free resources. I am dedicated to building easy-to-use user-friendly
                                   websites and web applications.</p>
                         </div>
                         <div className=' text-left w-5/6 mx-auto'>
                              <p className='mt-5 '>
                                   <span className='text-lg font-semibold text-white'>Skills : </span>
                                   JavaScript, Es6, React js, Note js, Express js, Firebase, MongoDB, HTML, CSS, Bootstrap, Tailwind
                              </p>
                              <p className=' '>
                                   <span className='text-lg font-semibold text-white'>Tools :</span> Chrome Dev-tool, VSCode, Github, Vercel, Netlify,
                              </p>
                         </div>
                    </div>
                    <div>
                         <h1 className='my-6 text-white text-lg sm:text-2xl uppercase  mx-3'>Personal <span className=' text-warning'>information :</span> </h1>
                         <div className='grid gap-2 text-black'>
                              <div className='w-5/6 sm:w-2/3 bg-white mx-auto flex'>
                                   <p className=' ml-5 sm:ml-10   '>Name : </p>
                                   <p className=' mx-auto'> MD Tawhidul islam </p>
                              </div>
                              <div className='w-5/6 sm:w-2/3  mx-auto flex bg-primary text-white '>
                                   <p className=' ml-5 sm:ml-10   '>Age : </p>
                                   <p className='mx-auto '> 22 </p>
                              </div>
                              <div className='w-5/6 sm:w-2/3 bg-white mx-auto flex '>
                                   <p className=' ml-5 sm:ml-10 '>Education : </p>
                                   <p className='mx-auto '> BBA </p>
                              </div>
                              <div className='w-5/6 sm:w-2/3  mx-auto flex bg-primary text-white '>
                                   <p className=' ml-5 sm:ml-10  '>Nationality : </p>
                                   <p className=' mx-auto'> Bangladeshi </p>
                              </div>
                              <div className='w-5/6 sm:w-2/3 bg-white mx-auto flex '>
                                   <p className=' ml-5 sm:ml-10  '>Language : </p>
                                   <p className=' mx-auto'> Bangla, English </p>
                              </div>
                              <div className='w-5/6 sm:w-2/3 mx-auto flex bg-primary text-white '>
                                   <p className=' ml-5 sm:ml-10 '>Address : </p>
                                   <p className=' mx-auto '> Patuakhali, Bangladesh </p>
                              </div>
                              <div className='w-5/6 sm:w-2/3 bg-white mx-auto flex '>
                                   <p className=' ml-5 sm:ml-10 '>Phone : </p>
                                   <p className=' mx-auto'> +8801792181273 </p>
                              </div>
                              <div className='w-5/6 sm:w-2/3 mx-auto flex bg-primary text-white '>
                                   <p className=' ml-5 sm:ml-10 '>Gmail : </p>
                                   <p className=' mx-auto '> tawhidulislam3233@gmail.com </p>
                              </div>
                         </div>
                         {/* <div className='grid grid-cols-2 text-center text-sm sm:text-xl mx-3'>
                         </div> */}
                    </div>
               </div>
          </div>
     );
};

export default About;