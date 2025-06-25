import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, Mail, Award } from "lucide-react";

// Helper function for conditionally joining class names (similar to `clsx` or `cn`)
// This is included directly since the request specifies a single file.
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Header = () => {
  // State for controlling mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);
  // State to track if the page has been scrolled beyond a threshold (for header background change)
  // This will become true once scrolled down and remain true.
  const [scrolled, setScrolled] = useState(false);
  // State to highlight the currently active section in the navigation
  const [activeSection, setActiveSection] = useState("home");
  // State to control the visibility of the floating desktop navigation based on scroll direction
  const [navVisible, setNavVisible] = useState(true); // Start visible

  // framer-motion's useScroll hook to get scroll progress
  const { scrollYProgress } = useScroll();

  // Effect hook for handling scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set 'scrolled' state to true if scroll position is beyond 50px AND it's not already true.
      // This ensures the header stays dark once scrolled down.
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
      }

      // Define sections to track for active highlighting
      const sections = ["home", "about", "skills", "certificates", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better active section detection

      // Loop through sections to determine which one is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; // Exit loop once the active section is found
          }
        }
      }
    };

    // Add scroll event listener and clean up on component unmount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]); // Dependency on 'scrolled' to re-evaluate the effect when it changes

  // useMotionValueEvent to control desktop nav visibility based on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        // At the very top, keep nav visible
        setNavVisible(true);
      } else {
        // If scrolling up (direction < 0), show nav; otherwise, hide it
        if (direction < 0) {
          setNavVisible(true);
        } else {
          setNavVisible(false);
        }
      }
    }
  });

  // Array defining navigation items (name, href, icon, id)
  const navItems = [
    { name: "Home", href: "#home", icon: Home, id: "home" },
    { name: "About", href: "#about", icon: User, id: "about" },
    { name: "Skills", href: "#skills", icon: Code, id: "skills" },
    { name: "Certificates", href: "#certificates", icon: Award, id: "certificates" },
    { name: "Projects", href: "#projects", icon: Briefcase, id: "projects" },
    { name: "Experience", href: "#experience", icon: User, id: "experience" },
    { name: "Contact", href: "#contact", icon: Mail, id: "contact" },
  ];

  // Function to smoothly scroll to a section when a nav item is clicked
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    // Load Tailwind CSS for styling (for standalone preview)
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configure Inter font and custom colors */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        /* Changed accent color to red-900 */
        .text-accent-bright {
            color: #7F1D1D; /* Tailwind's red-900 */
        }
        .border-accent-bright\\/30 {
            border-color: rgba(127, 29, 29, 0.3); /* red-900 with 30% opacity */
        }
        .hover\\:border-accent-bright\\/50:hover {
             border-color: rgba(127, 29, 29, 0.5); /* red-900 with 50% opacity */
        }
        `}
      </style>

      <motion.header
        className={classNames(
          "fixed top-0 w-full z-50 transition-all duration-500",
          // Header background remains dark once scrolled, and does not revert
          scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <nav className="container mx-auto px-4 sm:px-6 ">
        
          <div className="flex items-center justify-between">
            {/* Logo */}
            

            
            <AnimatePresence mode="wait">
              {navVisible && ( // Only render if navVisible is true
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -100,
                  }}
                  animate={{
                    y: navVisible ? 0 : -100,
                    opacity: navVisible ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="hidden lg:flex items-center space-x-1 max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 justify-center"
                >
                  {navItems.map((item, index) => (
                    <motion.a // Changed from button to 'a' tag for semantic linking
                      key={item.name}
                      href={item.href} // Use href for direct linking
                      onClick={(e) => { // Keep onClick for smooth scrolling
                        e.preventDefault(); // Prevent default link behavior
                        scrollToSection(item.href);
                      }}
                      className={classNames(
                        "relative group px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2",
                        activeSection === item.id
                          ? "text-accent-bright bg-white/10 border border-accent-bright/30"
                          : "text-white hover:text-accent-bright"
                      )}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }} // Slightly faster delay for floating nav
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Decorative background and border on hover */}
                      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="absolute inset-0 border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 group-hover:border-accent-bright/30 transition-all duration-300"></div>
                      <div className="relative flex items-center space-x-2">
                        <item.icon size={18} />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>


            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm hover:border-accent-bright/50"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-white">{isOpen ? <X size={24} /> : <Menu size={24} />}</div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="lg:hidden mt-4 p-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={classNames(
                        "relative group flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left",
                        activeSection === item.id
                          ? "text-accent-bright bg-white/10"
                          : "text-white hover:text-accent-bright"
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <item.icon className="group-hover:text-accent-bright transition-colors duration-300" size={20} />
                      <span className="font-medium transition-colors duration-300">{item.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
      
    </>
  );
};

export default Header;

{/* <motion.div className="relative group bg-white rounded-2xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <button
            onClick={() => scrollToSection("#home")}
            className="relative p-2 rounded-xl transition-all duration-300 hover:brightness-110"
          >

            <img
              src="/navlogo.png" // Placeholder for navlogo.png
              alt="Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => { e.target.src = "https://placehold.co/100x40/000000/FFFFFF?text=LOGO"; }}
            />
          </button>
        </motion.div> */}