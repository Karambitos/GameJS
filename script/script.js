const cards = document.querySelectorAll('.memory-card');
// console.log(cards)

let hasFlippedCard = false;
let boardLocked = false;
let firsCard, secontCard;

const flipCard = event => {
    const target = event.target.parentElement;
    target.classList.add('flip');

    console.log('FRAMEWORK OF CARD', target.dataset.framework)

    if(!hasFlippedCard){

        //first click
        hasFlippedCard = true;
        firsCard = target;
    } else {
        //second click
        hasFlippedCard = false;
        secontCard = target;

        //check for match
        checkForMuch()
     }
};

    const checkForMuch = () => {
        if(firsCard.dataset.framework === secontCard.dataset.framework){
            firsCard.removeEventListener('click', flipCard);
            secontCard.removeEventListener('click', flipCard);       
         } else {
        setTimeout(() => {
            firsCard.classList.remove('flip');
            secontCard.classList.remove('flip');
        }, 1000);
        console.log('FRAMEWORK OF CARD ARE NOT EQUAL')
        }
}

    cards.forEach(card => {
    //Add EventListener to every card
    card.addEventListener('click', flipCard)
})