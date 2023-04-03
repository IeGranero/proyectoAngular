import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHelpComponent } from './generalHelp.component';

describe('GeneralHelpComponent', () => {
  let component: GeneralHelpComponent;
  let fixture: ComponentFixture<GeneralHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralHelpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
