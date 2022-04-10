import { useEffect, useRef } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  useEffect(() => {
    console.log(inputRef);
  }, []);

  return <input type="file" onChange={handleChange} ref={inputRef} />;
}

//file input은 반드시 '비제어 input'으로 만들어야 함

export default FileInput;
