import "../css/feedList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
} //날짜 형식으로 출력해주려고 만듦

function FeedListItem({ item }) {
  return (
    <div className="feedListItem">
      <div>
        <h1>{item.title}</h1>
        <h2>{item.author}</h2>
        <p>{item.content}</p>
        <p>{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
}
//key Prop은 다른 Prop과 마찬가지로 지정할 수 있는데,
//배열을 렌더링할 때 최상위 태그에다가 지정해주면 된다.
function FeedList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.feedIdx}>
            <FeedListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default FeedList;
