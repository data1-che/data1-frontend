import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiresComponent } from './fires.component';

describe('FiresComponent', () => {
  let component: FiresComponent;
  let fixture: ComponentFixture<FiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
