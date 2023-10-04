import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrencyService } from 'src/services/currency.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [CurrencyService],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.title).toEqual('brl-exchange');
    expect(component.currencyValue).toEqual('');
    expect(component.showComponents).toBe(false);
    expect(component.isInputEmpty).toBe(true);
  });

  it('should show input components when calling showInputValue', () => {
    component.showInputValue();
    expect(component.showComponents).toBe(true);
  });

  it('should hide input components when calling hideInputValue', () => {
    component.hideInputValue();
    expect(component.showComponents).toBe(false);
  });

  it('should add "focused" class to parent element on input focus', () => {
    const inputElement = document.createElement('input');
    document.body.appendChild(inputElement);

    const event = new FocusEvent('focus');
    spyOnProperty(event, 'target', 'get').and.returnValue(inputElement);

    component.handleInputFocus(event);

    expect(inputElement.parentElement?.classList.contains('focused')).toBe(true);

    document.body.removeChild(inputElement);
  });

  it('should remove "filled" and "focused" classes on input blur if input is empty', () => {
    const inputElement = document.createElement('input');
    inputElement.value = '';
    const event = new FocusEvent('blur');
    spyOnProperty(event, 'target', 'get').and.returnValue(inputElement);
    component.handleInputBlur(event);
    expect(inputElement.classList.contains('filled')).toBe(false);
    expect(inputElement.parentElement?.classList.contains('focused')).toBe(false);
  });

  it('should add "filled" class on input blur if input is not empty', () => {
    const inputElement = document.createElement('input');
    inputElement.value = '123';
    const event = new FocusEvent('blur');
    spyOnProperty(event, 'target', 'get').and.returnValue(inputElement);
    component.handleInputBlur(event);
    expect(inputElement.classList.contains('filled')).toBe(true);
  });


  it('should update isInputEmpty correctly', () => {
    component.currencyValue = '123';
    component.updateInputEmptyState();
    expect(component.isInputEmpty).toBe(false);

    component.currencyValue = '';
    component.updateInputEmptyState();
    expect(component.isInputEmpty).toBe(true);
  });
});
