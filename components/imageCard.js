import React from "react";
import Image from "next/image";

const ImageCard = ({ img }) => {
  console.log(img);
  return (
    <div className="group relative mb-3 cursor-auto">
      <div className="relative filter group-hover:brightness-75">
        {" "}
        <Image
          key={img.id}
          src={img.urls.small}
          layout="intrinsic"
          width={img.width}
          height={img.height}
          alt={img.alt_description}
        />
      </div>
      <div className="absolute hidden group-hover:flex   items-center  bottom-5 left-5 right-5  text-white font-medium ">
        <div className="flex items-center cursor-pointer">
          <div className="relative w-12 h-12 flex justify-center items-center mr-3 ">
            {" "}
            <Image
              className="rounded-full"
              key={img.urls.raw}
              src={img.user.profile_image.small}
              alt={`avatar of ${img.user.name}`}
              layout="intrinsic"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p className="text-lg">{img.user.name}</p>
            <p className=" text-sm font-normal">
              {img.user.for_hire ? "Available for hire" : null}
            </p>
          </div>
        </div>

        <div className="w-11 h-11 rounded-md ml-auto bg-gray-200 flex justify-center items-center cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
