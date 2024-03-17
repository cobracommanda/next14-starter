import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/4061649/pexels-photo-4061649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>3.04.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quisquam iste eveniet quis et nobis, labore reiciendis! Cumque,
          perferendis. Optio eos reprehenderit doloremque iste laboriosam labore
          ratione ducimus molestias in.
        </p>
        <Link href="/blog/post" className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
