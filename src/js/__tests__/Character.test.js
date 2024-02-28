import Character from '../Character.js';

test('Too short name', () => {
  expect(
      () => new Character('O', 'Bowman', 100, 100),
  ).toThrow('Invalid name length');
});

test('Too long name', () => {
  expect(
      () => new Character('LooooooongName', 'Daemon', 100, 100),
  ).toThrow('Invalid name length');
});

test('Wrong character type', () => {
  expect(
      () => new Character('Bowy', 'FakeBowman', 100, 100),
  ).toThrow('Invalid character type');
});

