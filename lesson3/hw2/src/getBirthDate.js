import moment from 'moment';

const getBirthDate = (date) => moment(date).format("DD MMM YY");

export default getBirthDate;