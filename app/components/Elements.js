import React, {Component} from 'react'
import styled from 'styled-components';
import { fontFamily, fontSize } from '../styles/Fonts';



export const Text = styled.Text`
  font-family: ${({ fontWeight = 'regular' }) => fontFamily[fontWeight]};
  ${({ semiBold }) => semiBold && `font-weight: 500;`}
  ${({ center }) => center && `text-align: center;`}
  font-size: ${({ size = 'm' }) => fontSize[size]}px;
  color: ${({ fontColor }) => fontColor ? fontColor : '#000000'};
`;
