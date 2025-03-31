import React, { useState } from "react";
import { CiHome, CiFolderOn } from "react-icons/ci";
import { FiTool } from "react-icons/fi";
import { IoInformation } from "react-icons/io5";
import Link from "next/link";
import { Button } from "antd";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Define the types for TabLink props
interface TabLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const Tabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-2  text-white relative font-sen bg-darkBackground  ">
      {/* Logo */}
      <div className="relative w-16 h-16">
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Logo"
            className="object-contain"
            layout="fill"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 sticky pt-6">
        <TabLink href="/" icon={<CiHome size={24} />} label="Home" />
        <TabLink
          href="/about"
          icon={<IoInformation size={24} />}
          label="About"
        />
        {/* <TabLink href="/tools" icon={<FiTool size={24} />} label="Tools" /> */}
        <TabLink
          href="/project"
          icon={<CiFolderOn size={24} />}
          label="Project"
        />
      </nav>

      {/* Blog Button */}
      <div className="hidden lg:block">
        <Button
          href="https://medium.com/@ajitenadavid"
          target="_blank"
          rel="noopener noreferrer"
          className="!bg-darkBackground text-white font-sen"
        >
          Blog
        </Button>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-darkBackground text-white z-50 flex flex-col items-center space-y-4 py-6">
          <TabLinkMobile href="/" icon={<CiHome size={24} />} label="Home" />
          <TabLinkMobile
            href="/about"
            icon={<IoInformation size={24} />}
            label="About"
          />
          <TabLinkMobile
            href="/tools"
            icon={<FiTool size={24} />}
            label="Tools"
          />
          <TabLinkMobile
            href="/project"
            icon={<CiFolderOn size={24} />}
            label="Project"
          />
          <Button className="mt-4 w-3/4">Blog</Button>
        </div>
      )}
    </header>
  );
};

const TabLink: React.FC<TabLinkProps> = ({ href, icon, label }) => (
  <div className="group flex flex-col items-center cursor-pointer">
    <Link href={href} className="flex flex-col items-center">
      <div className="text-white group-hover:text-blue-500 transition-all">
        {icon}
      </div>
      <span className="text-white items-center flex text-xs  opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all bg-slate-400 rounded-md p-1">
        {label}
      </span>
    </Link>
  </div>
);

const TabLinkMobile: React.FC<TabLinkProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center space-x-3 px-4 py-2 w-full hover:bg-gray-700 rounded transition-all"
  >
    <div>{icon}</div>
    <span>{label}</span>
  </Link>
);

export default Tabs;
