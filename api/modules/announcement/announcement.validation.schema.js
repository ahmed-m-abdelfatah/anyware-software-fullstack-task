import { announcementKeyPattern } from '../../utils/joi_key_pattern.js';
import { default as joi } from 'joi';

export const addAnnouncement = {
  body: joi.object().required().keys({
    topic: announcementKeyPattern.announcementTopic.required(),
    desc: announcementKeyPattern.announcementDescription.required(),
  }),
};

export const getAnnouncementById = {
  params: joi.object().required().keys({
    id: announcementKeyPattern.id.required(),
  }),
};

export const updateAnnouncementById = {
  params: joi.object().required().keys({
    id: announcementKeyPattern.id.required(),
  }),

  body: joi.object().required().keys({
    topic: announcementKeyPattern.announcementTopic.required(),
    desc: announcementKeyPattern.announcementDescription.required(),
  }),
};

export const softDeleteAnnouncementById = {
  params: joi.object().required().keys({
    id: announcementKeyPattern.id.required(),
  }),
};

export const deleteAnnouncementById = {
  params: joi.object().required().keys({
    id: announcementKeyPattern.id.required(),
  }),
};
