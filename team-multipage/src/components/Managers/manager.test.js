import { getAllByTestId, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Manager from './Manager'

test('describes the  number of data', () => {
  render(
    <MemoryRouter>
      <Manager />
    </MemoryRouter>
  )
  const data = screen.getAllByTestId('data')
  expect(data).toHaveLength(3)
})
