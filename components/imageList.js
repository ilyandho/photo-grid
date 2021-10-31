import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ImageCard from "./imageCard";

export default function ImageList({ data, handleScroll }) {
  return (
    <section className=" w-11/12 sm:container mx-auto mt-20  ">
      <div className=" col-count-1 sm:col-count-2 md:col-count-3 col-gap-3 col-fill-balance ">
        {" "}
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={handleScroll}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // // below props only if you need pull down functionality
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          // pullDownToRefreshThreshold={50}
          // pullDownToRefreshContent={
          //   <h3 style={{ textAlign: "center" }}>
          //     &#8595; Pull down to refresh
          //   </h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          // }
        >
          {data?.map((img) => {
            return <ImageCard img={img} key={img.id} />;
          })}
        </InfiniteScroll>
      </div>
    </section>
  );
}
