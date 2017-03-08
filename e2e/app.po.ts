export class PokemonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pokemon-app h1')).getText();
  }
}
