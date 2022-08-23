const playerArray = [];

function allPlayer(addplayer){
    console.log(addplayer);
    const myPlayer = document.getElementById('my-player');
    myPlayer.innerHTML = '';
    for(let i = 0; i < addplayer.length; i++){
        const name = playerArray[i].playerName;

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        `;
        myPlayer.appendChild(tr);
    }
}


function selectPlayer(element, myBtnId){
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
   
    playerArray.push(playerObj);
    allPlayer(playerArray)
    document.getElementById(myBtnId).disabled = true;
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerField = document.getElementById('per-player');
    const playerFieldString = perPlayerField.value;
    const playerFieldAmmount = parseFloat(playerFieldString);
    if(Number.isNaN(playerFieldAmmount) || playerFieldAmmount < 1){
        alert('put a valid number');
        return;
    }
    // perPlayerField.value = '';
    const newAmount = playerArray.length * playerFieldAmmount;
    document.getElementById('player-expenses').innerText = newAmount;

    
})
document.getElementById('calculate-total-btn').addEventListener('click',function(){
    const managerField = document.getElementById('manager-field');
    const managerFieldString = managerField.value;
    const managerFieldAmmount = parseFloat(managerFieldString);
    
    const coachField = document.getElementById('coach-field');
    const coachFieldString = coachField.value;
    const coachFieldAmmount = parseFloat(coachFieldString);

    const playerExpanses = document.getElementById('player-expenses');
    const playerExpansesString = playerExpanses.innerText;
    const newPlayerExpanses = parseFloat(playerExpansesString);
    console.log(newPlayerExpanses);

    const coachAndManager = managerFieldAmmount + coachFieldAmmount + newPlayerExpanses;
    console.log(coachAndManager);
    // const totalAmount = newAmount;
    // console.log(coachAndManager);
    
    // const calculateTotalAmmount = coachAndManager * totalAmount;
    // const newCalculateTotal = myTotalAmmount + coachAndManager;
    const myTotal = document.getElementById('my-total');
    const myTotalString = myTotal.innerText;
    const myTotalAmmount = parseFloat(myTotalString);
    console.log(myTotalAmmount);

    myTotal.innerText = coachAndManager;
})
