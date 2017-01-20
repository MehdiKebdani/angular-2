import { Jour1Page } from './app.po';

describe('jour1 App', function() {
  let page: Jour1Page;

  beforeEach(() => {
    page = new Jour1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
