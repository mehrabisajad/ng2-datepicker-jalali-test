import { RajaaPage } from './app.po';

describe('rajaa App', () => {
  let page: RajaaPage;

  beforeEach(() => {
    page = new RajaaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
