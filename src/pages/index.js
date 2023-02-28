import '../styles/index.css';

import { Card } from '../components/Card';
import { productsFr } from '../../utils/data.js';
import { Section } from '../components/Section.js';
import {
  cardTemplateSelector,
  productContainerSelector,
} from '../../utils/constants';

const productList = new Section(
  {
    renderer: (products) => {
      products.forEach((product) => {
        const card = new Card(cardTemplateSelector, product);
        productList.addItem(card.generate());
      });
    },
  },
  productContainerSelector,
);

productList.addItems(productsFr);
