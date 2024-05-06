import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

const LAYOUT_COMPONENT = 'Layout component'
const HOME_COMPONENT = 'Home component'

// Mock components used in the routes
jest.mock('./components/Layout', () => () => LAYOUT_COMPONENT)


describe('App component', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )

  it('renders Layout component for the "/" route', () => {
    expect(container.innerHTML).toContain(LAYOUT_COMPONENT)
  })
})

// jest.mock('./components/Home', () => () => HOME_COMPONENT)
// describe('App component', () => {
//   const { container } = render(
//     <MemoryRouter initialEntries={['/']}>
//       <App />
//     </MemoryRouter>
//   )
//     it('renders Home component for the "/" route', () => {
//       const { container } = render(
//         <MemoryRouter initialEntries={['/']}>
//           <App />
//         </MemoryRouter>
//       )
//       expect(container.innerHTML).toContain(HOME_COMPONENT)
//     })
// })
