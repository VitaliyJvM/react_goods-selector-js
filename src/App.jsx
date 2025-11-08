import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const Good = ({ good: { title }, selectedGood, setSelectedGood }) => (
  <tr
    data-cy="Good"
    className={cn({
      'has-background-success-light': selectedGood === title,
    })}
  >
    <td>
      {selectedGood === title ? (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => setSelectedGood('')}
        >
          -
        </button>
      ) : (
        <button
          data-cy="AddButton"
          type="button"
          className="button"
          onClick={() => setSelectedGood(title)}
        >
          +
        </button>
      )}
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {title}
    </td>
  </tr>
);

const GoodTable = ({ selectedGood, setSelectedGood }) => (
  <table className="table">
    <tbody>
      {goods?.map(good => (
        <Good
          good={{ title: good }}
          key={good}
          selectedGood={selectedGood}
          setSelectedGood={setSelectedGood}
        />
      ))}
    </tbody>
  </table>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}

      <GoodTable
        selectedGood={selectedGood}
        setSelectedGood={setSelectedGood}
      />
    </main>
  );
};
