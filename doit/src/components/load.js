import { useState } from "react";
import axios from "axios";

function Load() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get("http://152.67.210.208:5000/").then((response) => {
      setData(response.data);
    });
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
