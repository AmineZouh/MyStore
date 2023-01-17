import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Product } from '../models/Product';

import { ProductService } from './product.service';



describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('getProducts should return a list of products', ()=>{
    let result = 0
    service.getProducts().subscribe(res=>{
      expect(res.length).toBe(6)
    })

  })

});
