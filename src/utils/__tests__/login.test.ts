import {extractLoginResult} from '../login';

it('returns correctly undefined value', () => {
  const urlToTest = 'https://app.backend.io/';
  const result = extractLoginResult(urlToTest);
  expect(result).toBe(undefined);
});

it('returns correctly success login with token', () => {
  const token = 'r34wertrte5t45t';
  const urlToTest = `https://app.backend.io/profile.html?token=${token}`;
  const result = extractLoginResult(urlToTest);
  expect(result).toHaveProperty('success', true);
  expect(result).toHaveProperty('token', token);
});

it('returns correctly login failure', () => {
  const urlToTest = `https://app.backend.io/error.html`;
  const result = extractLoginResult(urlToTest);
  expect(result).toHaveProperty('success', false);
  expect(result).toHaveProperty('errorCode', undefined);
});
