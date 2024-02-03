import React, { useState } from "react";

export default function TextForm(props) {
  const [text, SetText] = useState("");

  const handleOnChange = (event) => {
    let newText = event.target.value;
    SetText(newText);
  };

  const handleOnUppercase = () => {
    let newText = text.toUpperCase();
    SetText(newText);
  };

  const handleOnLowercase = () => {
    let newText = text.toLowerCase();
    SetText(newText);
  };
  const handleOnCapatilize = () => {
    let word = text.split(" ");
    let newText = "";
    word.forEach((element) => {
      newText +=
        element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() + " ";
    });
    SetText(newText);
  };

  const handleOnClear = () => {
    SetText("");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myText"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text here.."
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}></textarea>
          <button className="btn btn-primary m-2" onClick={handleOnUppercase}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary m-2" onClick={handleOnLowercase}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary m-2" onClick={handleOnCapatilize}>
            Convert to Capatilize
          </button>
          <button className="btn btn-primary m-2" onClick={handleOnClear}>
            Clear Text
          </button>
        </div>
        <div className="container">
          <h1>Your Text Summary:</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Word and {text.length} Characteres
          </p>
          <p>
            {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * 0.008}{" "}
            Minutes to read
          </p>
          <h1>preview:</h1>
          <p>{text.length > 0 ? text : "Enter text to preview"}</p>
        </div>
      </div>
    </>
  );
}
