import React from "react";
import "./style.css";

export default function App() {
  return (
    <div classname = "main-div">
      <h1>Notes to friends<span role="img" aria-label="sparkles">✨</span></h1>
      <form>
      <textarea placeholder = "What do you wanna say to your friend?"></textarea>
      <ul></ul>
      <input type = "text" placeholder = "Your friend's email" />
      <ul></ul>
      <input type = "submit" value = "Send email"/>
      </form>
    </div>
  );
}
