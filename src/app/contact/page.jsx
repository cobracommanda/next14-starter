// "use client"
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/component/hydrationTest";
// const HydrationTestNSSR = dynamic(()=>import("@/  component/hydrationTest"), {ssr: false})


// const a = Math.random();
//   console.log(a);

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          {/* <HydrationTestNSSR /> */}
          {/* <div suppressHydrationWarning>{a}</div> */}
          <input type="text" placeholder="First and Last Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            cols="30"
            rows="10"
            name=""
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
