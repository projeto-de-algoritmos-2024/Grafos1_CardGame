import { bfs } from "@/utils/bfs";
describe('#bfs', () => {
    it('should return correct advantage cards', () => {
       const card ={
           "power": "5",
           "title": "Sushi",
           "image": {
               "src": "https://cdn.ome.lt/4CmCTmA7fhZ2_iAvAyqk7BCSPhk=/987x0/smart/uploads/conteudo/fotos/intro-1702004665_copy.jpeg",
               "alt": "Sushi"
           },
           "description": "Sushizinho...",
           "cardTypes": "Terra",
       }

       const advantageResponse = bfs(card);

       expect(advantageResponse).toEqual(['Sasuke Uchiha']);
    });
})