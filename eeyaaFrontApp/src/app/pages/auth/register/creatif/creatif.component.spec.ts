import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatifComponent } from './creatif.component';

describe('CreatifComponent', () => {
  let component: CreatifComponent;
  let fixture: ComponentFixture<CreatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
