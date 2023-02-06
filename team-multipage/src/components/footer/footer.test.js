import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

test('Header to be in component', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
  const client = screen.getByTestId('logo')
  expect(client).toBeInTheDocument()
})
