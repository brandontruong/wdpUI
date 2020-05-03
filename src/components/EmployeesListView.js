import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EmployeeCardView from './EmployeeCardView';
import employeeType from '../types/index';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EmployeesListView = ({ employeesList, onEmployeeCardSelected, selectedEmployeeId }) => (
  <StyledContainer>
    {
      employeesList.map((employee) => (
        <EmployeeCardView
          selected={employee.id === selectedEmployeeId}
          key={`card-${employee.id}`}
          id={employee.id}
          avatar={employee.avatar}
          bio={employee.bio}
          firstName={employee.firstName}
          lastName={employee.lastName}
          onEmployeeCardSelected={onEmployeeCardSelected}
        />
      ))
    }
  </StyledContainer>
);

EmployeesListView.propTypes = {
  onEmployeeCardSelected: PropTypes.func.isRequired,
  employeesList: PropTypes.arrayOf(employeeType).isRequired,
  selectedEmployeeId: PropTypes.string.isRequired,
};

export default EmployeesListView;
