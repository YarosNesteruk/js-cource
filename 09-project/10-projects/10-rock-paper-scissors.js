 let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();

      function play(playerMove){
        let result = '';
        const computerMove = computeRandMove();
        
        console.log(`Your move: ${playerMove}`);
        console.log(`Computer move: ${computerMove}`);

        switch(playerMove){
          case 'Rock':
              result = rock(computerMove);
              break;
          case 'Scissors':
              result = scissors(computerMove);
              break;
          case 'Paper': 
              result = paper(computerMove);
              break;
          default: 
            alert('SYSTEM CRASHED');
        }

        setScore(result);
        updateScoreElement();
        updateResult(result,playerMove,computerMove);
        localStorage.setItem('score', JSON.stringify(score));

        console.log(`You picked: ${playerMove}\nComputer: ${computerMove}\nResult: ${result} \n Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
      }

      function paper(computerMove){
        let result = '';
        if(computerMove === 'scissors'){
            result = `You Lost:(`;
          } else if(computerMove === 'paper') {
            result = 'It is a Tie 😲';
          }else{
            result = 'You Won!';
          }
          return result;
      }

      function scissors(computerMove){
        let result = '';
        if(computerMove === 'scissors'){
            result = 'Tie. 😲';
        } else if(computerMove === 'paper') {
            result = 'You: Won!';
        }else{
            result = `You: Lost:(`;
        }
          return result;
      }

      function rock(computerMove){
        let result = '';
        if(computerMove === 'scissors'){
          result = 'You Won!';
        } else if(computerMove === 'paper') {
          result = `You Lost:(`;
        }else{
          result = 'It is a Tie 😲'
        }
          return result;
      }

      function computeRandMove(){
        const randNum = Math.random() ;
        let computerMove = '';

        if(randNum >= 0 && randNum < 1/3){
            computerMove = 'rock';
        }else if(randNum >= 1/3 && randNum < 2/3){
            computerMove = 'paper';
        }else if(randNum >= 2/3 && randNum < 1){
            computerMove = 'scissors';
        }

        return computerMove;
      }

      function setScore(result){
          if(result === 'You Won!'){
              score.wins += 1;
          }else if(result === 'You Lost:('){
              score.losses += 1;
          }else if(result === 'It is a Tie 😲'){
              score.ties += 1;
          }
      }
      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML
          = `Wins: ${score.wins}, Losses: 
          ${score.losses}, Ties: ${score.ties}`;
      }

      function updateResult(result,playerMove,computerMove){
        document.querySelector('.js-result').innerHTML
          = `${result}`;
        
        document.querySelector('.js-moves').innerHTML
          = `You
          <img class="move-icon" 
          src="${playerMove}-emoji.png">
          <img class="move-icon" 
          src="${computerMove}-emoji.png">
          Computer`;
      }

      function resetScore(){
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;

        updateScoreElement();

        document.querySelector('.js-result').innerHTML
          = ``;
        
        document.querySelector('.js-moves').innerHTML
          = ``;
      }