import React from 'react';
import Navbar from '../../Navbar/Navbar';
import img from '../../../img/usedphone.png'
import img2 from '../../../img/usedphone2.png'
import img3 from '../../../img/usedphone3.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const UsedPhone = () => {
     return (
          <div className='mx-auto'>
               <div className='bg-primary'>
                    <Navbar> </Navbar>
               </div>
               <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-3 m-5 '>
                         <div>
                              <PhotoProvider>
                                   <PhotoView  src={img} >
                                        <img className=" w-full rounded-lg shadow-2xl" src={img} alt="" />
                                   </PhotoView>
                              </PhotoProvider>
                         </div>
                         <div>
                              <PhotoProvider>
                                   <PhotoView  src={img2} >
                                        <img className=" w-full rounded-lg shadow-2xl" src={img2} alt="" />
                                   </PhotoView>
                              </PhotoProvider>
                         </div>
                         <div>
                              <PhotoProvider>
                                   <PhotoView  src={img3} >
                                        <img className=" w-full rounded-lg shadow-2xl" src={img3} alt="" />
                                   </PhotoView>
                              </PhotoProvider>
                         </div>


                    </div>
                    <div>
                         <h1 className='text-lg font-semibold text-black'>UsedPhone</h1>
                         <p className='text-black mx-5'>Used : React js, Note js, Express js, Javascript, ES6, MongoDB, Firebase, Tailwind css </p>
                         <p className='text-black border p-5 m-5'>Description : <br /> Old products are made for buying and selling. A completely
                              different Dashboard will appear for the buyer, seller, and admin. <br />
                              Admin can control all buyers and sellers. Any buyer or seller can
                              be promoted or removed if desired. <br />
                              Buyer can order any product or add his wishlist. And the seller can
                              add a new product or delete his product.</p>
                         <div className='grid grid-cols-1 sm:grid-cols-3 mx-5 my-10'>

                              <a href='https://usedphone-3adf2.web.app/' className=' btn btn-xs sm:btn-sm btn-outline btn-warning  '>Live site</a>

                              <a className='  btn btn-xs sm:btn-sm btn-outline btn-warning sm:mx-5 my-5 sm:my-0 ' href='https://github.com/Tawhidul3233/usedPhone-ac12'>Client Repo</a>

                              <a className='  btn btn-xs sm:btn-sm btn-outline btn-warning ' href='https://github.com/Tawhidul3233/usedPhone-server-ac12'>Server Repo</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UsedPhone;