import { default as joi } from 'joi';
import { userKeyPattern } from './joi_key_pattern.js';

export const login = joi.object({
  userName: userKeyPattern.userName.required(),
  password: userKeyPattern.password.required(),
});

export const signup = joi.object({
  name: userKeyPattern.name.required(),
  userName: userKeyPattern.userName.required(),
  password: userKeyPattern.password.required(),
  cPassword: userKeyPattern.cPassword('password').required(),
});
