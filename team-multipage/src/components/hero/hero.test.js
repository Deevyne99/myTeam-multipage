import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomeHero from './HomeHero'

test('TO CHECK IF HEADER IS RENDERED', () => {
  render(
    <MemoryRouter>
      <HomeHero />
    </MemoryRouter>
  )
  const titleElm = screen.getByTestId('intro')
  expect(titleElm).toBeInTheDocument()
})
