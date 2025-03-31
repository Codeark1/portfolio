import Image from "next/image";
import React from "react";
import { Tooltip } from "antd";

const stackData = [
  {
    name: "React",
    logo: "/react-logo.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    logo: "/nextjs-logo.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    logo: "/tailwind-logo.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "React Native",
    logo: "/Native.svg",
    link: "https://reactnative.dev/",
  },

  {
    name: "Ant Design",
    logo: "/antdesign-logo.svg",
    link: "https://ant.design/",
  },
  {
    name: "Expo",
    logo: "/expo-logo.svg",
    link: "https://ant.design/",
  },
  {
    name: "Git",
    logo: "/git-logo.svg",
    link: "https://git-scm.com/",
  },
];

const About = () => {
  return (
    <div className="text-white font-sen bg-darkBackground min-h-screen">
      {/* Introduction Section */}
      <div className="text-center py-8">
        <p className="text-base text-[#333]">Introducing...😊😊</p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-[22rem,1fr] gap-8 px-6 md:px-12 lg:px-24 min-w-0">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center p-6 rounded-lg max-h-80 font-sen ">
        <Image
  src="/me.jpg"
  alt="Profile"
  width={192}
  height={192}
  className="w-48 h-48 rounded-full object-cover mb-4"
/>

          <p className="text-lg font-medium text-center w-fit">
            Hi, I&apos;m David! I&apos;m passionate about crafting intuitive and
            user-centric interfaces that offer seamless and engaging
            experiences.
          </p>
        </div>

        {/* Right Section */}
        <div className="font-sen p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#60a5fa] mb-4">
            More About Me
          </h2>
          <p className="text-white leading-10">
            Hey, I&apos;m David, a React and React Native Developer who loves
            turning ideas into sleek, functional web and mobile apps. Based in
            Lagos, Nigeria, I specialize in building smooth, responsive
            interfaces using diffrent Frontend/Native tools. Whether it’s a web
            app or a mobile project, I’m all about creating seamless user
            experiences with a dash of intuitiveness. Let’s connect and build
            something awesome together!
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#60a5fa] mb-2">
              Student
            </h3>
            <p className="text-white leading-9">
              I hold a BSc in Computer and Information Science from Tai Solarin
              University of Education. My education has given me a solid
              foundation in tech, fueling my passion for building innovative
              solutions and continuously expanding my skill set in frontend
              development.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#60a5fa] mb-2">
              Leadership
            </h3>
            <p className="text-white leading-9">
              As Lead Tech Facilitator at{" "}
              <a
                href="https://curriculumtutors.com/"
                className="text-blue-500 hover:underline"
                target="blank"
              >
                Curriculum Educational Services
              </a>
              , I had the pleasure of guiding an amazing team of tech
              facilitators. I helped shape teaching strategies, supported my
              team’s growth, and made sure the curriculum was engaging and
              impactful. It was all about collaboration, creativity, and
              ensuring both the facilitators and Learners thrived in a dynamic,
              supportive environment. Leading this team was a rewarding
              experience that taught me as much as it taught them!.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#60a5fa] mb-2">
              MY Stack
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              {stackData.map(({ name, logo, link }) => (
                <Tooltip title={name} placement="top" key={name}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={logo}
                      alt={`${name} Logo`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
