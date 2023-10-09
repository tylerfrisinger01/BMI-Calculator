import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import styles from './bmiDesign.module.css';

import {
  setHeight,
  setResults,
  setWeight,
  selectHeight,
  selectWeight,
  selectResults,
} from './bmiCalculatorSlice';

function InputFields({ height, weight, onChangeHeight, onChangeWeight, calculateBMI }) {
  return (
    <div className={styles.input}>
      <label>Height (in): </label>
      <input type="text" value={height} onChange={onChangeHeight} />
      <div className={styles.input}>
        <label>Weight (lbs): </label>
        <input type="text" value={weight} onChange={onChangeWeight} />
        <div className={styles.calculate}>
          <button onClick={calculateBMI}>Calculate!</button>
        </div>
      </div>
    </div>
  );
}

InputFields.propTypes = {
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  onChangeHeight: PropTypes.func.isRequired,
  onChangeWeight: PropTypes.func.isRequired,
  calculateBMI: PropTypes.func.isRequired,
};

export function BmiCalculator() {
  const BMI_CONSTANT = 703;
  const height = useSelector(selectHeight);
  const weight = useSelector(selectWeight);
  const results = useSelector(selectResults);
  const dispatch = useDispatch();

  const onChangeHeight = (event) => dispatch(setHeight({
    height: event.target.value,
  }));

  const onChangeWeight = (event) => dispatch(setWeight({
    weight: event.target.value,
  }));

  const calculateBMI = () => {
    if (height !== '' && weight !== '') {
      const bmiValue = Number((weight / (height * height)) * BMI_CONSTANT);
      dispatch(setResults({
        results: bmiValue, // put on line 76
      }));
    }
  };

  return (
    <div className={styles.center}>
      <div className={styles.label}>
        <p>BMI Calculator</p>
      </div>
      <InputFields
        height={height}
        weight={weight}
        onChangeHeight={onChangeHeight}
        onChangeWeight={onChangeWeight}
        calculateBMI={calculateBMI}
      />
      <div className={styles.results}>
        <label>Your BMI is: {results?.toFixed(2)}</label>
      </div>
      <div>
        <img src="/chart.png" alt="BMI Chart" className={styles.image}/>
      </div>
    </div>
  );
}
