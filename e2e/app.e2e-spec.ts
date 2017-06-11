import { ManagerboxPage } from './app.po';

describe('managerbox App', function() {
  let page: ManagerboxPage;

  beforeEach(() => {
    page = new ManagerboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
