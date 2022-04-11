import { useEffect, useState, useRef } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  /*useEffect(() => { //ref로 DOM 노드 가져오기
    if (inputRef.current) {
      console.log(inputRef);
    }
  }, []);*/

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return; //이미 값이 없는 경우, 함수를 끝냄

    inputNode.value = ""; //만약 값이 있다면, 빈 문자열로 초기화
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return; //value 값이 없는 경우는, 함수를 종료
    const nextPreview = URL.createObjectURL(value); //url 생성 (임의로, 보안 문제 때문에)
    setPreview(nextPreview);

    return () => {
      //정리 함수
      setPreview(); //preview 값을 초기화
      URL.revokeObjectURL(nextPreview); //object url 해제
    }; //미리 side effect를 정리하고 -> 재렌더링할 수 있게 한다.
  }, [value]);
  //value 값이 바뀔 때마다(=파일이 새롭게 선택될 때마다) 렌더링

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>초기화</button>}
    </div>
  );
}

//file input은 반드시 '비제어 input'으로 만들어야 함

export default FileInput;
