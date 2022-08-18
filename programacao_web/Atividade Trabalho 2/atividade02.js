let compras = [];

function inicializar(){
    compras = JSON.parse(localStorage.getItem('compras')  || '[]');
    exibirCompras();
}

function listaCompras(event){
    event.preventDefault()
    console.log('Salvar Item no Carrinho')

let produto = document.querySelector('#produto').value;
let id = document.querySelector('#idCompra').value;

if(id){
    let index = compras.findIndex(f => f.id == id)
    compras[index].produto = produto;
} else {
    let compra = {
        id:Math.random().toString(36).substring(2),
        produto : produto
    }
    compras.push(compra);{

    }
};

localStorage.setItem('item', JSON.stringify(compras));

exibirCompras ();

    document.querySelector('#idCompra').value = null;
    document.querySelector('#produto').value = null;

}

function exibirCompras(){
    let template = '';
    for (let i = 0; i < compras.length; i++) {
        template = template + `<div class="compra">`
        template = template + `<p>${compras[i].produto}</p>`;
        template = template + `<div class="rodape">`;
        template = template + `<input type="checkbox">`
        template = template +   `<button class="material-icons" type="button" onclick="excluirCompra('${compras[i].id}')">Retirar</button>`;
        template = template +   `<button class="material-icons" type="button" onclick="editarCompra('${compras[i].id}')">Editar</button>`;
        template += '</div>'
        template += '</div>'
    }
    document.querySelector('#comprasLista').innerHTML = template;
}

function excluirCompra(id){
    console.log('id')

    let index = compras.findIndex(f => f.id == id);
    compras.splice(index, 1);
    localStorage.setItem('compras', JSON.stringify(compras));
    
exibirCompras()
}
    
function editarCompra(id){
    let index = compras.findIndex(f => f.id == id);

    document.querySelector('#idCompra').value = compras[index].id;
    document.querySelector('#produto').value = compras[index].produto;
}

function concluirCompra (id){
    let index = compras.findIndex(f => f.id == id);

    
}