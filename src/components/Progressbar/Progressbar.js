import React from "react";
import "./Progressbar.css";

export default function Progressbar() {
  return (
    <>
      <div className="progressbar-wrapper">
        <div className="progressbar-container">
          <div className="progressbar-options">
            <div className="circle"></div>
            <h4 className="progressbar-option-heading border ">Edit Details</h4>
          </div>

          <div className="progressbar-options disabled">
            <div className="line-border-2"> </div>
            <div className="circle "></div>
            <h4 className="progressbar-option-heading disable-heading">
              Upload Files
            </h4>
          </div>
          <div className="progressbar-options disabled">
            <div className="line-border-3"> </div>
            <div className="circle"></div>
            <h4 className="progressbar-option-heading disable-heading">
              Accept/ Reject
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
