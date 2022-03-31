import ReviewList from "./ReviewList";
import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  /*
 - sort 메서드를 이용한 정렬
작은 순서대로 정렬: numbers.sort((a, b) => a - b)
크기가 큰 순서대로 정렬: numbers.sort((a, b) => b - a)
  */

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }; //id값을 받아와서->그 id값을 제외한 나머지 배열을 return해줌
  //=>삭제 기능을 수행하는 함수

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>평점순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
