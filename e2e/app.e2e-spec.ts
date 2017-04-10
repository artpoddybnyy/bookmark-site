import { BookmarksSitePage } from './app.po';

describe('bookmarks-site App', () => {
  let page: BookmarksSitePage;

  beforeEach(() => {
    page = new BookmarksSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
