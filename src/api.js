const brach = "articles";
const repo = "lollo03.github.io";



export async function ottieniPortfolio() {
  let response = await fetch(`https://raw.githubusercontent.com/lollo03/${repo}/${brach}/portfolio.md`);
  let temp = await response.text();
  return temp;
}

export async function ottieniAbout() {
  let response = await fetch(`https://raw.githubusercontent.com/lollo03/${repo}/${brach}/aboutme.md`);
  let temp = await response.text();
  return temp;
}