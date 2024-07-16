export async function articleData({ signal }) {
  let url = 'https://api.realworld.io/api/articles';

  const response = await fetch(url, { signal: signal });

  const { articles } = await response.json();

  return articles;
  console.log(articles);
}
