import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashbpardComponent } from './product-dashbpard.component';

describe('ProductDashbpardComponent', () => {
  let component: ProductDashbpardComponent;
  let fixture: ComponentFixture<ProductDashbpardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashbpardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashbpardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
