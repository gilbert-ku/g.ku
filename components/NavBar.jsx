"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    // Close nav on window resize if opened on desktop view
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col lg:flex-row gap-2 items-center">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-3 font-semibold md:text-xl active:bg-blue-gray-500 rounded-3xl"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-3 font-semibold md:text-xl active:bg-blue-gray-500 rounded-3xl"
      >
        <ScrollLink
          to="About"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="flex items-center"
        >
          About
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-xl"
      >
        <ScrollLink
          to="Skills"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="flex items-center"
        >
          Skills
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-xl"
      >
        <ScrollLink
          to="Services"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="flex items-center"
        >
          Services
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-xl"
      >
        <ScrollLink
          to="Projects"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="flex items-center"
        >
          Projects
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold md:text-xl"
      >
        <Link href="blogs" className="flex items-center">
          Blogs
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-4 bg-black">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="flex mr-4 cursor-pointer py-1.5 font-medium"
        >
          <Image src="/logo.png" width={50} height={50} alt="gilbert logo" />
          <span className="my-auto md:text-xl font-bold">
            g <span style={{ color: "#57C1FD" }}>.ku</span>
          </span>
        </Typography>
        <div className="flex items-center lg:hidden">
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <div className="hidden lg:flex items-center gap-4">{navList}</div>
        <ScrollLink
          to="Contacts"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hidden lg:inline-block"
        >
          <Button variant="gradient" size="sm">
            <span>Hire Me</span>
          </Button>
        </ScrollLink>
      </div>
      <Collapse open={openNav} className="lg:hidden">
        {navList}
        <div className="flex flex-col items-center gap-4 mt-4">
          <Button
            fullWidth
            variant="gradient"
            size="sm"
            className="bg-gradient-to-r from-cyan-300 to-light-blue-600"
          >
            <span>Hire Me</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
