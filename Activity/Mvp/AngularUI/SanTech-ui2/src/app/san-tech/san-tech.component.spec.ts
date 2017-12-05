import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanTechComponent } from './san-tech.component';

describe('SanTechComponent', () => {
  let component: SanTechComponent;
  let fixture: ComponentFixture<SanTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
