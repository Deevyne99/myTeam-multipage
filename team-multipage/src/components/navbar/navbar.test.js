import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'
test('TO CHECK IF HEADER IS RENDERED', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  const titleElm = screen.getByTestId('header')
  expect(titleElm).toBeInTheDocument()
})
