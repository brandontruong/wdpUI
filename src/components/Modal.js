import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
`;
const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
`;
const StyledContent = styled.div`
  padding: 1rem;
`;
const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  line-height: 1;
  position: absolute;
  right: 0;
  top: 0;
`;
const StyledDialog = styled.div`
  position: relative;
  display: inline-block;
  width: 70%;
  background: white;
  border: 1px solid #ccc;
  margin-top: 100px;
  filter: blur(0);
`;

const Modal = ({ children, show, onClose }) => {
  const [shown, setShown] = useState(show);
  const onCloseButtonClicked = () => {
    setShown(false);
    onClose();
  };

  useEffect(() => {
    setShown(show);
  }, [show]);

  if (!shown) {
    return null;
  }
  return (
    <StyledContainer>
      <StyledBackground />
      <StyledDialog>
        <StyledContent>{children}</StyledContent>
        <StyledButton type="button" onClick={onCloseButtonClicked}>X</StyledButton>
      </StyledDialog>
    </StyledContainer>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  onClose: null,
};
export default Modal;
