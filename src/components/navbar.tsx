import React from "react";
import {
  Collapse,
  IconButton,
  Button,
} from "@mui/material";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        className="font-medium"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div      className="fixed top-0 z-50 border-0"    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="https://www.material-tailwind.com"
          target="_blank"
          color={isScrolling ? "gray" : "white"}
        >
          Material Tailwind
        </a>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem href="https://www.material-tailwind.com/docs/react/installation">
            Docs
          </NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton>
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton>
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton>
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button>
              Blocks
            </Button>
          </a>
        </div>
        <IconButton
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton>
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton>
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button className="ml-auto">
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Navbar;
