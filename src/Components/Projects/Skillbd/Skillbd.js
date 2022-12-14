import React from 'react';
import Navbar from '../../Navbar/Navbar';
import img from '../../../img/skillbd.png'
import img2 from '../../../img/skillbd2.png'
import img3 from '../../../img/skillbd3.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Skillbd = () => {
     return (
          <div>
               <div className='bg-primary'>
                    <Navbar> </Navbar>
               </div>
               <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-3 m-5 '>
                         <div>
                              <PhotoProvider>
                                   <PhotoView src={img} >
                                        <img className=" w-full rounded-lg shadow-2xl" src={img} alt="" />
                                   </PhotoView>
                              </PhotoProvider>
                         </div>
                         <div>
                              <PhotoProvider>
                                   <PhotoView src={img2} >
                                        <img className=" w-full rounded-lg shadow-2xl" src={img2} alt="" />
                                   </PhotoView>
                              </PhotoProvider>
                         </div>
                         <div>
                              <PhotoProvider>
                                   <PhotoView src={img3} >
                                        <img className=" w-full rounded-lg shadow-2xl" src={img3} alt="" />
                                   </PhotoView>
                              </PhotoProvider>
                         </div>


                    </div>
                    <div>
                         <h1 className='text-lg font-semibold text-black'>Skillbd</h1>
                         <p className='text-black mx-5'>Used : React js, Note js, Express js, Javascript, ES6, MongoDB, Firebase, Tailwind css </p>
                         <p className='text-black border p-5 m-5'>Description : <br /> Here are different types of online paid courses according to
                              category. <br />
                               User will be approved for the particular course after paying the
                              payment. <br />
                               Courses can be removed or updated for any reason or new ones
                              can be added if desired.</p>
                         <div className='grid grid-cols-1 sm:grid-cols-3 mx-5 my-10'>

                              <a href='https://skillbd-c7e83.web.app/' className=' btn btn-xs sm:btn-sm btn-outline btn-warning  '>Live site</a>

                              <a className='  btn btn-xs sm:btn-sm btn-outline btn-warning sm:mx-5 my-5 sm:my-0 ' href='https://github.com/Tawhidul3233/skillbd-ac10'>Client Repo</a>

                              <a className='  btn btn-xs sm:btn-sm btn-outline btn-warning ' href='https://github.com/Tawhidul3233/skillbd-server-ac10'>Server Repo</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Skillbd;