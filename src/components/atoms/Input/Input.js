import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import InputShape from "./Input.shape";
import { shadow } from "styles/mixins";

const inputShape = new InputShape();

const StyledInput = styled.input`
  ${props => css`
    padding: 0.8rem;
    display: block;
    width: 100%;
    border: none;
    box-sizing: border-box;
    background-color: #fff;
    transition: 0.2s all;
    border: 1px solid ${props.error ? "red" : "#cacaca"};

    &:focus {
      border: 1px solid #2196f3;
      outline: none;
      -webkit-box-shadow: inset 0 0 0px 9999px white,
        0 0 8px rgba(102, 175, 233, 0.6);
    }
  `};
`;

const StyledInputError = styled.div`
  color: #f44336;
  margin-top: 0.5rem;
  font-size: 0.7rem;
`;

const Input = props => {
  const { error } = props;

  return (
    <Fragment>
      <StyledInput {...props} />
      {error && <StyledInputError>{error}</StyledInputError>}
    </Fragment>
  );
};

export default Input;