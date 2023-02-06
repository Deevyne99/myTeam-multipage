import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Client from './Clients'

test('Header to be in component', () => {
  render(
    <MemoryRouter>
      <Client />
    </MemoryRouter>
  )
  const client = screen.getByTestId('clients')
  expect(client).toBeInTheDocument()
})
