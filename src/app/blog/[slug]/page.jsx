import Image from "next/image";
import styles from "./singlePostPage.module.css";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went terribly wrong");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/4061649/pexels-photo-4061649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.body}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/4061649/pexels-photo-4061649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Louis Rich</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>03.04.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
