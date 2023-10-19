import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosDetalhesComponent } from './projetos-detalhes.component';

describe('ProjetosDetalhesComponent', () => {
  let component: ProjetosDetalhesComponent;
  let fixture: ComponentFixture<ProjetosDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetosDetalhesComponent]
    });
    fixture = TestBed.createComponent(ProjetosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
