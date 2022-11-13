import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { BsTwitter, BsGithub, BsChevronDoubleRight } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import { Popup } from "../../components";
import AppWrap from "../../Wrapper/AppWrap";
import assets from "../../constants/assets";

import "./Home.scss";

const Home = () => {
  
  return (
    <div className="app__header app__flex app__container app__wrapper">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
      >
        

        <div className="header__cont">
          <h4 className="white-text">Hi, I'm</h4>
          <div className="home-title ">Ziad Larhouni</div>
          <h3 className="white-text">
            L3 in Application Design and Development
          </h3>

          <div className="app__header-social">
            <a href="https://twitter.com/LahrouniZiad" target="__blank">
              <div>
                <BsTwitter />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ziad-lahrouni/"
              target="__blank"
            >
              <div>
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/Zlahrouni" target="__blank">
              <div>
                <BsGithub />
              </div>
            </a>
          </div>
          <br />

          <a className="btn btn-primary" href="/About">
            About Me <BsChevronDoubleRight className="Rchevron" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
