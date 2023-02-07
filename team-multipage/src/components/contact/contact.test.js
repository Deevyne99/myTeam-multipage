import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

test('Header to be in component', () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  )
  const client = screen.getByTestId('text-header')
  expect(client).toBeInTheDocument()
})
