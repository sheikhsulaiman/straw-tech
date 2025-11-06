import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="StrawTech Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-green-600">
                StrawTech
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`text-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`block py-2 text-lg font-medium ${
                    isActive(item.path) ? "text-green-600" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
