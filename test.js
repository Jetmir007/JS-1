function roll(){
    dice = document.getElementsByClassName("dice")
    check = document.getElementsByClassName("check")
    for(let i = 0; i < 5; i++){
        if(check[i].checked){
            number = Math.floor(Math.random()*6)+1;
            dice[i].src = "dice" + number + ".png"
        }
    }
}