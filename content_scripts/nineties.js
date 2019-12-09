
var body = document.querySelector("body");

var cursorArray = ['url("https://imgur.com/cHTyDVE.gif"), auto',
                   'url("https://imgur.com/JYxMYyY.gif"), auto',
                   'url("https://imgur.com/1fXedlA.gif"), auto',
                   'url("https://imgur.com/mEcpz2S.gif"), auto',];
i = 0;
(function cursor(){
  body.style.cursor  = cursorArray[i];
  i++;
  if(i == cursorArray.length){
    i = 0;
  }
   setTimeout(cursor, 100);
})();

var bg= document.querySelector("img").src;
console.log(bg);
console.log(bg.includes("data"));
console.log("extension working.");
document.querySelector("body").style.fontFamily = "Comic Sans MS";
document.querySelector("body").style.color = "white";
if ((bg != undefined || bg != NULL) && !bg.includes("data")){
    document.querySelector("body").style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('"+bg+"') "
} else {
    document.querySelector("body").style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://web.archive.org/web/20091019141447/http://www.geocities.com/liltykes36322/DogDriving.gif') "
}

var headers1 = document.querySelectorAll("h1");
headers1.forEach(function(data){
    data.style.fontFamily = "Comic Sans MS";
    let html = data.innerHTML;
    data.innerHTML = "----->"+html+"<-----";
});

var headers2 = document.querySelectorAll("h2");
headers2.forEach(function(data){
    data.style.fontFamily = "Comic Sans MS";
    let html = data.innerHTML;
    data.innerHTML = "----->"+html+"<-----";
});

var headers3 = document.querySelectorAll("h3");
headers3.forEach(function(data){
    data.style.fontFamily = "Comic Sans MS";
    let html = data.innerHTML;
    data.innerHTML = "----->"+html+"<-----";
});

var p = document.querySelectorAll("p");
p.forEach(function(data){
    data.style.color = "green";
    data.style.fontFamily = "Comic Sans MS";
});

var dl = document.querySelectorAll("dl");
dl.forEach(function(data){
    data.style.color = "green";
    data.style.fontFamily = "Comic Sans MS";
});

var table = document.querySelectorAll("table");
table.forEach(function(data){
    data.style.border = "2px solid black";
    data.style.fontFamily = "Comic Sans MS";
});

var th = document.querySelectorAll("th");
th.forEach(function(data){
    data.style.border = "2px solid black";
    data.style.fontFamily = "Comic Sans MS";
});

var td = document.querySelectorAll("td");
td.forEach(function(data){
    data.style.border = "2px solid black";
    data.style.fontFamily = "Comic Sans MS";
});

var div = document.querySelectorAll("div");
div.forEach(function(data){
    data.style.color = "white";
    data.style.fontFamily = "Comic Sans MS";
});

var span = document.querySelectorAll("span");
span.forEach(function(data){
    data.style.color = "inherit";
    data.style.fontFamily = "Comic Sans MS";
});
var a = document.querySelectorAll("a");
a.forEach(function(data){
    data.style.textDecoration = "underline";
    data.style.color = "blue !important";
    data.style.fontFamily = "Comic Sans MS";
});
