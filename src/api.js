const brach = "articles";
const repo = "lollo03.github.io";
const IgnoredFiles = ['portfolio.md', 'aboutme.md']


export async function ottieniArticoli() {
  let response = await fetch(`https://api.github.com/repos/lollo03/${repo}/git/trees/${brach}?recursive=1`);
  let temp = await response.json();
  let arr = temp.tree;
  let fin = [];
  arr.forEach((el) => {
    if (el.path.split(".")[1] == "md" && !el.path.startsWith(".") && !IgnoredFiles.includes(el.path)) {
      //solo gli articoli vanno di qua
      fin.push(el.path);
    }
  });
  return fin;
}

export async function ottieniArticolo(nome) {
  let response = await fetch(`https://raw.githubusercontent.com/lollo03/${repo}/${brach}/${nome}`);
  let temp = {};
  let risp = await response.text();

  let t = risp.split("<!--")[1];
  t = t.split("-->")[0];

  let obj = JSON.parse(t);
  temp.id = obj.nome;
  temp.nome = obj.nome;
  temp.desc = obj.desc;
  temp.testo = risp;
  return temp;
}

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