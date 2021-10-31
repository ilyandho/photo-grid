import React from "react";
import Image from "next/image";

export default function ImageList({ data }) {
  // console.log(data);
  return (
    <section className=" container mx-auto col-count-3 col-gap-3 ">
      {data.map((img) => {
        console.log(img.urls);
        return (
          <div className="relative w-full h-auto mb-3">
            {" "}
            <Image
              key={img.id}
              src={img.urls.small}
              layout="intrinsic"
              width={img.width}
              height={img.height}
            />
          </div>
        );
      })}
    </section>
  );
}
