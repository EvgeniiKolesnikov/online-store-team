export function storage(key, data = null) {
  console.log(key);
  console.log(data);
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
}
