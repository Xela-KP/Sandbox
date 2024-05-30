const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const start = async () => {
  const deck = await getData(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  console.log(deck);
  const draw_2 = await getData(
    `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`
  );
  console.log(draw_2);
};

start();
