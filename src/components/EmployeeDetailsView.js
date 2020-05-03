import React from 'react';
import styled from 'styled-components';
import employeeType from '../types/index';

const StyledContainer = styled.div`
  text-align: left;
  margin: 12px;
  display: flex;
  align-items: start;
  font-size: 0.8em;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const StyledImage = styled.img`
  margin-bottom: 12px;
`;

const StyledFullName = styled.div`
  border-bottom: solid gray 1px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  font-size: 1.3em;
  font-weight: bold;
`;

const StyledRightColumn = styled.div`
  flex-grow: 1;
  padding: 12px;
  padding-top: 91px;
  @media only screen and (max-width: 600px) {
    padding: 0;
    padding-top: 12px;
  }
`;

const EmployeeDetailsView = ({ selectedEmployee: { avatar, bio, firstName, lastName, jobTitle, age, dateJoined } }) => (
  <StyledContainer>
    <div>
      <StyledImage src={avatar} alt="avatar" />
      <div>{jobTitle}</div>
      <div>{`Age: ${age}`}</div>
      <div>{`Date joined: ${(new Date(dateJoined).toLocaleDateString('en-GB'))}`}</div>
    </div>
    <StyledRightColumn>
      <StyledFullName>{`${firstName} ${lastName}`}</StyledFullName>
      <div>{ bio }</div>
    </StyledRightColumn>
  </StyledContainer>
);

EmployeeDetailsView.propTypes = {
  selectedEmployee: employeeType.isRequired,
};

export default EmployeeDetailsView;
