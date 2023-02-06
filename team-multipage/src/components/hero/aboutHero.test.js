import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import AboutHero from './AboutHero'

test('Header to be in component', () => {
  render(
    <MemoryRouter>
      <AboutHero />
    </MemoryRouter>
  )
  const client = screen.getByTestId('data')
  expect(client).toBeInTheDocument()
})
