import React, { useState } from "react";
import "./DetailPage.css";

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
  const renderDropDown = () => {
    return (
      <div>
        <select
          name="managerID"
          className="detailpage-select"
          placeholder="Enter "
        >
          {data.map((item) => (
            <option value={`${item.id}`} className="detailpage-options">
              {item.id}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const detailPageHandler = () => {
    setShowDetail((item) => !item);
  };
  return (
    <>
      {
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="detail-form-page"
        >
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="row">
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="Middle Name"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="CG Employee ID"
                  />
                </div>
              </div>

              <div className="row">
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="DOJ"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="DOB"
                  />
                </div>
              </div>

              <div className="row">
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="Role"
                  />
                </div>
              </div>

              <div className="row">
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="Pancard No"
                  />
                </div>
                <div>
                  <input
                    name="FirstName"
                    className="detailpage-input"
                    placeholder="Adhaar Card No"
                  />
                </div>
              </div>

              <div className="deatilpage-btn-container">
                <input
                  type="submit"
                  value="Submit"
                  className="detailpage-submit"
                />
              </div>
            </div>
          </div>
        </form>
      }
    </>
  );
}
