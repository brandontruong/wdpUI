import { shape, number, string } from 'prop-types';

const employeeType = shape({
  avatar: string.isRequired,
  bio: string.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
  jobTitle: string.isRequired,
  age: number.isRequired,
  dateJoined: string.isRequired,
});

export default employeeType;
