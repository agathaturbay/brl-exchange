import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LastDaysComponent } from './last-days.component';
import { ApiService } from '../../services/api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('LastDaysComponent', () => {
  let component: LastDaysComponent;
  let fixture: ComponentFixture<LastDaysComponent>;
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LastDaysComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastDaysComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
