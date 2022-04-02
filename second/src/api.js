export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
  search = "",
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}&search=${search}`;
  const response = await fetch(
    `https://learn.codeit.kr/api/film-reviews?${query}`
  );
  if (!response.ok) {
    //error
    throw new Error();
  }
  const body = await response.json();
  return body;
}
