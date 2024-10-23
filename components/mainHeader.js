import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "./mainHeaderBackground.js";
import NavLink from "./navLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="logo image" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
