import { userKeyPattern } from '../../utils/joi_key_pattern.js';
import { default as joi } from 'joi';

export const login = {
  body: joi.object().required().keys({
    userName: userKeyPattern.userName.required(),
    password: userKeyPattern.password.required(),
  }),
};

export const signup = {
  body: joi
    .object()
    .required()
    .keys({
      name: userKeyPattern.name.required(),
      userName: userKeyPattern.userName.required(),
      password: userKeyPattern.password.required(),
      cPassword: userKeyPattern.cPassword('password').required(),
    }),
};
