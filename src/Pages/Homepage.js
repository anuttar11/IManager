import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Progressbar from "../components/Progressbar/Progressbar";
import Detailpage from "../components/DetailPage/Detailpage";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Progressbar />
      <Detailpage />

      <div></div>
    </>
  );
}
