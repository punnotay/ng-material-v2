import { NgMaterialV2Page } from './app.po';

describe('ng-material-v2 App', () => {
  let page: NgMaterialV2Page;

  beforeEach(() => {
    page = new NgMaterialV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
