import React, { Component } from 'react';
import styled from 'styled-components';

const Spacer = styled.View`
  height: ${({ height }) => height ? height : 10}px;
`;

export default Spacer;