import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  console.log("hello");
  return (
    <div className={styles.container}>
      ©2023 Yoodoo. All rights reserved.
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Yoodoo Dev"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Yoodoo Dev"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Yoodoo Dev"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Yoodoo Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
