import Head from "next/head";
import ImageList from "../components/imageList";
import Navbar from "../components/navbar";
export default function Home() {
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
      <ImageList />
    </div>
  );
}
