import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GrSend } from "react-icons/gr";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

     const form = useRef();

     const sendEmail = (event) => {
          event.preventDefault();
          
          emailjs.sendForm('service_a2vno22', 'template_uvz3ix2', form.current, 'Y3qHjb_q8h-zgI18q')
               .then((result) => {
                    console.log("Message sent successfully")
                    // toast.success('not send something error')
                    alert('Message sent successfully')
                    form.current.reset()
               }, (error) => {
                    console.log(error.text);
                    // toast.error('not send something error')
                    console.log("not send something error")
               });
               
     };
     
     return (
          <div id='contact'  >

               <div>
                    <h1 className='mt-20 text-2xl font-bold text-white'>GET <span className='text-warning'>IN TOUCH</span></h1>
                    <p className=' text-white'>I’M ALWAYS OPEN TO DISCUSSING</p>
                    <form ref={form} onSubmit={sendEmail}
                         className="grid grid-cols-1">

                         <input type="text" placeholder="YOUR NAME" className="input input-warning w-4/5 md:w-2/3 mx-auto mt-10 bg-transparent" name="user_name" />


                         <input type="email" placeholder="YOUR EMAIL" className="input input-warning w-4/5 md:w-2/3 mx-auto my-5 bg-transparent" name="user_email" />

                         <textarea className="textarea textarea-warning w-4/5 md:w-2/3 mx-auto bg-transparent" placeholder="YOUR MESSAGE" name="message"></textarea>

                         <button type='submit' value="Send" className="btn btn-warning mx-auto mt-8 mb-20 "> <GrSend className='mr-3'></GrSend> Send Message</button>

                    </form>
               </div>

          </div>
     );
};

export default Contact;