function adicionar(event) {
    event.preventDefault();
    const aluno = document.querySelector('#nomeAluno').value;
    const n1 = parseInt(document.querySelector('#nota1').value);
    const n2 = parseInt(document.querySelector('#nota2').value);
    const media = (n1 + n2) / 2;

    if (!aluno) {
        alert('informe o nome');
        return;
    }

    if (n1 < 0 || n1 > 10) {
        alert('nota deve ser de 1 até 10');
        return;
    }


    document.querySelector('#resultado').innerHTML = 
        document.querySelector('#resultado').innerHTML + `
        <tr>
            <td>${aluno}</td>
            <td>${n1}</td>
            <td>${n2}</td>
            <td class="${media < 7 ? 'text-danger' : ''}">${media}</td>
        </tr>                           
    `;
}