/* eslint-disable no-new */
import './style.scss';
import { Router } from './core/Router';
import { PageIndex } from './pages/PageIndex';
import { PageCart } from './pages/PageCart';
import { PageProd } from './pages/PageProd';
import { Page404 } from './pages/Page404';

interface Routes {
  index: PageIndex;
  cart: PageCart;
  prod: PageProd;
  page404: Page404;
}

new Router('body', {
  index: PageIndex,
  cart: PageCart,
  prod: PageProd,
  page404: Page404,
});
