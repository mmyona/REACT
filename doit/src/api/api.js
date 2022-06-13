const BASE_URL = "http://152.67.210.208:5000/"; //공통된 url

export async function getFeeds() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    //error
    throw new Error("피드를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function createFeeds(formData) {
  const response = await fetch(`${BASE_URL}/feed`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    //error
    throw new Error("피드를 생성하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
