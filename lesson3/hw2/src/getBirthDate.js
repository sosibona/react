import moment from 'moment';

const getBirthDate = (date) => moment(date).format("D MMM YY");

export default getBirthDate;