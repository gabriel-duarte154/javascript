let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6){
      count += 1
  }else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A"){
    count -= 1
  }
  if (count > 0){
    return console.log(`${count} Bet`)
  }else{
    return console.log(`${count} Hold`)
  }

  // Only change code above this line
}

cc(4); cc(2); cc(7); cc(10); cc("K");