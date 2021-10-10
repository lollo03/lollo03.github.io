var brach = "articles"
var repo = "lollo03.github.io"
export async function ottieniArticoli() {
    let response = await fetch(`https://api.github.com/repos/lollo03/${repo}/git/trees/${brach}?recursive=1`)
    let temp = await response.json()
    let arr = temp.tree
    let fin = []
    arr.forEach(el => {
        if (el.path != ".gitignore") {
            fin.push(el.path)
        }
    });
    return fin
}

export async function ottieniArticolo(nome) {
    let response = await fetch(`https://raw.githubusercontent.com/lollo03/${repo}/${brach}/${nome}`)
    let temp = await response.text()
    return temp
}

