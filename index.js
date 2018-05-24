import quote from './quote.js';
import * as single from './travel/single/index.js';
import * as annual from './travel/annual/index.js';
import altapay from './travel/altapay.js';

const bupaGlobal = (window.bupaGlobal || (window.bupaGlobal = {}));

Object.assign(bupaGlobal, {
  quote,
  travel: {
    single,
    annual,
    altapay
  }
});
