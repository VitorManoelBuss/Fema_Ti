const filmes = [];

function salvarFilme(event){
    event.preventDefault()
    let titulo = document.querySelector('#titulo').value;
    let link = document.querySelector('#link').value;

    let filme = {
        titulo: titulo,
        link: link
    }

    filmes.push(filme);

    console.log(filmes)

    exibirFilmes();
}

function exibirFilmes(){
    let template = '<div>';
    for (let i = 0; i < filmes.length; i++){
        template = template + `<p id = 'linha'>${filmes[i].titulo}</p>`;
        template = template + `<img  id = imagem src="${filmes[i].link}" </p>`
    }

    template = template + '</div>';

    document.querySelector('#listaDeFilmes').innerHTML = template

}