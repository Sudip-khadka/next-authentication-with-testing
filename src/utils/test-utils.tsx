import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import StyledComponentsRegistry from '../app/registry'

function render(ui: React.ReactElement, options = {}) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    ),
    ...options,
  })
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { render }