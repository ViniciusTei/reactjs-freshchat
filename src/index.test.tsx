import React from 'react'
import { render } from '@testing-library/react'
import { Freshchat } from './index'

describe('Freshchat', () => {
  it('should render correctly', () => {
    expect(<Freshchat token='fake-api-token' />).toBeTruthy()
  })

  it('should render with label', () => {
    const rendred = render(
      <Freshchat token='fake-api-token' label='Label text' />
    )

    expect(rendred.getByText('Label text')).toBeInTheDocument()
  })
})
