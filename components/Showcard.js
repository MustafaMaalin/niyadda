import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import React, { useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

const Showcard = () => {
  // Sort the showcase data by ID in descending order
  const sortedShowcase = showcase.sort((a, b) => b.sortid - a.sortid);

  const [visibleItems, setVisibleItems] = useState(4); // Initial state to show 4 items

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items on each click
  };

  return (
    <>
      <div className="container showcase grid-4 py">
        {sortedShowcase.slice(0, visibleItems).map((item) => (
          <Card data={item} key={item.id} path="cases" />
        ))}
      </div>
      {visibleItems < sortedShowcase.length && (
        <div className="load-more">
          <button onClick={loadMore} className="button-loadmore">
            Load More
          </button>
        </div>
      )}
      <ScrollToTopButton />
    </>
  );
};

export default Showcard;
