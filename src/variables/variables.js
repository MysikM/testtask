export const VARIABLE = {
   REGEX: {
       NAME:  /^[A-Za-zА-Яа-я][A-Za-zА-Яа-я][A-Za-zА-Яа-я_\- ]{0,58}$/,
       EMAIL: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
       PHONE: /^\+[0-9]{2}\s\((\d{3})\)\s\d{3}\s-\s\d{2}\s-\s\d{2}$/,
       NUMBER: /[0-9]/,
   },
   VALIDATION_MESSAGE: {
       NAME: 'name should be 2-60 characters',
       EMAIL: 'email must be a valid email according to RFC2822',
       PHONE: 'phone format +38 (XXX) XXX - XX - XX',
       FILE: {
           SIZE: 'photo should be size must not exceed 5MB',
           TYPE: 'photo should be jpg/jpeg image' ,
           RESOLUTION: 'photo should be with resolution at least 70x70px'
       },
       EMPTY: ''
   },
   REQUEST_ERROR: {
       TOKEN: {status: 401, message: 'The token expired.'},
       UNIQUE: {status: 409, message: 'User with this phone or email already exist'},
   },
}