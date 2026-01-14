"use client";

import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
// import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Card } from "@/components/Crad";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const Page = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Email service not configured. Please set env variables.");
      return;
    }
    setSending(true);
    try {
      const payload = { ...formData, reply_to: formData.email };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
      setFormData({ name: "", email: "", reason: "", message: "" });
      toast.success("Message sent successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      // Show more informative errors from EmailJS/Gmail
      const message =
        typeof error === "object" &&
        error &&
        "text" in (error as Record<string, unknown>)
          ? String((error as Record<string, unknown>).text)
          : error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.";
      console.error("Email send error:", error);
      toast.error(
        message.includes("Invalid grant")
          ? "Email provider connection expired. Please try again later."
          : message
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen font-sen pt-7 bg-darkBackground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        {/* Profile Section */}
        <div className="relative flex  justify-center items-center text-white p-4">
          <Image
            src="/david.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="contain"
            className="rounded-2xl"
            loading="lazy"
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
            <a
              href="https://wa.me/2340956056463"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <MdWhatsapp size={28} />
            </a>

            {/* <a href="#" className="text-white">
              <FaGithub size={28} />
            </a> */}
            <a href="mailto:ajitenadavid@gmail.com" className="text-white">
              <SiGmail size={28} />
            </a>
          </div>

          {/* Call-to-Action Button */}
          {/* <div className="flex justify-center mt-6">
            <button className="text-white px-4 py-2 rounded-lg bg-blue-400">Let&apos;s chat</button>
          </div> */}
        </div>
      </motion.div>

      {/* Card Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 mx-auto max-w-7xl justify-center items-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card
          title="Know David"
          emoji="👋"
          buttonText="Let's Begin!"
          href="/about"
        />
        <Card
          title="Projects HQ"
          emoji="📂"
          buttonText="Explore My Works"
          href="/project"
        />
        <Card
          title="Writeups & Blogs"
          emoji="✍️"
          buttonText="Read My Insights"
          href="https://medium.com/@ajitenadavid"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[32rem,1fr] pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section */}
        <div className="p-6">
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
            <LuPhoneCall size={24} className="text-[#60a5fa]" />
            <p className="text-white text-sm md:text-base">+2349056056463</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-lg rounded-md mb-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Send a Message
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
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

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
                >
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

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={sending}
                  className={`px-6 py-2 text-white font-medium rounded-md transition duration-300 ${
                    sending
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
};

export default Page;
