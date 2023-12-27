import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            officia temporibus natus hic ab assumenda nostrum, sed rem. Libero
            vero rem veritatis mollitia optio sint, exercitationem ut maiores!
            In, excepturi?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/13925850/pexels-photo-13925850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/13925850/pexels-photo-13925850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          officia temporibus natus hic ab assumenda nostrum, sed rem. Libero
          vero rem veritatis mollitia optio sint, exercitationem ut maiores! In,
          excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Itaque officia temporibus natus hic ab assumenda nostrum, sed rem.
          Libero vero rem veritatis mollitia optio sint, exercitationem ut
          maiores! In, excepturi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque officia temporibus natus hic ab assumenda
          nostrum, sed rem. Libero vero rem veritatis mollitia optio sint,
          exercitationem ut maiores! In, excepturi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Itaque officia temporibus natus hic ab
          assumenda nostrum, sed rem. Libero vero rem veritatis mollitia optio
          sint, exercitationem ut maiores! In, excepturi? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Itaque officia temporibus natus hic
          ab assumenda nostrum, sed rem. Libero vero rem veritatis mollitia
          optio sint, exercitationem ut maiores! In, excepturi? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Itaque officia temporibus
          natus hic ab assumenda nostrum, sed rem. Libero vero rem veritatis
          mollitia optio sint, exercitationem ut maiores! In, excepturi? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Itaque officia
          temporibus natus hic ab assumenda nostrum, sed rem. Libero vero rem
          veritatis mollitia optio sint, exercitationem ut maiores! In,
          excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Itaque officia temporibus natus hic ab assumenda nostrum, sed rem.
          Libero vero rem veritatis mollitia optio sint, exercitationem ut
          maiores! In, excepturi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque officia temporibus natus hic ab assumenda
          nostrum, sed rem. Libero vero rem veritatis mollitia optio sint,
          exercitationem ut maiores! In, excepturi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Itaque officia temporibus natus hic ab
          assumenda nostrum, sed rem. Libero vero rem veritatis mollitia optio
          sint, exercitationem ut maiores! In, excepturi? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Itaque officia temporibus natus hic
          ab assumenda nostrum, sed rem. Libero vero rem veritatis mollitia
          optio sint, exercitationem ut maiores! In, excepturi?
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default BlogPost;
