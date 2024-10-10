var board = document.getElementsByClassName('board')[0],
    player = document.getElementsByClassName('gamer')[0],
    element, innerElement, 
    gamer1 = true,
    gameTable = [[null, null, null], [null, null, null], [null, null, null]],
    nullCount = 9,
    winner = null;

player.innerText = 'X turn';

for (var i = 0; i < 9; i++) {
    element = document.createElement('div');
    element.classList.add('cell');
    innerElement = document.createElement('div');
    innerElement.classList.add('inner-cell');
    innerElement.onclick = tableClick;
    innerElement.setAttribute('x', (i % 3).toString());
    innerElement.setAttribute('y', parseInt(i / 3).toString());
    element.appendChild(innerElement);
    board.appendChild(element);
}
document.getElementsByClassName('button')[0].onclick = reset;

function tableClick() {
    if (this.innerText == '') {
        this.innerText = gamer1 ? 'X' : '0';
        var y = this.getAttribute('y'), x = this.getAttribute('x');
        gameTable[y][x] = gamer1;
        nullCount--;
    if ((gameTable[y][0] === gamer1 && gameTable[y][1] === gamer1 && gameTable[y][2] === gamer1) ||
        (gameTable[0][x] === gamer1 && gameTable[1][x] === gamer1 && gameTable[2][x] == gamer1)      ||
        (gameTable[0][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[2][2] === gamer1)     ||
        (gameTable[2][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[0][2] === gamer1)) {
        winner = gamer1;    
    } 
    gamer1 = !gamer1; 
    player.innerText = gamer1 ? 'X turn' : 'X turn 0';
    if (nullCount == 0 || winner !== null) { 
        if (winner !== null) { 
            if (confirm('Winning ' + (winner ? 'X' : '0') + '\nDo you want to play some more?')) {
                reset();
            }
            else if (confirm('The game ended in a draw.\nDo you want to play some more')) { 
                reset();  
            }
        }
    }
    }
    
function reset() { 
    gamer1 = true; 
    gameTable = [[null, null, null], [null, null, null], [null, null, null]]; // 
    nullCount = 9;
    winner = null; var table = document.getElementsByClassName('inner-cell'); 
    for (var i = 0; i < table.length; i++) { 
        table[i].innerText = '';
    }
    player.innerText = 'X turn';
}
}