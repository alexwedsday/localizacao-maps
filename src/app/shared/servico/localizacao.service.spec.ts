/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalizacaoService } from './localizacao.service';

describe('Service: Localizacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalizacaoService]
    });
  });

  it('should ...', inject([LocalizacaoService], (service: LocalizacaoService) => {
    expect(service).toBeTruthy();
  }));
});
