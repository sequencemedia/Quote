import quote from './quote.js';

import step1 from './travel/step1.js';
import step2 from './travel/step2/step2.js';
import step1 from './travel/step3/step3.js';
import step1 from './travel/step4/step4.js';

const bupaGlobal = window.bupaGlobal || (window.bupaGlobal = {});

Object.assign(bupaGlobal, {
  quote,
  step1,
  step2,
  step3,
  step4
})
