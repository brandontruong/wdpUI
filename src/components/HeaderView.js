import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: #eaeaea;
  padding: 12px;
`;

const StyledName = styled.div`
   font-size: 2em;
`;
const StyledDetails = styled.div`
   display: flex;
    > div {
      flex: 50%;
      &:nth-child(2) {
        text-align: right;
      }
    }
`;
const HeaderView = ({ companyName, companyMotto, companyEst }) => (
  <StyledHeader>
    <StyledName>{ companyName }</StyledName>
    <StyledDetails>
      <div>{ companyMotto }</div>
      <div>{`Since ${(new Date(companyEst)).toLocaleDateString('en-GB')}`}</div>
    </StyledDetails>
  </StyledHeader>

);

HeaderView.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyMotto: PropTypes.string.isRequired,
  companyEst: PropTypes.string.isRequired,
};

export default HeaderView;
