import { getAllByTestId, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Testimonial from './Testimonial'

test('it should have title', () => {
  render(
    <MemoryRouter>
      <Testimonial />
    </MemoryRouter>
  )
  const message = screen.getByTestId('text')
  expect(message).toBeInTheDocument()
})

test('describes the length of the testimonies', () => {
  render(
    <MemoryRouter>
      <Testimonial />
    </MemoryRouter>
  )
  const testimony = screen.getAllByTestId('testimony')
  expect(testimony).toHaveLength(3)
})
