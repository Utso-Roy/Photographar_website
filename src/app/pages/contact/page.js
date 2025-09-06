'use client'
import React, { useState } from 'react'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className='px-6  py-18 '>
      <div  className='flex background rounded-2xl justify-center items-center gap-12'>
        
        {/* Left Side - Info */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
         

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MdLocationOn size={22}  />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdEmail size={22}  />
              <span>yourmail@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdPhone size={22}  />
              <span>+880 1234-567890</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div data-aos="fade-left" className=" shadow-lg rounded-2xl p-8 space-y-8 ">
          <form className="space-y-8  md:w-80">
            <div>
              <FloatLabel>
                <InputText id="name" value={name}  placeholder="Full Name" onChange={(e) => setName(e.target.value)} className="w-full" />
                <label className='p-inputColor' htmlFor="name">Full Name</label>
              </FloatLabel>
            </div>

            <div>
              <FloatLabel>
                <InputText id="email" type="email" placeholder="Email Name" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
                <label className='p-inputColor' htmlFor="email">Email Address</label>
              </FloatLabel>
            </div>

            <div>
              <FloatLabel>
                <InputTextarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full" />
                <label className='p-inputColor' htmlFor="message">Message</label>
              </FloatLabel>
            </div>

            <Button label="Send Message" className="w-full my-btn my-btn:hover p-inputtext" />
          </form>
        </div>
      </div>
    </section>
  )
}
