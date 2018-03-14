import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/Google.spec.js'],
  noGlobals: true,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  }
};

