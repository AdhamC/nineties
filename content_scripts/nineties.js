// Nineties by Adham C
// Created as the final project for the Mashups class in New York University Abu Dhabi
// This code is published under the GNU Public License v3.0.
// Feel free to use this code for whatever you like, and show me at adham@nyu.edu


var body = document.querySelector("body");


// animate the cursor. Modern browsers really don't like animated cursors
// so this is the only solution I found that semi-works
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

// set the background image. If page has images, will grab the first image of the page and make it the background
// If page doesn't have images, a delightful gif of a dog will be the background
var bg= document.querySelector("img").src;
document.querySelector("body").style.fontFamily = "Comic Sans MS";
// this particular bg.includes line is added for the pesky google search.
// google has to make everything difficult
if ((bg != undefined || bg != NULL) && !bg.includes("data")){
    document.querySelector("body").style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('"+bg+"') "
} else {
    document.querySelector("body").style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://web.archive.org/web/20091019141447/http://www.geocities.com/liltykes36322/DogDriving.gif') "
}

// each of these pulls a tag and gives it the early web treatment
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
