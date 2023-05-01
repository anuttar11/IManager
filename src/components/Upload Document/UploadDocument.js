import React, { useState } from "react";
import Uploaddocument from "./UploadDocument.module.css";
import { FiUploadCloud } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function UploadDocument() {
  //hooks used
  const [fileName, setFileName] = useState([]);

  // functions
  const addFileHandler = () => {
    setFileName((oldarr) => {
      return [
        ...oldarr,
        {
          docType: (
            <select>
              <option value="doc1">val1</option>
              <option value="doc2">val2</option>
              <option value="doc3">val3</option>
              <option value="doc4">val4</option>
            </select>
          ),
          uploadedFile: (
            <label
              className={Uploaddocument.uploaddocumentLabel}
              htmlFor="upload-button"
            >
              <FiUploadCloud size="24px" style={{ marginRight: "8px" }} />
              Upload file
              <input
                multiple
                style={{ display: "none" }}
                type="file"
                id="upload-button"
                accept=".doc,.docx,application/msword,application/pdf, image/jpg, image/jpeg"
              />
            </label>
          ),
          delete: <MdDelete style={{ cursor: "pointer" }} size="24px" />,
        },
      ];
    });
  };
  return (
    <div className={Uploaddocument.wrapper}>
      <div className={Uploaddocument.container}>
        <div className={Uploaddocument.fileuploader}>
          <button className={Uploaddocument.addFile} onClick={addFileHandler}>
            Add file
          </button>
        </div>
        <div className={Uploaddocument.filelist}>
          <table
            className={Uploaddocument.fileTable}
            cellPadding="0"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th className={Uploaddocument.column1}>Document Type</th>
                <th className={Uploaddocument.column2}>Uploaded file</th>
                <th className={Uploaddocument.column3}> Delete </th>
              </tr>
            </thead>
            <tbody>
              {fileName.map((item, index) => {
                return (
                  <tr>
                    <td className={Uploaddocument.column1}>{item.docType}</td>
                    <td className={Uploaddocument.column2}>
                      {item.uploadedFile}
                    </td>
                    <td className={Uploaddocument.column3}>{item.delete}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <button className={Uploaddocument.submit}>Submit</button>
      </div>
    </div>
  );
}

{
  /* uploading image code 
<label
  className={Uploaddocument.uploaddocumentLabel}
  htmlFor="upload-button"
>
  <FiUploadCloud size="24px" style={{ marginRight: "8px" }} />
  Upload file
  <input
    multiple
    style={{ display: "none" }}
    type="file"
    id="upload-button"
    accept=".doc,.docx,application/msword,application/pdf, image/jpg, image/jpeg"
  />
</label> */
}
