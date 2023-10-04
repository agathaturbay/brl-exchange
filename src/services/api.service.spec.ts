import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../environments/environments';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const coin = 'EUR';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get current exchange rate', () => {
    const mockResponse = {
    "success": true
  };

    service.getDados(coin).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`api`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get last month exchange rate', () => {
    const mockResponse = {
      "success": true
   };

    service.getLastMonth(coin).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`api`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
