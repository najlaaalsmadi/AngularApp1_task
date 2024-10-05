import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NajlaaComponent } from './najlaa.component';

describe('NajlaaComponent', () => {
  let component: NajlaaComponent;
  let fixture: ComponentFixture<NajlaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NajlaaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NajlaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
