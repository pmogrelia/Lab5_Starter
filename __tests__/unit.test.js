// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// Tests for isPhoneNumber
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number - too short', () => {
  expect(isPhoneNumber('12-467')).toBe(false);
});
test('invalid phone number - letters included', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// Tests for isEmail
test('valid email format', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('valid email with underscore domain', () => {
  expect(isEmail('user@domain_xyz.com')).toBe(true);
});
test('invalid email - missing @', () => {
  expect(isEmail('userdomain.com')).toBe(false);
});
test('invalid email - domain too long', () => {
  expect(isEmail('user@example.comm')).toBe(false);
});

// Tests for isStrongPassword
test('valid password - starts with letter', () => {
  expect(isStrongPassword('Abcd123')).toBe(true);
});
test('valid password with underscore', () => {
  expect(isStrongPassword('A_bcd123')).toBe(true);
});
test('invalid password - starts with number', () => {
  expect(isStrongPassword('1abc123')).toBe(false);
});
test('invalid password - too long', () => {
  expect(isStrongPassword('Abcdefghijklmnop')).toBe(false);
});

// Tests for isDate
test('valid date MM/DD/YYYY', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('valid date with single digits', () => {
  expect(isDate('1/1/2022')).toBe(true);
});
test('invalid date - missing year', () => {
  expect(isDate('1/1')).toBe(false);
});
test('invalid date - wrong delimiter', () => {
  expect(isDate('12-25-2023')).toBe(false);
});

// Tests for isHexColor
test('valid short hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid long hex color without #', () => {
  expect(isHexColor('abcdef')).toBe(true);
});
test('invalid hex - too long', () => {
  expect(isHexColor('#1234567')).toBe(false);
});
test('invalid hex - contains invalid character', () => {
  expect(isHexColor('#12G')).toBe(false);
});
