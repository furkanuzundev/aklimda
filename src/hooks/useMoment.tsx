import moment from 'moment';

const useMoment = (date: moment.MomentInput, type: string) => {
  return moment(date).format(type);
};

export default useMoment;
