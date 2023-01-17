import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { of } from 'rxjs';
import { ProductItemShowComponent } from './product-item-show.component';

describe('ProductItemShowComponent', () => {
  let component: ProductItemShowComponent;
  let fixture: ComponentFixture<ProductItemShowComponent>;

  beforeEach(async () => {
    const productServiceSpy = jasmine.createSpyObj<ProductService>(['getProducts'])
    const cartServiceSpy = jasmine.createSpyObj<CartService>(['addCartItem'])

    await TestBed.configureTestingModule({
      declarations: [ ProductItemShowComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ProductService,
          useValue: productServiceSpy
        },
        {
          provide: CartService,
          useValue: cartServiceSpy
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('productItemShowComponent should be created', () => {
    expect(component).toBeDefined();
  });
  it('product variable must be defined', ()=>{
    expect(component.product).toBeTruthy()
  })
});
