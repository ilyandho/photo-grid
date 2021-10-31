import Head from "next/head";
import { useState } from "react";
import ImageList from "../components/imageList";
import Navbar from "../components/navbar";

export default function Home({ data }) {
  const [assests, setAssets] = useState(data);

  // fetch extra pics
  const handleScroll = async () => {
    const res = await fetch(`/api/unsplash?page=10`, { mode: "no-cors" });
    const data = await res.json();
    setAssets([...assests, data]);
  };
  // console.log(data);
  console.log(assests);
  return (
    <div>
      <Head>
        <title>PhotoGrid</title>
        <meta
          name="description"
          content="This a photogrid using unsplash api"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ImageList data={assests} handleScroll={handleScroll} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/unsplash?page=1`, {
    mode: "no-cors",
  });
  const data = await res?.json();

  // Pass data to the page via props
  return { props: { data } };
}
