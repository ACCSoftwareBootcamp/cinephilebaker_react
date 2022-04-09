import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Bio from "../components/Bio";
import ContactInfo from "../components/ContactInfo";
import Header from "../components/Header";
import Logo from "../components/Logo";

export default function Home(props) {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="flex flex-col-reverse lg:flex-row lg:items-center gap-5">
        {/* side bar */}
        <aside className="lg:w-3/4 xl:w-1/3">
          <div className="hidden w-full lg:block">
            <Logo />
          </div>
          <div className="px-5 pb-5">
            <hr style={{ borderTop: ".25rem solid white", margin: "1rem 0" }} />
            <Bio about={props.content} />
            <ContactInfo />
          </div>
        </aside>

        {/* banner image */}
        <div className="flex-grow max-w-5xl ml-auto">
          <img
            alt="Woman in shallow water"
            // src={bannerImg}
            className="w-full"
          />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:1337/api/blogs")
    console.log(response)
    
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      content: "gay",
    },
  };
}
