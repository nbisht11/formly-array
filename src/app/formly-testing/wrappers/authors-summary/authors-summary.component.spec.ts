import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsSummaryComponent } from './authors-summary.component';

describe('AuthorsSummaryComponent', () => {
  let component: AuthorsSummaryComponent;
  let fixture: ComponentFixture<AuthorsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
