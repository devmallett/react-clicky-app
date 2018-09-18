import React from "react";
import "./Title.css";
// Decalring title contat with props call backl --> this is what links props to the child elemetns of the title
const Title = props => <h1 className="title">{props.children}</h1>;

// Exporting title component 
export default Title;