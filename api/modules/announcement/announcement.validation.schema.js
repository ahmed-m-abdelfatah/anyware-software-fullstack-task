import { announcementKeyPattern } from '../../utils/joi_key_pattern.js';
import { default as joi } from 'joi';

export const addAnnouncement = {
  body: joi.object().required().keys({
    topic: announcementKeyPattern.announcementTopic.required(),
    desc: announcementKeyPattern.announcementDescription.required(),
  }),
};
