import React from 'react'
import { render } from '@testing-library/react'
import { Freshchat } from './index'

describe('Freshchat', () => {
  it('should render correctly', () => {
    const rendred = render(<Freshchat token='fake-api-token' />)
    expect(rendred.container.firstChild).toBeNull()
  })

  it('should render with label', () => {
    const rendred = render(
      <Freshchat
        token='fake-api-token'
        label='Label text'
        config={{}}
        host='fake-host'
      />
    )

    expect(rendred.getByText('Label text')).toBeInTheDocument()
  })

  it('it should render with label and custom styles', () => {
    const rendred = render(
      <Freshchat
        token='fake-api-token'
        label='Label text'
        config={{}}
        host={undefined}
        ic_styles={{
          backgroundColor: '#002d85',
          color: '#ffffff'
        }}
      />
    )

    expect(rendred.getByText('Label text')).toBeInTheDocument()
  })
})
