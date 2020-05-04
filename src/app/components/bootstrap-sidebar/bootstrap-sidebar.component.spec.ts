import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSidebarComponent } from './bootstrap-sidebar.component';

describe('BootstrapSidebarComponent', () => {
  let component: BootstrapSidebarComponent;
  let fixture: ComponentFixture<BootstrapSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
