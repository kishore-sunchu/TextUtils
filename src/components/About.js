import React from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <div className="container my-5"  style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Usage:</h1>
        <h5 className="mx-3"><li>This is a text utility app to convert your text into UpperCase, Lowercase and Capatilized form</li></h5>
        <h1 className="my-4">Developer:</h1>
        <h5 className="mx-3"><li><Link className="link" to="https://github.com/kishore-sunchu/">@kishore-sunchu</Link> with the help of the indian youtuber <Link to="https://github.com/codewithharry/">@codewithharry's</Link> React coures</li></h5>
        <h1 className="my-4">Utilitizes:</h1>
        <h5 className="mx-3"><li>Uppercase</li></h5>
        <h5 className="mx-3"><li>Lowercase</li></h5>
        <h5 className="mx-3"><li>Capatilize</li></h5>
    </div>
  );
}
