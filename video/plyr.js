function getparam(a, e) {
  return e || (e = window.location.href), new URL(e).searchParams.get(a)
}
let s = a => document.getElementById(a);


function getIdFromUrl(url) {
  return url.match(/[-\w]{25,}/);
}
let apikey = 'AIzaSyCHWUFpWNS0hedAsA1Rx1Yunp_CfrbWVvs';

let get = () => {
  getbase();
}
let getbase = () => {
  let ply = [];

  ply.id = getIdFromUrl(s('videourl').value);

  // ply.videotitle = s('videotitle').value;
  console.log(ply);

  var arr = JSON.stringify(Object.assign({}, ply))
  console.log(btoa(arr));
  window.base = btoa(arr);
  iframe();
  return btoa(arr);
}

//Player Openers (diff. func. coding intentionally)
let openplyr = () => {
  window.open('https://drive.indonesiya.com/video/plyr.html?id=' + base)
}

let pmsg = 'Copy Embed Code';
//Player Embedders
let embedplyr = () => {
  prompt(pmsg, `<iframe width="560" height="315" 
scrolling="no"
src="https://drive.indonesiya.com/video/plyr.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}

let iframe = () => {
  s('plyr').src = 'https://drive.indonesiya.com/video/plyr.html?id=' + base;
}