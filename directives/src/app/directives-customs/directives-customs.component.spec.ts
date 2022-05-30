import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesCustomsComponent } from './directives-customs.component';

describe('DirectivesCustomsComponent', () => {
  let component: DirectivesCustomsComponent;
  let fixture: ComponentFixture<DirectivesCustomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesCustomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesCustomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
