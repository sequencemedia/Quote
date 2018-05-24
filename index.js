import quote from './quote.js';

import step1 from './travel/single/step1.js';
import step2 from './travel/single/step2/step2.js';
import step3 from './travel/single/step3/step3.js';
import step4 from './travel/single/step4/step4.js';

const bupaGlobal = window.bupaGlobal || (window.bupaGlobal = {});

Object.assign(bupaGlobal, {
  quote,
  travel: {
    single: {
      step1,
      step2,
      step3,
      step4
    }
  }
})
