import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 12px;
  display: flex;
  align-items: start;
  border-bottom: solid gray 1px;
  padding-bottom: 12px;
`;

const StyledLeftColumn = styled.div`
  font-size: 1.2em;
`;

const StyledRightColumn = styled.div`
  text-align: right;
  flex-grow: 1;
`;

const StyledSpan = styled.span`
  padding-left: 1em;
`;
const EmployeeSearchView = ({ onSearch, onSortBySelected }) => (
  <StyledContainer>
    <StyledLeftColumn>Our Employees</StyledLeftColumn>
    <StyledRightColumn>
      <StyledSpan>
        Sort by:
        <select onChange={onSortBySelected}>
          <option value="">Select field to sort</option>
          <option value="firstName">first name</option>
          <option value="lastName">last name</option>
        </select>
      </StyledSpan>
      <StyledSpan>
        <span>Search </span>
        <input placeholder="Search by name ..." onChange={onSearch} />
      </StyledSpan>
    </StyledRightColumn>
  </StyledContainer>
);

EmployeeSearchView.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSortBySelected: PropTypes.func.isRequired,
};

export default EmployeeSearchView;
