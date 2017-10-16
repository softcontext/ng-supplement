import { NgMatSimpleDemoPage } from './app.po';

describe('ng-mat-simple-demo App', () => {
  let page: NgMatSimpleDemoPage;

  beforeEach(() => {
    page = new NgMatSimpleDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
