import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import ToyDetailsCard from "../components/homelayout/ToyDetailsCard";
import { useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [toy, setToy] = useState({});
  //   console.log(data, id, toy);

  useEffect(() => {
    const toyDetails = data.find((singleToy) => singleToy.id == id);
    setToy(toyDetails);
  }, [data, id]);

  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">Toy details</h2>
          <ToyDetailsCard toy={toy}></ToyDetailsCard>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default ToyDetails;
