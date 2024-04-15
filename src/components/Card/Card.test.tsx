import React from 'react';
import { Card } from './Card';
import {render, screen} from "@testing-library/react";

const cardInfoMock =  {
    "power": "5",
    "title": "Naruto Uzumaki",
    "image": {
        "src": "https://cdn.ome.lt/4CmCTmA7fhZ2_iAvAyqk7BCSPhk=/987x0/smart/uploads/conteudo/fotos/intro-1702004665_copy.jpeg",
        "alt": "Naruto Uzumaki"
    },
    "description": "O maior ninja do mundo ninja...",
    "cardTypes": ["Vento"]
}

describe('#Card', () => {
    it('Should render correctly', () => {
        render(<Card {...cardInfoMock} />);

        const titleCard = screen.getByText('Naruto Uzumaki');
        const description = screen.getByText('O maior ninja do mundo ninja...');

        expect(titleCard).toBeVisible();
        expect(description).toBeVisible();
    })
});