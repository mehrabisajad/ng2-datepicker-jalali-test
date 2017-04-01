import { Ng2DatepickerJalaliTestPage } from './app.po';

describe('ng2-datepicker-jalali-test App', function() {
  let page: Ng2DatepickerJalaliTestPage;

  beforeEach(() => {
    page = new Ng2DatepickerJalaliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
