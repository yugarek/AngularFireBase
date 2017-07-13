import { MyDataBasePage } from './app.po';

describe('my-data-base App', () => {
  let page: MyDataBasePage;

  beforeEach(() => {
    page = new MyDataBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
