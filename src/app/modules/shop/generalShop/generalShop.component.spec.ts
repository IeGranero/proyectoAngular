import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralShopComponent } from './generalShop.component';

describe('GeneralShopComponent', () => {
  let component: GeneralShopComponent;
  let fixture: ComponentFixture<GeneralShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralShopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
