import Home from './page';
import {render, screen} from "@testing-library/react";

describe("#Page", () => {
   it('should render correctly', () => {
       render(<Home />);

       const title = screen.getByText('Card Game');
       const description = screen.getByText('Saiba quais cartas tem vantagens sobre as outras!');

       expect(title).toBeVisible();
       expect(description).toBeVisible();

       const firstCard = {
           title: screen.getByText('Naruto Uzumaki'),
           description: screen.getByText('O maior ninja do mundo ninja...'),
       }

       expect(firstCard.title).toBeVisible();
       expect(firstCard.description).toBeVisible();
   })
});