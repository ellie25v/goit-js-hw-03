'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  changeHobby(value) {
    this.hobby = value;
  },
};

user['mood'] = 'happy';
user.changeHobby('skydiving');
user.premium = false;

const entries = Object.entries(user);


for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

