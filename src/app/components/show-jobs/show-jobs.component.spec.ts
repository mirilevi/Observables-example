import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJObsComponent } from './show-jobs.component';

describe('ShowJObsComponent', () => {
  let component: ShowJObsComponent;
  let fixture: ComponentFixture<ShowJObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
