"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import GlobalStyle from '../../styles/GlobalStyles';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #4b5563;
`;

const Input = styled.input`
  width: 92%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 1rem;
  &:hover {
    background-color: #2563eb;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

const PasswordHolder = styled.p`
  font-weight: bold;
  text-align: center;
`;

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      document.cookie = 'authenticated=true; path=/';
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <FormWrapper>
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <PasswordHolder>Username: user & Password: password</PasswordHolder>
        </FormWrapper>
      </Container>
    </>
  );
};

export default LoginPage;
