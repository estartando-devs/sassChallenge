const getdeputados = (url)=>{
    fetch(url).then(res=> res.json()).then(res =>{
        montaCard(res)
        // console.log(res.dados[1])
    }).catch(res=> {console.log(res)})
}

const montaCard = (content)=>{
    for(let i = 0; i< content.dados.length; i++) {
        let card = `
          <div class="card">
            <div class="card-head">
                <img class="card-img" src="${content.dados[i].urlFoto}">
                <h4 class="card-title">${content.dados[i].nome}</h4>
            </div>
            <div class="card-body">
                <p class="card-content">${content.dados[i].siglaPartido}<p/>
                <p>${content.dados[i].email}</p>
            </div>
          </div>
        `
    document.getElementById('container').innerHTML += card        
    };
}

getdeputados("https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=2&itens=12")