import React from "react";

const Folder = ({ folderName, folderFiles, folderSize, arr, setSelected }) => {
  const handleClick = () => {
    setSelected(arr);
  };
  return (
    <>
      <div className="card folder-card" onClick={handleClick}>
        <div className="card-body folder-body">
          <i className="fa-regular fa-folder"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <div style={{ float: "right", paddingRight: "26%" }}>
            <span className="folder-name">{folderName}</span>
            <br />
            <span className="folder-details">
              {folderFiles},{folderSize}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Folder;
