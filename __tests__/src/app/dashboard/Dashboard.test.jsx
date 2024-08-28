import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';
import DashboardPage from '../../../../src/app/dashboard/page'; // Adjust path as needed
import * as auth from '../../../../src/utils/auth'; // Adjust path as needed

// Mock the auth functions and useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../../../src/utils/auth', () => ({
  isAuthenticated: jest.fn(),
  logout: jest.fn(),
}));

describe('DashboardPage', () => {
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockRouterPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to login page if user is not authenticated', () => {
    auth.isAuthenticated.mockReturnValue(false);
    
    render(<DashboardPage />);
    
    expect(mockRouterPush).toHaveBeenCalledWith('/');
  });

  it('renders the dashboard content if user is authenticated', () => {
    auth.isAuthenticated.mockReturnValue(true);

    render(<DashboardPage />);

    expect(screen.getByText('See You Again')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument();
  });

  it('handles logout correctly', () => {
    auth.isAuthenticated.mockReturnValue(true);

    render(<DashboardPage />);
    
    fireEvent.click(screen.getByRole('button', { name: /logout/i }));

    expect(auth.logout).toHaveBeenCalled();
    expect(mockRouterPush).toHaveBeenCalledWith('/');
  });

  it('handles home button correctly', () => {
    auth.isAuthenticated.mockReturnValue(true);

    render(<DashboardPage />);
    
    fireEvent.click(screen.getByRole('button', { name: /home/i }));

    expect(mockRouterPush).toHaveBeenCalledWith('/');
  });
});
