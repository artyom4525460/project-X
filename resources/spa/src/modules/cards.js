export const cards = window.cards

export function getById(cardId) {
  if (!cardId) {
    return false;
  }

  for (const category of cards) {
    const card = category.cards
      .find(({ id }) => id == cardId)

    if (card) {
      return card
    }
  }

  return false;
}