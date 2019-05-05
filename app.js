let cardOne = document.getElementById('card-one');
let cardTwo = document.getElementById('card-two');
let cardOneValue = document.getElementById('card-one-value');
let cardTwoValue = document.getElementById('card-two-value');

let error = document.getElementById('error');

/////////////////////////

function getNewCards() {
  let deckOfCardsApi = fetch(
    'https://deckofcardsapi.com/api/deck/2y9nfk9ja7pk/draw/?count=2'
  )
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        cardOneValue.innerHTML = res.cards[0].value;
        cardOne.innerHTML = `<img src=${res.cards[0].image} alt=${
          res.cards[0].value
        }/>`;
        cardTwoValue.innerHTML = res.cards[1].value;
        cardTwo.innerHTML = `<img src=${res.cards[1].image} alt=${
          res.cards[1].value
        }/>`;
      } else {
        error.innerHTML = `${res.error}; click the reshuffle button!`;
        console.log(res.error);
      }
    });
}

function reshuffleDeck() {
  let getDeckIdApi = fetch(
    'https://deckofcardsapi.com/api/deck/2y9nfk9ja7pk/shuffle/'
  )
    .then(res => res.json())
    .then(res => {
      setTimeout(() => {
        location.reload();
      }, 500);
    });
}
