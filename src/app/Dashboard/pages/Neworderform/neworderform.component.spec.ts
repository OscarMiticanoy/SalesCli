import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworderformComponent } from './neworderform.component';

describe('NeworderformComponent', () => {
  let component: NeworderformComponent;
  let fixture: ComponentFixture<NeworderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeworderformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeworderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
