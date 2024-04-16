interface Advantages {
  [key: string]: Set<string>;
}

export const advantages: Advantages = {
  'Água': new Set(['Fogo', 'Terra']), 
  'Fogo': new Set(['Gelo', 'Aço', 'Planta', 'Vento']),
  'Aço': new Set(['Gelo', 'Fada', 'Terra']),
  'Planta': new Set(['Água', 'Terra']),
  'Terra': new Set(['Fogo', 'Aço', 'Voador', 'Eletrico']),
  'Sombra': new Set(['Vento']),
  'Fada': new Set(['Sombra']),
  'Voador': new Set(['Planta', 'Normal']),
  'Gelo': new Set(['Planta', 'Terra', 'Voador']),
  'Eletrico': new Set(['Voador', 'Água']),
  'Normal': new Set(['Aço', 'Vento']),
  'Vento': new Set(['Água', 'Planta'])
}; 