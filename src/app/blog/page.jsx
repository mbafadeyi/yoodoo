import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.maincontainer}>
      <Link href="blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/13257870/pexels-photo-13257870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/6716572/pexels-photo-6716572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/19570515/pexels-photo-19570515/free-photo-of-scooter-fahrt-an-der-kuste-von-uluwatu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/19370432/pexels-photo-19370432/free-photo-of-maasai.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
