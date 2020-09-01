import { TestBed } from '@angular/core/testing';

import { CreateRecipeService } from './create-recipe.service';

describe('CreateRecipeService', () => {
  let service: CreateRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
