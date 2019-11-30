import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfstudentsComponent } from './pdfstudents.component';

describe('PdfstudentsComponent', () => {
  let component: PdfstudentsComponent;
  let fixture: ComponentFixture<PdfstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
