import React from "react";
import "./preview.css";
const DataPreview = ({ selected }) => {
  return (
    <div className="preview-component">
      <div className="upper-section">
        <button type="button" className="btn btn-primary">
          Upload Data
        </button>
      </div>
      <div className="container" style={{ padding: "5%" }}>
        <div className="row">
          <div className="col">
            <i className="fa-solid fa-file-excel"></i>
          </div>
          <div className="col right_details">
            <span style={{ fontWeight: "bold" }}>{selected.folder_name}</span>
            <br />
            <span>{selected.connection}</span>
            <br />
            <span>Size : {selected.folder_details_files}</span>
            <br />
            <span>No. of File : {selected.folder_details_size}</span>
            <br />
            <span>Rows </span>
            <br />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>
        <p style={{ fontWeight: "bold", marginLeft: "6%" }}>Data Files</p>
        <table>
          <tr>
            {" "}
            <th>File Name</th>
            <th>Sent Date</th>
          </tr>
          <tr className="table-row">
            <td>API_LOG_2020_10_01.csv</td>
            <td>2020-10-01</td>
          </tr>
          <tr className="table-row">
            <td>API_LOG_2020_10_01.csv</td>
            <td>2020-09-03</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DataPreview;
