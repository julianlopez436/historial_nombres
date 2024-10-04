import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentePrincipalComponent } from './componente-principal.component';

describe('ComponentePrincipalComponent', () => {
  let component: ComponentePrincipalComponent;
  let fixture: ComponentFixture<ComponentePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentePrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the name', () => {
    component.nombre_beta = 'Juan';
    component.guardar_nombre();
    expect(component.nombre_actual).toEqual('Juan');
  });

  it('should update the gender', () => {
    component.nombre_beta = 'Maria';
    component.sexo_beta = 'Femenino';
    component.guardar_nombre();
    expect(component.nombre_actual).toEqual('Maria');
    expect(component.sexo_actual).toEqual('Femenino');
  });

  it('should add name and gender to history', () => {
    component.nombre_beta = 'Carlos';
    component.sexo_beta = 'Masculino';
    component.guardar_nombre();
    expect(component.historial).toContain('Carlos (Masculino)');
  });
});
