import moment from 'moment';

export const getAge = (birhtDate) => +moment(birhtDate, "YYYYMMDD").fromNow().split(' ')[0];
