import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
Button;
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award wining digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            quia, dignissimos delectus ex accusantium maiores expedita qui autem
            doloremque quo suscipit, hic sunt, mollitia architecto natus
            veritatis eos itaque asperiores. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dicta quia, dignissimos delectus ex
            accusantium maiores expedita qui autem doloremque quo suscipit, hic
            sunt, mollitia architecto natus veritatis eos itaque asperiores.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            quia, dignissimos delectus ex accusantium maiores expedita qui autem
            doloremque quo suscipit, hic sunt, mollitia architecto natus
            veritatis eos itaque asperiores. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dicta quia, dignissimos delectus ex
            accusantium maiores expedita qui autem doloremque quo suscipit, hic
            sunt, mollitia architecto natus veritatis eos itaque asperiores.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            quia, dignissimos delectus ex accusantium maiores expedita qui autem
            doloremque quo suscipit, hic sunt, mollitia architecto natus
            veritatis eos itaque asperiores. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dicta quia, dignissimos delectus ex
            accusantium maiores expedita qui autem doloremque quo suscipit, hic
            sunt, mollitia architecto natus veritatis eos itaque asperiores. -
            Creative Illustrations
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy
            <br />
            <br />- Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
