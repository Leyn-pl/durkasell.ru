alert("Добро пожаловать на Durkasell.ru!\nТут тебе нужно майнить шизиум и продавать его\nA стоит 10 шизокойнов, B - 25 и C - 50. Улучшение инета ускоряет майнинг шизиума и шанс на получение более хорошего. Майнер майнит шизиум каждые 3 секунды. Когда вы майните, может произойти что-нибудь. Может хорошое, а может и плохое. Про улучшение компа ничего не скажу. Узнаешь сам)")

var shiziumA = 0;
var shiziumB = 0;
var shiziumC = 0;
var coins = 100;
var minebar = 0;
var barmax = 100;
var level = 1;
var upcost = 100;
var miners = 0;
var minercost = 500;
var pclevel = 1;
var pccost = 1000;
var tmgot = false;

function mine(){
    minebar += level;
    document.getElementById("bar").value = minebar;
    document.getElementById("mp").innerHTML = minebar + "/" + barmax;
    event();
    if(minebar >= barmax){
        get();
        document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
        minebar = 0;
        document.getElementById("bar").value = minebar;
        document.getElementById("mp").innerHTML = minebar + "/" + barmax;
    }
}

function get(){
    var rand = Math.ceil(Math.random()*100)+level*5;
    if(rand >= 90){
        shiziumC++
        document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
    }else if(rand >= 60){
        shiziumB++
        document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
    }else{
        shiziumA++
        document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
    }
}

function sellA(n){
    shiziumA -= n;
    document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
    coins += n*10;
    document.getElementById("sc").innerHTML = "Шизокойны: " + coins;
    unlock();
}
function sellB(n){
    shiziumB -= n;
    document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
    coins += n*25;
    document.getElementById("sc").innerHTML = "Шизокойны: " + coins;
    unlock();
}
function sellC(n){
    shiziumC -= n;
    document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
    coins += n*50;
    document.getElementById("sc").innerHTML = "Шизокойны: " + coins;
    unlock();
}

function up(){
    if(level < 10){
        if(coins >= upcost){
            coins -= upcost;
            upcost += 100;
            level++
            if(level < 10){
                document.getElementById("wifi").value = "Улучшить инет (" + upcost + ") lvl " + level + "/10"
            }else{document.getElementById("wifi").value = "Улучшить инет (max) lvl " + level + "/10"}
            document.getElementById("sc").innerHTML = "Шизокойны: " + coins
        }else{alert("У тебя не хватает шизокойнов!")}
    }else{alert("Максимальный уровень!")}
}

console.log("Ты... ТЫ РЕАЛЬНО ДУМАЕШЬ, ЧТО ЭТО БУДЕТ РАБОАТЬ В КОНСОЛИ?!")
function buy(){
    if(coins >= minercost){
        coins -= minercost;
        minercost = Math.floor(minercost*0.3)*5;
        setInterval(mine, 3000);
        miners++
        document.getElementById("miner").value = "Купить майнера (" + minercost + ") lvl " + miners + "/∞"
        document.getElementById("sc").innerHTML = "Шизокойны: " + coins
    }else{alert("У тебя не хватает шизокойнов!")}
}

function pc(){
    if(pclevel < 10){
        if(coins >= pccost){
            coins -= pccost;
            pccost *= 2;
            barmax -= 10;
            minebar = 0;
            pclevel++
            document.getElementById("bar").max = barmax
            if(pclevel < 10){
                document.getElementById("pc").value = "Улучшить комп (" + pccost + ") lvl " + pclevel + "/10"
            }else{document.getElementById("pc").value = "Улучшить комп (max) lvl " + pclevel + "/10"}
            document.getElementById("mp").innerHTML = minebar + "/" + barmax
            document.getElementById("bar").value = minebar
            document.getElementById("sc").innerHTML = "Шизокойны: " + coins
        }else{alert("У тебя не хватает шизокойнов!")}
    }else{alert("Максимальный уровень!")}
}

function end(){
    let n = confirm("Закончить игру?");
    if(n){alert("Ииии... это конец. Можете перезагрузить вкладку или играть дальше")};
}

function unlock(){
    if(coins >= 1000000){document.getElementById("end").style.display = "block"};
    if(coins >= 2000000){document.getElementById("mm").innerHTML = "Вы достигли 2 миллионов шизокойнов. Это конец. Зачем ты играешь дальше?"};
    if(coins >= 3000000){document.getElementById("mmm").innerHTML = "Три миллиона? Остановись!"};
    if(coins >= 4000000){document.getElementById("mmmm").innerHTML = "Ладно. Раз так хочешь играть, сможешь накопить 10 миллионов?"};
    if(coins >= 10000000 && tmgot != true){
        document.getElementById("tm").innerHTML = "Я думал ты уже сдался... Ладно, ты заслужил награду: ";
        document.getElementById("tmb").style.display = "inline";
    }
}

function endend(){
    document.getElementById("tmb").style.display = "none";
    shiziumA += 4823098409234;
    shiziumB += 849320484334;
    shiziumC += 43280481233;
    document.getElementById("s").innerHTML = "Шизиум A: " + shiziumA + ", Шизиум B: " + shiziumB + ", Шизиум C: " + shiziumC;
    alert("Забирай весь мой шизиум. Ты заслужил это.");
    tmgot = true;
}

function event(){
    let n = Math.ceil(Math.random()*5000);
    if(n <= 2){
        alert("Произошла ошибка!");
        minebar = 0;
        document.getElementById("bar").value = minebar;
        document.getElementById("mp").innerHTML = minebar + "/" + barmax;
    }else if(n <= 4){
        alert("Вас взломали!");
        coins -= 100;
        document.getElementById("sc").innerHTML = "Шизокойны: " + coins;
    }else if(n <= 6){
        alert("Инет внезапно ускорился!");
        minebar += 100;
        mine();
    }else if(n <= 8){
        let hacked = Math.ceil(Math.random()*100)*5*level;
        alert("Вы взломали пентагон и выкачали данных на " + hacked + " шизокойнов!");
        coins += hacked;
        document.getElementById("sc").innerHTML = "Шизокойны: " + coins;
    }
}