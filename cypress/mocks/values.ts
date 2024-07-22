const formFields = [
  'cardNumber',
  'cardExpirationDate',
  'cardSecurityCode',
  'cardHolderName',
  'cardZipCode',
];

const validFormValues = [
  {
    name: 'cardNumber',
    value: '1234567890123456',
  },
  {
    name: 'cardExpirationDate',
    value: '12/30',
  },
  {
    name: 'cardSecurityCode',
    value: '000',
  },
  {
    name: 'cardHolderName',
    value: 'John Doe',
  },
  {
    name: 'cardZipCode',
    value: '12345',
  },
];

const invalidFormValues = [
  {
    name: 'cardNumber',
    value: '1234567890',
  },
  {
    name: 'cardExpirationDate',
    value: '123',
  },
  {
    name: 'cardSecurityCode',
    value: '00',
  },
  {
    name: 'cardHolderName',
    value: 'J',
  },
  {
    name: 'cardZipCode',
    value: '123',
  },
];

export { formFields, invalidFormValues, validFormValues };
