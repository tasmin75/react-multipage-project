import React, { useState } from "react";

export default function Home() {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("detail")) || ""
  );
  // let detailFromLocal=JSON.parse(localStorage.getItem('detail')) ||''
  return (
    <>
      <h1>
        Welcome {localData.fName} {localData.lName}
      </h1>
      <button
        onClick={() => {
          localStorage.removeItem("detail");
          setLocalData("");
        }}
      >
        Clear
      </button>
    </>
  );
}
