export const graphByType: {[key: string]: string[]} = {
    'Fogo': ['Gelo', 'Aço', 'Planta', 'Vento'],
    'Água': ['Fogo', 'Terra'],
    'Aço': ['Gelo', 'Fada', 'Terra'],
    'Planta': ['Água', 'Terra'],
    'Terra': ['Fogo', 'Aço', 'Voador', 'Eletrico'],
    'Sombra': ['Vento'],
    'Fada': ['Sombra'],
    'Voador': ['Planta', 'Normal'],
    'Gelo': ['Planta', 'Terra', 'Voador'],
    'Eletrico': ['Voador', 'Água'],
    'Normal': ['Aço', 'Vento'],
    'Vento': ['Água', 'Planta']
};
