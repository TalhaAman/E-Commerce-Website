import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../home/ProductCard";
import "../../styles/similarItems.css";

const SimilarItems = ({ item }) => {
  const { workshopList } = useSelector((state) => state.list);
  const [similar] = useState("similar-section");

  return (
    <div className={similar}>
      <h2 className="similar-heading">Similar Workshops</h2>
      <div className="similar-item">
        {workshopList.map((product) => {
          if (item.category === product.category && item.id !== product.id) {
            return (
              <div>
                <ProductCard item={product} key={product.id} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SimilarItems;
