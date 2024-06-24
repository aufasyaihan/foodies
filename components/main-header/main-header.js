import Link from "next/link";
import classes from "./main-header.module.css";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg.src}
            alt="NextLevel Food"
            width={50}
            height={50}
            priority
          />
          <h1>NextLevel Food</h1>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/meals/share">Share</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
