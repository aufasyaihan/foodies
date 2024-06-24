import Link from "next/link";

import logoImg from "@/assets/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <Image src={logoImg.src} alt="NextLevel Food" width={50} height={50} />
        <h1>NextLevel Food</h1>
      </Link>
      <nav>
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
  );
}
