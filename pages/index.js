import Head from "next/head";
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

      <h1 className=" text-3xl">Photo Grid</h1>
    </div>
  );
}
