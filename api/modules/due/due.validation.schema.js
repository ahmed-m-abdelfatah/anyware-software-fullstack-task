import { dueKeyPattern } from '../../utils/joi_key_pattern.js';
import { default as joi } from 'joi';

export const addDue = {
  body: joi.object().required().keys({
    dueType: dueKeyPattern.dueType.required(),
    dueName: dueKeyPattern.dueName.required(),
    courseName: dueKeyPattern.courseName.required(),
    dueTopic: dueKeyPattern.dueTopic.required(),
    dueDate: dueKeyPattern.dueDate.required(),
  }),
};

export const getDueById = {
  params: joi.object().required().keys({
    id: dueKeyPattern.id.required(),
  }),
};

export const updateDueById = {
  params: joi.object().required().keys({
    id: dueKeyPattern.id.required(),
  }),

  body: joi.object().required().keys({
    dueType: dueKeyPattern.dueType.required(),
    dueName: dueKeyPattern.dueName.required(),
    courseName: dueKeyPattern.courseName.required(),
    dueTopic: dueKeyPattern.dueTopic.required(),
    dueDate: dueKeyPattern.dueDate.required(),
  }),
};

export const softDeleteDueById = {
  params: joi.object().required().keys({
    id: dueKeyPattern.id.required(),
  }),
};

export const deleteDueById = {
  params: joi.object().required().keys({
    id: dueKeyPattern.id.required(),
  }),
};
