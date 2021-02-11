import React, { Component } from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from './Elements';

export const FormContainer = styled.View`
  justify-content: flex-end;
  margin-bottom: 50px;
  background-color: rgba(52, 52, 52, 0.2);
  margin: 15px;
  padding: 15px;
  padding-top: 30px;
  border-radius: 7px;
`;

const LogoContainer = styled.View`
  justify-content: flex-end;
  margin-left: 20px;
`;

const Container = styled(LinearGradient)`
  flex: 1;
`;
const Content = styled.View`
  flex: 1;
  justify-content: center
`;

const LogoText = styled(Text)`
  font-size: 35px;
  margin-bottom: 20px;
`;

const PreLoginContainer = ({ children, title="Login" }) => {
  return (
    <Container colors={['#6ee2f5', '#6454f0']}>
      <Content >
        <LogoContainer>
          <LogoText>My Players</LogoText>
          <Text style={{ fontSize: 22 }}>{title}</Text>
        </LogoContainer>
        {children}
      </Content>
    </Container>
  )
}

export default PreLoginContainer;