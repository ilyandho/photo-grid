import Head from "next/head";
import { useState } from "react";
import ImageList from "../components/imageList";
import Navbar from "../components/navbar";

export default function Home({ data }) {
  const [assets, setAssets] = useState(data);
  const [page, setPage] = useState(2);

  // fetch extra pics
  const handleScroll = async () => {
    const res = await fetch(`/api/unsplash?page=${page}`, { mode: "no-cors" });
    const data = await res.json();

    const uniqueData = data.filter((img) => {
      let unique = true;
      assets.map((asset) => {
        if (asset.id === img.id) {
          unique = false;
        }
      });

      return unique;
    });

    setAssets([...assets, ...uniqueData]);
    setPage(page + 1);
    // console.log(result);
  };
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
      <ImageList data={assets} handleScroll={handleScroll} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`api/unsplash?page=1`, {
    mode: "no-cors",
  });
  const data = await res?.json();

  // Pass data to the page via props
  return { props: { data } };
}
