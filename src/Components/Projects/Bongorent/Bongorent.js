import React from 'react';
import Navbar from '../../Navbar/Navbar';
import img from '../../../img/bongorent.png'
import img2 from '../../../img/bongorent2.png'
import img3 from '../../../img/bongorent3.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Bongorent = () => {
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
                         <h1 className='text-lg font-semibold text-black'>BongoRent</h1>
                         <p className='text-black mx-5'>Used : React js, Note js, Express js, Javascript, ES6, MongoDB, Firebase, Tailwind css </p>
                         <p className='text-black border p-5 m-5'>Description : <br /> Users can rent Motorcycles, buses, Trucks, Private Cars, and
                              helicopters online. <br />
                              Users can get the best by paying and sharing their opinion through
                              comments. <br />
                              The service provider can add new services and remove them if
                              needed.</p>
                         <div className='grid grid-cols-1 sm:grid-cols-3 mx-5 my-10'>

                              <a href='https://bongorent-96f21.web.app/' className=' btn btn-xs sm:btn-sm btn-outline btn-warning  '>Live site</a>

                              <a className='  btn btn-xs sm:btn-sm btn-outline btn-warning sm:mx-5 my-5 sm:my-0 ' href='https://github.com/Tawhidul3233/bongorent-ac11'>Client Repo</a>

                              <a className='  btn btn-xs sm:btn-sm btn-outline btn-warning ' href='https://github.com/Tawhidul3233/bongoRent-server-ac11'>Server Repo</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Bongorent;