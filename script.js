let canais = [
  {
    nome: "Globo",
    url: "https://br.embedflix.net/p2p/globosp_720p/chunks.m3u8",
    img: "https://tvonline.app/wp-content/uploads/2022/11/93cb68732da806c8532f8e24cd013f4d.jpg"
  },
  
  {
    nome: "BBB",
    url: "https://br.embedflix.net/p2p/bbb/chunks.m3u8",
    img: "https://tvonline.app/wp-content/uploads/2023/01/20230103115255888490a.jpg"
  },

  {
    id: 3,
    nome: "History",
    url: "https://live.embedflix.net/p2p/history/chunks.m3u8",
    img: "https://tvonline.app/wp-content/uploads/2022/11/k-33_Lq2_400x400.png"
  },

  {
    nome: "History 2",
    url: "https://live.embedflix.net/p2p/h2/chunks.m3u8",
    img: "https://tvonline.app/wp-content/uploads/2022/11/10229_history2_1-e1668191421447.jpg"
  },

  {
    nome: "Combate",
    url: "https://live.embedflix.net/p2p/combate/chunks.m3u8",
    img: "https://tvonline.app/wp-content/uploads/2022/11/91dccc0cfa4c92f24f8e8f4d9fd6e3e1.jpg"
  },


];

const c = (el) => document.querySelector(el);
const videoPlayer = document.querySelector(".videoPlayer");

canais.map((item, index) => {
  let buttons = c(".model .modelBtn").cloneNode(true);

  buttons.setAttribute("data-key",index);
  buttons.querySelector(".btn").innerHTML = item.nome;
  buttons.querySelector('.btn').style.backgroundImage = `url("${item.img}")`;
  buttons.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    let key = e.target.closest(".modelBtn").getAttribute("data-key");
    console.log(key);

    c(".videoPlayer source").src = canais[key].url;
    console.log(canais[key].url);

     add();

    videoPlayer.style.display = "flex";
  });

  c(".btns").append(buttons);
});

document.querySelector(".exit").addEventListener("click", () => {
  location.reload()
});

function add() {
  let head = c("head");

  let link = document.createElement("link");
  link.href = "https://vjs.zencdn.net/8.0.4/video-js.css";
  link.rel = "stylesheet";

  let scriptHead = document.createElement("script");
  scriptHead.src = "http//vjs.zencdn.net/8.0.4/video.min.js";

  head.appendChild(link);
  head.appendChild(scriptHead);

  let body = c("body");

  let scriptBody = document.createElement("script");
  scriptBody.src = "https://vjs.zencdn.net/8.0.4/video.min.js";

  body.appendChild(scriptBody);
}

/*

function add(){
  let head =c('head');
  

  let link = document.createElement('link');
  link.href="https://vjs.zencdn.net/8.0.4/video-js.css";
  link.rel="stylesheet";

  let scriptHead = document.createElement('script');
  scriptHead.src = "https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js";

head.append(link);
head.append(scriptHead);

let video = document.createElement('video');
video.id="my-video";
video.class="video-js";
video.preload="auto";
video.width="auto";
video.height="720";
let data = document.createAttribute('data-setup')
video.setAttribute('data-setp','{}');
let controls = document.createAttribute('controls');
video.setAttribute('controls','')

videoPlayer.append(video);

let myVideo = c("#my-video")

let source = document.createElement('source');
source.src = canais[key].url;
source.type = "application/x-mpegURL"

video.append(source);

let body = c('body');

let scripBody = document.createElement('script');
  scriptBody.src = "https://vjs.zencdn.net/8.0.4/video.min.js";


body.append(scripBody);


}
*/
