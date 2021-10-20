var brach = "articles";
var repo = "lollo03.github.io";
export async function ottieniArticoli() {
  let response = await fetch(
    `https://api.github.com/repos/lollo03/${repo}/git/trees/${brach}?recursive=1`
  );
  let temp = await response.json();
  let arr = temp.tree;
  let fin = [];
  arr.forEach((el) => {
    if (el.path.split(".")[1] == "md" && el.path != "portfolio.md") {
      //solo gli articoli vanno di qua
      fin.push(el.path);
    }
  });
  return fin;
}

export async function ottieniArticolo(nome) {
  let response = await fetch(
    `https://raw.githubusercontent.com/lollo03/${repo}/${brach}/${nome}`
  );
  let temp = {};
  temp.testo = await response.text();
  temp.id = nome;
  temp.nome = nome
    .split("-")[1]
    .split(".")[0]
    .trim();
  temp.desc = temp.testo
    .split("<!--")[1]
    .split("-->")[0]
    .trim();
  return temp;
}

export async function ottieniPortfolio() {
  let response = await fetch(
    `https://raw.githubusercontent.com/lollo03/${repo}/${brach}/portfolio.md`
  );
  let temp = await response.text();
  return temp;
}
