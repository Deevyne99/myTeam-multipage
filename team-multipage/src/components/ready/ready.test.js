import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Ready from './Ready'

test('Header to be in component', () => {
  render(
    <MemoryRouter>
      <Ready />
    </MemoryRouter>
  )
  const ready = screen.getByTestId('ready')
  expect(ready).toBeInTheDocument()
})
