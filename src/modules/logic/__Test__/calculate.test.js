import calculate from '../calculate';

describe('Calculator Logic Testing', () => {
  const clearState = {
    total: null,
    next: null,
    operation: null,
  };

  test('is Defined', () => {
    expect(calculate).toBeDefined();
  });

  test('AC retrun a clearState', () => {
    expect(calculate({}, 'AC')).toStrictEqual(clearState);
  });

  test('Add a nomber', () => {
    for (let index = 0; index < 10; index += 1) {
      const nextState = {
        ...clearState,
        next: `${index}`,
      };
      delete nextState.operation;
      expect(calculate(clearState, `${index}`)).toStrictEqual(nextState);
    }
  });

  test('sum 1 + 1', () => {
    const initialState = {
      total: '1',
      next: '1',
      operation: '+',
    };
    const nextState = {
      total: '2',
      next: null,
      operation: 'total',
    };
    expect(calculate(initialState, 'total')).toStrictEqual(nextState);
  });

  test('minus 1 - 1', () => {
    const initialState = {
      total: '1',
      next: '1',
      operation: '-',
    };
    const nextState = {
      total: '0',
      next: null,
      operation: 'total',
    };
    expect(calculate(initialState, 'total')).toStrictEqual(nextState);
  });
});
