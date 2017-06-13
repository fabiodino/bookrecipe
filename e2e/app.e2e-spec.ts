import { BookrecipePage } from './app.po';

describe('bookrecipe App', () => {
  let page: BookrecipePage;

  beforeEach(() => {
    page = new BookrecipePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
