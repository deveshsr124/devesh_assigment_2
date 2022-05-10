import React from "react";
import "./folder.css";
import Folder from "./Folder";
const FolderComponent = ({ setSelected }) => {
  const coloumnArr1 = [
    {
      id: 0,
      connection: "Connection 1",
      folder_name: "API logs",
      folder_details_files: "2 Files",
      folder_details_size: "10.45mb",
    },
    {
      id: 1,
      connection: "Connection 1",
      folder_name: "Downloads",
      folder_details_files: "2 Files",
      folder_details_size: "10.45mb",
    },
    {
      id: 2,
      connection: "Connection 1",
      folder_name: "Downloads",
      folder_details_files: "2 Files",
      folder_details_size: "10.45mb",
    },
    {
      id: 3,
      connection: "Connection 2",
      folder_name: "Downloads",
      folder_details_files: "2 Files",
      folder_details_size: "10.45mb",
    },
    {
      id: 4,
      connection: "Connection 2",
      folder_name: "Downloads",
      folder_details_files: "2 Files",
      folder_details_size: "10.45mb",
    },
    {
      id: 5,
      connection: "Connection 2",
      folder_name: "Downloads",
      folder_details_files: "2 Files",
      folder_details_size: "10.45mb",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <p style={{ fontWeight: "600" }}>Connection 1</p>
          {coloumnArr1.splice(0, 3).map((item) => {
            return (
              <div className="col" key={item.id}>
                <Folder
                  folderName={item.folder_name}
                  arr={item}
                  setSelected={setSelected}
                  folderSize={item.folder_details_size}
                  folderFiles={item.folder_details_files}
                />
              </div>
            );
          })}
        </div>
        <div className="row" style={{ marginTop: "5%" }}>
          <p style={{ fontWeight: "600" }}>Connection 2</p>
          {coloumnArr1.splice(0).map((item) => {
            return (
              <div className="col" key={item.id}>
                <Folder
                  folderName={item.folder_name}
                  folderSize={item.folder_details_size}
                  folderFiles={item.folder_details_files}
                  setSelected={setSelected}
                  arr={item}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FolderComponent;
