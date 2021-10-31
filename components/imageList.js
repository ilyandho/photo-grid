import React from "react";
import ImageCard from "./imageCard";

export default function ImageList({ data, handleScroll }) {
  // console.log(data);
  return (
    <section className=" w-11/12 sm:container mx-auto mt-2 ">
      <div className=" col-count-1 sm:col-count-2 md:col-count-3 col-gap-3  ">
        {" "}
        {data?.map((img) => {
          return <ImageCard img={img} key={img.id} />;
        })}
      </div>
      <p
        className="text-center font-medium cursor-pointer mb-5"
        onClick={handleScroll}
      >
        more...
      </p>
    </section>
  );
}
