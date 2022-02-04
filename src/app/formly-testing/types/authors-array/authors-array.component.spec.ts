import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsArrayComponent } from './authors-array.component';

describe('AuthorsArrayComponent', () => {
  let component: AuthorsArrayComponent;
  let fixture: ComponentFixture<AuthorsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
