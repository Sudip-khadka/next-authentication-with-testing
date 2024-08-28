"use client";

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { isAuthenticated, logout } from '../../utils/auth';
import GlobalStyle from '../../styles/GlobalStyles';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 450px;
  margin: 1rem 0;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DashboardWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #dc2626;
  }
`;

const ButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
`;




const DashboardPage: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const backHome = () => {
    router.push('/');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <DashboardWrapper>
          <Title>See You Again</Title>
          <VideoWrapper>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RgKAFK5djSk?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
          <ButtonContainer>
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={backHome}>Home</Button>
          </ButtonContainer>
        </DashboardWrapper>
      </Container>
    </>
  );
};

export default DashboardPage;
