import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RateNowComponent } from './rate-now.component';
import { ApiService } from '../../services/api.service';
import { CurrencyService } from 'src/services/currency.service';
import { of } from 'rxjs';

describe('RateNowComponent', () => {
  let component: RateNowComponent;
  let fixture: ComponentFixture<RateNowComponent>;

  const mockApiService = jasmine.createSpyObj('ApiService', ['getDados']);
  const mockCurrencyService = jasmine.createSpyObj('CurrencyService', ['setCurrencyValue']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RateNowComponent],
      providers: [
        { provide: ApiService, useValue: mockApiService },
        { provide: CurrencyService, useValue: mockCurrencyService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateNowComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from ApiService when CurrencyService emits a value', () => {
    const currencyValue = 'BTC';
    const mockApiResponse = { };

    mockCurrencyService.setCurrencyValue.and.returnValue(of(currencyValue));
    mockApiService.getDados.and.returnValue(of(mockApiResponse));

    component.ngOnInit();

    expect(mockCurrencyService.setCurrencyValue).toHaveBeenCalled();
    expect(mockApiService.getDados).toHaveBeenCalledWith(currencyValue);

    fixture.whenStable().then(() => {
      expect(component.dados).toEqual(mockApiResponse);
    });
  });

  it('should format exchangeRate property when data is received', () => {
    const currencyValue = 'BTC';
    const mockApiResponse = { exchangeRate: 123.456 };

    mockCurrencyService.setCurrencyValue.and.returnValue(of(currencyValue));
    mockApiService.getDados.and.returnValue(of(mockApiResponse));

    component.ngOnInit();

    fixture.whenStable().then(() => {
      expect(component.dados.exchangeRate).toEqual('123,46');
    });
  });
});
