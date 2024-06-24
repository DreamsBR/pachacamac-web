import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberPwdComponent } from './remember-pwd.component';

describe('RememberPwdComponent', () => {
  let component: RememberPwdComponent;
  let fixture: ComponentFixture<RememberPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RememberPwdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RememberPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
