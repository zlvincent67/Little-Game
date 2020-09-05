var i=2;
function showTime(){
    nowtime=new Date();
    hour=nowtime.getHours();
    minute=nowtime.getMinutes();
    second=nowtime.getSeconds();
    var clock = "";
    if(hour < 10)
        clock += "0";
    clock += hour + ":";
    if (minute < 10)
        clock += '0'; 
    clock += minute + ":"; 
    if (second < 10)
        clock += '0'; 
    clock += second;
    document.getElementById("mytime").innerText = clock;
    if(hour < 12)
        document.getElementById("greeting").innerText="Good Morning!";
    else
        document.getElementById("greeting").innerText="Good Afternoon!";
}
setInterval("showTime()",1000);

document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];

    if(e && e.keyCode==13){
        var contentText = document.getElementById('content');
        var ul = document.getElementById("list");

        var li = document.createElement("li");
        li.setAttribute("id", "item"+i);
        li.setAttribute("class", "to-item");
        
        var div1 = document.createElement("div");
        div1.setAttribute("class", "view");

        var div = document.createElement("div");
        div.setAttribute("class", "delete");
        var j=(i-1)*20+15;
        div.setAttribute("style","top:"+j+"px;")
        div.setAttribute("onclick", "showOtherDiv("+i+")");
        div.innerText='X';

        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("onclick", "finished("+i+")");

        var span = document.createElement("span");
        span.setAttribute("id", "todo"+i);
        span.innerHTML=contentText.value;

        div1.appendChild(div);
        div1.appendChild(input);
        div1.appendChild(span);
        li.appendChild(div1);
        ul.appendChild(li);

        // document.getElementById("list").innerHTML+=
        // "<li class=\"item2\"><div class=\"view\"><div onclick=\"showOtherDiv(\"item2\")\" class=\"delete\">X<\/div><input onclick=\"finished()\" type=\"checkbox\" name=\"check2\" id=\"check2\" >"+ contentText.value +"<br><\/div><\/li>";
        i++;
    }
};

function showOtherDiv(i){
    var parent = document.getElementById("list");
    var child = document.getElementById("item"+i);
        parent.removeChild(child);
}
function finished(i){
    document.getElementById('todo'+i).style.textDecoration='line-through';
}