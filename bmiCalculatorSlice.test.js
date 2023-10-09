import bmiCalculatorSlice, {
  selectHeight,
  selectResults,
  selectWeight,
  setHeight,
  setResults,
  setWeight,
} from './bmiCalculatorSlice.js';

describe('selectHeight', () => {
  test('reads the given height', () => {
    const state = {
      height: 72,
    };
    const result = selectHeight({ [bmiCalculatorSlice.name]: state });
    expect(result).toBe(72);
  });
});

describe('selectWeight', () => {
  test('reads the given weight', () => {
    const state = {
      weight: 155,
    };
    const result = selectWeight({ [bmiCalculatorSlice.name]: state });
    expect(result).toBe(155);
  });
});

describe('selectResults', () => {
  test('reads the given results', () => {
    const state = {
      results: 21.02,
    };
    const result = selectResults({ [bmiCalculatorSlice.name]: state });
    expect(result).toBe(21.02);
  });
});

describe('setHeight', () => {
  test('overwrites the stored height', () => {
    const state = bmiCalculatorSlice.reducer({
      height: 60,
    }, setHeight({
      height: 72,
    }));
    expect(state).toEqual({
      height: 72,
    });
  });
});

describe('setWeight', () => {
  test('overwrites the stored weight', () => {
    const state = bmiCalculatorSlice.reducer({
      weight: 120,
    }, setWeight({
      weight: 135,
    }));
    expect(state).toEqual({
      weight: 135,
    });
  });
});

describe('setResults', () => {
  test('overwrites the stored results', () => {
    const state = bmiCalculatorSlice.reducer({
      results: 18,
      height: '',
      weight: '',
    }, setResults({
      results: 20.02,
    }));
    expect(state).toEqual({
      results: 20.02,
      height: '',
      weight: '',
    });
  });
});
