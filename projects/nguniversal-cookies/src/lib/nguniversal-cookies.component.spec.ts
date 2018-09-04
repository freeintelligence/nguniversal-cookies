import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguniversalCookiesComponent } from './nguniversal-cookies.component';

describe('NguniversalCookiesComponent', () => {
  let component: NguniversalCookiesComponent;
  let fixture: ComponentFixture<NguniversalCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguniversalCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguniversalCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
