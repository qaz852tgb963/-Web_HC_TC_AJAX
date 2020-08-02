
var content=document.getElementById("content");

var xhr=new XMLHttpRequest();

xhr.open("get","./data.txt");
xhr.send();

xhr.onload=()=>{
    content.innerText=xhr.responseText;
}



var xhrjson=new XMLHttpRequest();
var pname=document.getElementById("pname");
var price=document.getElementById("price");

xhrjson.open("get","./data.json");
xhrjson.send();

xhrjson.onload=()=>{
    var REdata= JSON.parse(xhrjson.response);
    pname.innerText=REdata.P_name;
    price.innerText=REdata.P_price;
}