import {
  incrementBad,
  incrementGood,
  incrementOk,
  reset,
} from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const goodCounter = useSelector((state) => state.counter.good);
  const okCounter = useSelector((state) => state.counter.ok);
  const badCounter = useSelector((state) => state.counter.bad);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrementGood())}>good</button>
      <button onClick={() => dispatch(incrementOk())}>ok</button>
      <button onClick={() => dispatch(incrementBad())}>bad</button>
      <button onClick={() => dispatch(reset())}>reset stats</button>
      <div>good {goodCounter}</div>
      <div>ok {okCounter}</div>
      <div>bad {badCounter}</div>
    </div>
  );
};

export default App;
