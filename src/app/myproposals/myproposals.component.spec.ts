import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproposalsComponent } from './myproposals.component';

describe('MyproposalsComponent', () => {
  let component: MyproposalsComponent;
  let fixture: ComponentFixture<MyproposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
