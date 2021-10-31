import Head from "next/head";
import ImageList from "../components/imageList";
import Navbar from "../components/navbar";
export default function Home({ data }) {
  // console.log(data);
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
      <ImageList data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_API_KEY}`,
    { mode: "no-cors" }
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
