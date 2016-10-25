import { Ng2ReduxWithAotPage } from './app.po';

describe('ng2-redux--with-aot App', function() {
  let page: Ng2ReduxWithAotPage;

  beforeEach(() => {
    page = new Ng2ReduxWithAotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
