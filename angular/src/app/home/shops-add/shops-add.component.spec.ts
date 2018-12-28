import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsAddComponent } from './shops-add.component';

describe('ShopsAddComponent', () => {
  let component: ShopsAddComponent;
  let fixture: ComponentFixture<ShopsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
