import React from "react";
import "./style.css";


export default function App() {
  return (
    <div classname = "main-div">
      <h1>What do you wanna say to your friend?<span role="img" aria-label="sparkles">✨</span></h1>
      <form>
      <textarea placeholder = "Feel free to add links to cute dog videos too.."></textarea>
      <ul></ul>
      <input type = "text" placeholder = "Your friend's name" /> {""}
      <input type = "text" placeholder = "Your friend's email id" />
      <ul></ul>
      <a id="email-link" href = "mailto:cgopina1@binghamton.edu?subject=Hey! How are you?"> Send email </a>
      </form>
    </div>
  );
}
