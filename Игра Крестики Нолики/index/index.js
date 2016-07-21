// Весь мой код
window.addEventListener('load',function () {
    var cells = document.querySelectorAll('.cell');
    var field = document.querySelector('.field');
    var button = document.querySelector('.startNewGame');
    var nextMove = 'x';
    var winnerMessage = document.querySelector('.winner-message');
    button.addEventListener('click',function StartNewGame() {
        for (var i=0; i<cells.length; i++){
            cells[i].classList.remove('x','o');
        }
        nextMove = 'x';
        winnerMessage.innerHTML = '';
    });
        field.addEventListener('click',function (e) {
            if(!e.target.classList.contains("cell")){
                return
            }
            if(getWinner()){
                return;
            }
            if ((!e.target.classList.contains('x')) && (!e.target.classList.contains('o'))){
                e.target.classList.add(nextMove);
                if (nextMove === 'x') {
                    nextMove = 'o';
                } else nextMove = 'x'
            }
            var winner = getWinner();
            if (winner){
                if (winner === 'x'){
                    winnerMessage.innerHTML = "Победил крестик";
                }else{
                    winnerMessage.innerHTML = 'Победил нолик';
                }
            }
     })
});




















































