import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Progressbar from "../Components/Progressbar/Progressbar";
import Detailpage from "../Components/DetailPage/Detailpage";
import UploadDocument from "../Components/Upload Document/UploadDocument";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Progressbar />
      {/* <Detailpage /> */}
      <UploadDocument />
      <div></div>
    </>
  );
}
