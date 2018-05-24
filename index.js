import quote from './quote.js';
import single from './travel/single/index.js';
import step1 from './travel/single/step1.js';
import * as step2 from './travel/single/step2/index.js';
import * as step3 from './travel/single/step3/step3.js';
import step4 from './travel/single/step4/step4.js';
import altapay from './travel/single/altapay.js';

const bupaGlobal = window.bupaGlobal || (window.bupaGlobal = {});

Object.assign(bupaGlobal, {
  quote,
  travel: {
    single: {
      single,
      step1,
      step2,
      step3,
      step4,
      altapay
    }
  }
});
