//allocate X and O to player 1 and player 2 

//Determine current turn

$(document).ready(function()
{

    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      
    
    let p1 = 'X'
    let p2 = 'O'


    let currentTurn = 1;
    let movesMadep1 = [];
    let movesMadep2 = [];
    
    

    box = $('.box')


    // box.on('click',function(){
    //     let clickedBox =[ event.target.id ]
    //     movesMade.push(clickedBox)
    //     console.log(movesMade)
    //     // console.log(clickedBox)
    // })

    box.on('click',function(){

        // function emptySpace(space) {
        //     if ($(`#${space}`).html() == "") {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   }


        let clickedBox =[ event.target.id ]
        if (currentTurn === 1){
            event.target.innerHTML = p1
            currentTurn++
            movesMadep1.push(clickedBox)
            console.log(movesMadep1)

        }
        else {
            event.target.innerHTML = p2
            currentTurn--
            movesMadep2.push(clickedBox)
            console.log(movesMadep2)
        } 

    })

})


// function emptySpace(space) {
//     if ($(`#${space}`).html() == "") {
//       return true;
//     } else {
//       return false;
//     }
//   }

// $("#board").on("click", ".box", event => {
//     // Capture the event.target
//     let clickedBox = event.target.id;
//     // Perform check to see if space is empty
//     if (emptySpace(clickedBox)) {
//     else {
//       alert("This space has already been chosen!");
//     }
// })
//Determine current turn
//Dteremine many moves made 
