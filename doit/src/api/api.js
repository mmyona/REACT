export async function getPosts() {
  const response = await fetch("http://152.67.210.208:5000/");
  if (!response.ok) {
    //error
    throw new Error("피드를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
