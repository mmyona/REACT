import React, { useState } from "react";
import axios from "axios";

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

      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default Load;
