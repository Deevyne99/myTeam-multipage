import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Director from './Director'

test('Header to be in component', () => {
  render(
    <MemoryRouter>
      <Director />
    </MemoryRouter>
  )
  const client = screen.getByTestId('meet')
  expect(client).toBeInTheDocument()
})
