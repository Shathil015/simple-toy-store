import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToyCard from "../components/homelayout/ToyCard";

const CategoriesToy = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);

  const [categoryToys, setCategoryToy] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryToy(data);
      return;
    } else {
      const filteredToys = data.filter((toy) => toy.category_id == id);
      console.log(filteredToys);

      setCategoryToy(filteredToys);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold mb-5">
        Total Toys in this Category: ({categoryToys.length})
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {categoryToys.map((toy) => (
          <ToyCard key={toy.id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriesToy;
