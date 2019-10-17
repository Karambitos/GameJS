const cards = document.querySelectorAll('.memory-card');
// console.log(cards)

let hasFlippedCard = false;
let boardLocked = false;
let firsCard, secontCard;



    const flipCard = event => {
        if(boardLocked){
            return
        };
        const target = event.target.parentElement;
        if (target === firsCard) {
            return
        };
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
        };
    };

    const checkForMuch = () => {
        // if(firsCard.dataset.framework === secontCard.dataset.framework){
        //     disableCards();
        //  } else {
        //     unflipCards();
        // };

        /* записываем через тернарный оператор  */

        const isEquale = (firsCard.dataset.framework === secontCard.dataset.framework)
        isEquale ? disableCards() : unflipCards();
    };

    const disableCards = () => {
        firsCard.removeEventListener('click', flipCard);
        secontCard.removeEventListener('click', flipCard); 
    };

    const unflipCards = () => {
        boardLocked = true;
        setTimeout(() => {
            firsCard.classList.remove('flip');
            secontCard.classList.remove('flip');
            resetBord()
        }, 1000);
        console.log('FRAMEWORK OF CARD ARE NOT EQUAL')
    };

    const resetBord = () => {   /* перезаписывае доску */
        hasFlippedCard = false;
        boardLocked = false;
        firsCard = null;
        secontCard = null;

        /* записываем через Spread оператор (короче)*/

        // [hasFlippedCard, boardLocked] = [false, false];
        // [firsCard, secontCard] = [null, null];

        /* ещё короче*/

        // hasFlippedCard = boardLocked = false;
        // firsCard = secontCard = null;

    };

    cards.forEach(card => {
    //Add EventListener to every card
    card.addEventListener('click', flipCard)
    const randomIndex = Math.floor(Math.random()*cards.length);
    card.style.order = randomIndex; 
    console.log(randomIndex)
    });