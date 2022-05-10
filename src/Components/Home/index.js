import React, { useState } from "react";
import "./home.css";
import DataPreview from "../DataPreview";
import FolderComponent from "../FolderComponent";
import Search from "../SearchComponent";
const Home = () => {
  const [selected, setSelected] = useState("");
  console.log("selected", selected);
  return (
    <div className="main-container">
      <div>
        <p className="search-heading">Admin Panel/List of Data</p>
        <Search />
        <FolderComponent setSelected={setSelected} />
      </div>
      {selected === "" ? "" : <DataPreview selected={selected} />}
    </div>
  );
};

export default Home;
