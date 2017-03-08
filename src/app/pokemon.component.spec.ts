import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PokemonAppComponent } from '../app/pokemon.component';

beforeEachProviders(() => [PokemonAppComponent]);

describe('App: Pokemon', () => {
  it('should create the app',
      inject([PokemonAppComponent], (app: PokemonAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pokemon works!\'',
      inject([PokemonAppComponent], (app: PokemonAppComponent) => {
    expect(app.title).toEqual('pokemon works!');
  }));
});
