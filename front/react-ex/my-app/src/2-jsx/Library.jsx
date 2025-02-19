import React from "react";
import Book from "./Book";

function Library() {
  return (
    <div>
      <Book name="react 기초" price={3000}></Book>
      <Book name="Node.js 기초" price={4000}></Book>
      <Book name="AWS 기초" price={5000}></Book>
    </div>
  );
}

export default Library;
