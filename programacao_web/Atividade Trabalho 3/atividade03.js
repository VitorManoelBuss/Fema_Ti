let videos = [];

function inicializar() {
    videos = JSON.parse(localStorage.getItem('videos') || '[]');
    exibirvideos();
}


function salvarvideo(event) {
    event.preventDefault();
    console.log('salvar video');

    let id     = document.querySelector('#idVideo').value;
    let nome = document.querySelector('#name').value;
    let link   = document.querySelector('#linkVideo').value;

    if (id) {
        let index = videos.findIndex(f => f.id == id);
        videos[index].nome = nome;
        videos[index].link = link;
    } else {
        let video = {
            id: Math.random().toString(36).substring(2),
            nome: nome,
            link: link
        };
    
        videos.push(video);
    }

    localStorage.setItem('videos', JSON.stringify(videos));    

    exibirvideos();

    document.querySelector('#idVideo').value = null;
    document.querySelector('#name').value = null;
    document.querySelector('#linkVideo').value = null;
}
 
function exibirvideos() {
    let template = '';
    for (let i = 0; i < videos.length; i++) {
        template = template + '<div class="video">';
        template = template + '<input type="checkbox">';
        template = template + `<iframe src="https://www.youtube.com/embed/${videos[i].link}" title="${videos[i].nome}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        template = template + `<p>${videos[i].nome}</p>`;
        template = template + `<button type="button" onclick="editarvideo('${videos[i].id}')">Editar</button>`;
        template = template + `<button type="button" onclick="excluirvideo('${videos[i].id}')">Excluir</button>`;
        template = template + '</div>';
    }    
    document.querySelector('#listaYT').innerHTML = template;
}

function excluirvideo(id) {
    console.log('id ', id);
    let index = videos.findIndex(f => f.id == id);
    videos.splice(index, 1);
    exibirvideos();
}

function editarvideo(id) {
    let index = videos.findIndex(f => f.id == id);

    document.querySelector('#idVideo').value = videos[index].id;
    document.querySelector('#name').value = videos[index].nome;
    document.querySelector('#linkVideo').value = videos[index].link;
}