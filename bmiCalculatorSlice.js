import { createSlice } from '@reduxjs/toolkit';

const bmiCalculatorSlice = createSlice({
  name: 'bmiCalculator',
  initialState: {
    height: '',
    weight: '',
    results: null,
  },
  reducers: {
    setHeight: (bmiCalculator, action) => {
      const {
        height,
      } = action.payload;
      bmiCalculator.height = height;
    },
    setWeight: (bmiCalculator, action) => {
      const {
        weight,
      } = action.payload;
      bmiCalculator.weight = weight;
    },
    setResults: (bmiCalculator, action) => {
      const {
        results,
      } = action.payload;
      bmiCalculator.results = results;
      bmiCalculator.height = '';
      bmiCalculator.weight = '';
    },
  },
});
export default bmiCalculatorSlice;

export const {
  setHeight,
  setWeight,
  setResults,
} = bmiCalculatorSlice.actions;

export function selectHeight(state) {
  return state.bmiCalculator.height;
}

export function selectWeight(state) {
  return state.bmiCalculator.weight;
}

export function selectResults(state) {
  return state.bmiCalculator.results;
}
