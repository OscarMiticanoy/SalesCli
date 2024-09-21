import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenViewComponent } from './order-view.component';

describe('OrdenViewComponent', () => {
  let component: OrdenViewComponent;
  let fixture: ComponentFixture<OrdenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
