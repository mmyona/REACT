import ReviewList from "./ReviewList";

//import mockItems from "../mock.json";

import { useEffect, useState } from "react";

import { getReviews } from "../api";

const LIMIT = 6; //상수로 선언함 (고정된 값이므로)

function App() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [order, setOrder] = useState("createdAt");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [search, setSearch] = useState("");

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

  const handleLoad = async (options) => {
    //비동기 함수
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getReviews(options);
    } catch (e) {
      setLoadingError(e);
      return;
    } finally {
      setIsLoading(false);
    }
    const { paging, reviews } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + options.limit); //offset값 설정하기
    setHasNext(paging.hasNext); //useState 값 -> false로 설정
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT, search });
  }; //6개 더 불러오는 함수

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target["search"].value);
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT, search });
  }, [order, search]);

  //componenet가 처음 렌더링될 때 request를 보내고 싶다면

  //->useEffect() 사용해야 함.

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>평점순</button>
        <form onSubmit={handleSearchSubmit}>
          <input name="search" />
          <button type="submit">검색</button>
        </form>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
