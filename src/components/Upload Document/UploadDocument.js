import React from "react";
import Uploaddocument from "./UploadDocument.module.css";
import { FiUploadCloud } from "react-icons/fi";

export default function UploadDocument() {
  return (
    <div className={Uploaddocument.wrapper}>
      <div className={Uploaddocument.container}>
        <label
          className={Uploaddocument.uploaddocumentLabel}
          htmlFor="upload-button"
        >
          <FiUploadCloud size="24px" style={{ marginRight: "8px" }} />
          Upload file
          <input
            className={Uploaddocument.uploaddocumentInput}
            type="file"
            id="upload-button"
            accept=".doc,.docx,application/msword,application/pdf, image/jpeg"
          />
        </label>
        <div>
          <input
            type="submit"
            value="Submit"
            className={Uploaddocument.uploaddocumentpageSubmit}
          />
        </div>
      </div>
    </div>
  );
}
