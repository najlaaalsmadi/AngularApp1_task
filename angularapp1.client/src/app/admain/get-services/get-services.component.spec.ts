import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServicesComponent } from './get-services.component';

describe('GetServicesComponent', () => {
  let component: GetServicesComponent;
  let fixture: ComponentFixture<GetServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
