import { advantages } from "./graphByType";
import CardsJson from '@/utils/cards.json';



interface Card {
  power: string,
  title: string,
  image: {
    src: string,
    alt: string
  },
  description: string,
  cardTypes: string
  }
  
const cards: Card[] = CardsJson.data;
  
  
export function bfs(initialCard: Card): string[] {
  const visited: Set<string> = new Set();
  const queue: Card[] = [initialCard];
  const advantageCards: Card[] = [];

  while (queue.length > 0) {
    const currentCard = queue.shift()!;


    if (!visited.has(currentCard.title)) {
      visited.add(currentCard.title);


      for (const card of cards) {

        if (advantages[initialCard.cardTypes] && advantages[initialCard.cardTypes].has(card.cardTypes)) {
          if(card.title !== initialCard.title && card.cardTypes !== initialCard.cardTypes) {
            if(!advantageCards.find(item => item.title === card.title))
            advantageCards.push(card);
            queue.push(card);
          }
        }
      }
    }
  }

  return advantageCards.map(item => item.title);
}
  
  // Exemplo de uso
  // const initialCard: Card = { title: 'CartaInicial', cardTypes: 'Água' };
  // const advantageCards: Card[] = bfs(initialCard);
  // console.log('Cartas com vantagem:', advantageCards);
  