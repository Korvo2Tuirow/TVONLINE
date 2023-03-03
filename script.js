let canais = [
  {
    canal: 01,
    nome: "Globo",
    url: "https://br.embedflix.net/p2p/globosp_720p/chunks.m3u8",
  },

  {
    canal: 02,
    nome: "History",
    url: "https://br.embedflix.net/p2p/globosp_720p/chunks.m3u8",
  },

  
  {
    canal: 03,
    nome: "BBB",
    url: "https://br.embedflix.net/p2p/bbb/chunks.m3u8",
  },
  

];

const c = (el)=>document.querySelector(el);

canais.map((item)=>{

    let buttons = c(".modelBtn").cloneNode(true);

    buttons.querySelector(".btn").innerHTML = item.nome;

    

    c('.btns').append(buttons);

})




