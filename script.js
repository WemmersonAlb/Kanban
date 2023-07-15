let cardCounter = 0

document.querySelector("#create-card").addEventListener('click', ()=>{
    let title = document.querySelector('#title').value;
    document.querySelector('#title').value = ''

    let description = document.querySelector('#description').value;
    document.querySelector('#description').value = ''

    let color = document.querySelector("input[name='chooseColor']:checked").value;

    let card = document.createElement('div');
    let id = 'card-'+cardCounter;
    let cabecalho = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let x = document.createElement('p');
    x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>';
    card.setAttribute('id', `${id}`)
    x.setAttribute('class', 'close-card');
    p.innerHTML = description;
    h4.innerHTML=title;
    cabecalho.appendChild(h4);
    cabecalho.appendChild(x);
    card.appendChild(cabecalho);
    card.appendChild(p);
    p.setAttribute('style', `text-align:left;padding:0 7px`);
    x.setAttribute('style', `cursor:pointer;`);
    card.setAttribute('class', `card ${color}`);
    card.setAttribute('draggable', 'true');
    cabecalho.setAttribute('class', "d-flex justify-content-between cabecalho-card");
    document.querySelector('#do').appendChild(card);
    x.addEventListener('click', ()=>{
        document.querySelector(`#${id}`).parentNode.removeChild(document.querySelector(`#${id}`));
    })
    cardCounter++;
})
document.addEventListener('dragstart', event=>{
    event.dataTransfer.setData('Text', event.target.id);
})
document.addEventListener('dragover', event=>{
    event.preventDefault();
})
document.addEventListener('drop', event=>{
    event.preventDefault();
    if(event.target.classList.contains('do') || event.target.classList.contains('doing') || event.target.classList.contains('done')){
        const data = event.dataTransfer.getData('Text');
        event.target.appendChild(document.getElementById(data));
    }
})




