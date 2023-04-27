import React, { useState } from "react";
import DetailPage from "./DetailPage.module.css";

export default function Detailpage() {
  const handleSubmit = () => {};
  const [showDetail, setShowDetail] = useState(false);

  let data = [
    { id: "Enter Manager Id" },
    { id: "INT-133" },
    { id: "INT-143" },
    { id: "INT-123" },
    { id: "INT-13" },
  ];
  // const renderDropDown = () => {
  //   return (
  //     <div>
  //       <select
  //         name="managerID"
  //         className={DetailPage.detailpage-select}
  //         placeholder="Enter "
  //       >
  //         {data.map((item) => (
  //           <option value={`${item.id}`} className="detailpage-options">
  //             {item.id}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // };

  const detailPageHandler = () => {
    setShowDetail((item) => !item);
  };
  return (
    <>
      {
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          // className={DetailPage.detail-form-page}
        >
          <div className={DetailPage.wrapper}>
            <div className={DetailPage.container}>
              <div className={DetailPage.row}>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className={DetailPage.row}>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="Middle Name"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="CG Employee ID"
                  />
                </div>
              </div>

              <div className={DetailPage.row}>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="DOJ"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="DOB"
                  />
                </div>
              </div>

              <div className={DetailPage.row}>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="Role"
                  />
                </div>
              </div>

              <div className={DetailPage.row}>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="Pancard No"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className={DetailPage.detailpageInput}
                    placeholder="Adhaar Card No"
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  value="Submit"
                  className={DetailPage.detailpageSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      }
    </>
  );
}
