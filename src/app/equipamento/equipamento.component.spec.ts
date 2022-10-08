import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { EquipamentoService } from './servico';
import { EquipamentoComponent } from './equipamento.component';

describe('EquipamentoComponent', () => {
  let component: EquipamentoComponent;
  let fixture: ComponentFixture<EquipamentoComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: () => ({}) });
    const equipamentoServiceStub = () => ({
      listarEquipamentos: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EquipamentoComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: EquipamentoService, useFactory: equipamentoServiceStub }
      ]
    });
    spyOn(EquipamentoComponent.prototype, 'populateEquipamento');
    fixture = TestBed.createComponent(EquipamentoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`equipamentos has default value`, () => {
    expect(component.equipamentos).toEqual([]);
  });

  it(`loadMap has default value`, () => {
    expect(component.loadMap).toEqual(false);
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(
        EquipamentoComponent.prototype.populateEquipamento
      ).toHaveBeenCalled();
    });
  });

  describe('goToAdd', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.goToAdd();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
