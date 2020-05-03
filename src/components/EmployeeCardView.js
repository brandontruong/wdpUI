import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.article`
  background: none!important;
  text-align: left;
  border: none;
  padding: 0!important;
  color: #069;
  text-decoration: underline;
  cursor: pointer;
  flex-grow: 1;
  width: 100%;
  font-size: 0.8em;
  text-decoration: none;
  color: black;
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-grow: 1;
    width: 50%;
  } 

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-grow: 1;
    width: 33%;
  }
`;

const StyledCard = styled.div`
  ${(props) => (props.selected && 'background: red;')}
  margin: 12px;
  border: solid gray 1px;
  display: flex;
  align-items: start;
  height: 128px;
`;

const StyledRightColumn = styled.div`
  flex-grow: 1;
  padding: 12px;
`;

const StyledFullName = styled.div`
  font-size: 1.3em;
    font-weight: bold;
`;

const StyledBio = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const EmployeeCardView = ({ id, avatar, bio, firstName, lastName, onEmployeeCardSelected, selected }) => (
  <StyledButton onClick={onEmployeeCardSelected(`${id}`)}>
    <StyledCard selected={selected}>
      <div><img src={avatar} alt="avatar" /></div>
      <StyledRightColumn>
        <StyledFullName>{`${firstName} ${lastName}`}</StyledFullName>
        <StyledBio>{ bio }</StyledBio>
      </StyledRightColumn>
    </StyledCard>
  </StyledButton>
);

EmployeeCardView.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onEmployeeCardSelected: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default EmployeeCardView;
