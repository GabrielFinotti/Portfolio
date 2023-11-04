import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDescricaoComponent } from './cards-descricao.component';

describe('CardsDescricaoComponent', () => {
  let component: CardsDescricaoComponent;
  let fixture: ComponentFixture<CardsDescricaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsDescricaoComponent]
    });
    fixture = TestBed.createComponent(CardsDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
