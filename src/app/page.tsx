// In src/app/page.tsx or src/pages/index.tsx

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  text-align: center;
  position:relative;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
  animation: fadeIn 1s ease-out;
  position:relative;
    z-index:10;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  animation: fadeIn 1.5s ease-out;
  font-weight:bold;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
    position:relative;
    z-index:10;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  position:relative;
    z-index:10;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #3b82f6;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }
  
  &:active {
    background-color: #1d4ed8;
    transform: translateY(1px);
  }
`;
const ImageContainer=styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:1;
`
const HomePage: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading>Welcome to Our App!</Heading>
        <Subheading>Hope You Love Music. </Subheading>

               <ImageContainer>
          <img src="/earphone.png" alt="Earphone" style={{ maxWidth: '100%', height: 'auto' }} />
        </ImageContainer>
        <ButtonContainer>
          <Button onClick={handleLoginClick}>Login</Button>
          <Button onClick={handleDashboardClick}>Dashboard</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default HomePage;
