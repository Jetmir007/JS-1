let storlek = 40;
let exp = false;

function växa()
{
    storlek += 10
    if( storlek >= 90 && storlek <= 90){
        document.getElementById("ballong").innerHTML = "💥";
    }
    else if ( storlek >= 100){
        exp = true;
    }
    if (exp){
        storlek = 40;
        document.getElementById("ballong").innerHTML = "🎈";
        exp = false;
    }
    document.getElementById("ballong").style.fontSize = storlek +"px";

}

