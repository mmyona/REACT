import React, { useState } from "react";
import axios from "axios";
import feedList from "./feedList";

function Load() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get("http://152.67.210.208:5000/feed");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      <feedList items={data} />
    </div>
  );
}

export default Load;
