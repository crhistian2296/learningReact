import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPublisers = ['Marvel Comics', 'DC Comics'];

  if (!validPublisers.includes(publisher)) {
    throw new Error(`El publisher "${publisher}" no es valido (solo Marvel o DC)`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
