import { NavLink } from "react-router-dom";
import { FaBars,FaHandHoldingHeart,FaUserCircle} from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import {BiBookReader,BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Footer from "../Footer";

const routes = [
  {
    path: "/manual",
    name: "Manual",
    icon: <BiBookReader />,
  },
  {
    path: "/addcandidate",
    name: "Candidate Registration",
    icon: <GiArchiveRegister />,
  },
  {
    path: "/addvoter",
    name: "Voter Registration",
    icon: <GiArchiveRegister />,
  },
  {
    path: "/candidateinfo",
    name: "Candidate Info",
    icon: <GiArchiveRegister />,
  },
  {
    path: "/voterinfo",
    name: "Voter Info",
    icon: <GiArchiveRegister />,
  },
  {
    path: "/phase",
    name: "Voting phase",
    icon: <FaHandHoldingHeart />,
  },
  {
    path: "/me",
    name: "Pofile",
    icon: <FaUserCircle />,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <BiLogOut />,
  },
];

const SideAdminbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  E-Voting Dapp
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideAdminbar;
