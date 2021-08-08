import { TempratureTypes } from '../models';
import { TempratureSymbolPipe } from './temprature-symbol.pipe';

describe('TempratureSymbolPipe', () => {
  let pipe: TempratureSymbolPipe;
  beforeEach(() => {
    pipe = new TempratureSymbolPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('returns the correct temprature format', () => {
    expect(pipe.transform(TempratureTypes.Celsius)).toBe('°C');
    expect(pipe.transform(TempratureTypes.Kelvin)).toBe('K');
    expect(pipe.transform(TempratureTypes.Fahrenheit)).toBe('°F');
  });
  it('returns an empty string with invalid data', () => {
    expect(pipe.transform('$' as any)).toBe('');
  });
});
