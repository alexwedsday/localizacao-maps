import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { EquipamentoService } from '../servico';
import { FormsModule } from '@angular/forms';
import { AddEquipamentoComponent } from './add-equipamento.component';

describe('AddEquipamentoComponent', () => {
  let component: AddEquipamentoComponent;
  let fixture: ComponentFixture<AddEquipamentoComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: () => ({}) });
    const equipamentoServiceStub = () => ({
      save: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AddEquipamentoComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: EquipamentoService, useFactory: equipamentoServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AddEquipamentoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`equipamentos has default value`, () => {
    expect(component.equipamentos).toEqual([]);
  });

  it(`value1 has default value`, () => {
    expect(component.value1).toEqual(`Ativo`);
  });

  describe('goToList', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.goToList();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
