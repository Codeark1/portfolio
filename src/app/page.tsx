"use client";

import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Card } from "@/components/Crad";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import React, { useState } from "react";
import emailjs from "emailjs-com"
import { toast, ToastContainer } from 'react-toastify';

const Page = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  

 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Send the email using emailjs
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await emailjs.send(
        "service_9u49f4y", 
        "template_hovmv0c", 
        formData,
        "gj1h9Nag_oDz9NbfM"
      );
      
      // Clear form data
      setFormData({
        name: "",
        email: "",
        reason: "",
        message: "",
      });
  
      // Show success toast
      toast.success('Message sent successfully!');
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Show error toast
      toast.error('Failed to send message. Please try again later.');
    }
  };
  
  


  return (
    <div className="min-h-screen font-sen bg-darkBackground">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Profile Section */}
        <div className="relative flex justify-center items-center text-white p-4">
          <Image
            src="/me.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="contain"
            className="p-4"
          />
        </div>

        {/* Bio Section */}
        <div className="flex-grow flex flex-col justify-center p-4 text-white">
          <h1 className="text-2xl font-bold">Hello, I am David.</h1>
          <h2 className="lg:text-5xl text-lg text-blue-400 font-bold mt-2">
            Frontend Developer
          </h2>
          <p className="text-sm md:text-base mt-4 leading-10">
            Hi 😁, I&apos;m David! I&apos;m passionate about building intuitive
            and user-centric interfaces for both web and mobile apps using React
            and React Native, creating seamless and engaging experiences across
            platforms.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-6 flex-wrap">
            <a href="#" className="text-white">
              <MdWhatsapp size={28} />
            </a>
            <a href="#" className="text-white">
              <FaGithub size={28} />
            </a>
            <a href="#" className="text-white">
              <SiGmail size={28} />
            </a>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center mt-6">
            <button className="text-white px-4 py-2 rounded-lg bg-blue-400">
              Let&apos;s chat
            </button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 mx-auto max-w-7xl justify-center items-center">
        <Card
          title="Know David"
          emoji="👋"
          buttonText="Let's Begin!"
          href="/about"
        />
        <Card
          title="Projects HQ"
          emoji="📂"
          buttonText="See My Best"
          href="/project"
        />
        <Card
          title="Projects HQ"
          emoji="📂"
          buttonText="See My Best"
          href="/writeups"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[32rem,1fr]">
        {/* Left Section */}
        <div className="p-6 ">
          <h1 className="text-4xl md:text-5xl lg:text-7xl w-fit font-sen text-[#60a5fa]">
            Send a Message
          </h1>
          <p className="pt-4 leading-6 md:leading-8 text-white text-sm md:text-base">
            I&apos;m currently available to take on new projects, so feel free
            to send me a message about anything you&apos;d like me to work on.
          </p>

          <div className="flex items-center gap-3 mt-4 md:mt-7">
            <FaLocationDot size={24} className="text-[#60a5fa]" />
            <p className="text-white text-sm md:text-base">Lagos</p>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-7">
          <LuPhoneCall  size={24} className="text-[#60a5fa]" />
          <p className="text-white text-sm md:text-base">+2349056056463</p>
          </div>


        </div>

        {/* Right Section */}
        <div className="">
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Send a Message
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Your Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Your Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reason for Message */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
            Reason for Message
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a reason
            </option>
            <option value="Project Inquiry">Project Inquiry</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Your Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            // rows="5"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Send Message Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
        
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Page;
