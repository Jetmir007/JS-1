function rool(){
    dice = document.getElementsByClassName("dice")
    let total = 0;
    for(let i = 0; i < 69; i++){
        number = Math.floor(Math.random()*6)+1;
        dice[i].src = "dice" + number + ".png"
        total += number;
    }
    alert(total)
}