import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import AlertShape from "./Alert.shape";
import Color from "color";

const alertShape = new AlertShape();

const StyledAlert = styled.div`
  ${props => css`
    background-color: ${alertShape.getColor(props)};
    font-size: 0.8rem;
    font-weight: 300;
    display: block;
    color: #fff;
    padding: 1rem;
    margin: 0.5rem 0;
    border-left: 5px solid;
    border-color: ${Color(alertShape.getColor(props))
      .darken(0.3)
      .hex()};

    a {
      color: inherit;
    }
  `};
`;

const Alert = props => <StyledAlert {...props}>{props.children}</StyledAlert>;

Alert.propTypes = {
  /**
   * Component childrens
   */
  children: PropTypes.node
};

Alert.defaultProps = {
  color: "success"
};

export default Alert;