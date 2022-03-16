import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Freshchat } from './index'

describe('Freshchat', () => {
  it('should render correctly', () => {
    const rendered = render(<Freshchat token='fake-api-token' />)
    expect(rendered.container.firstChild).toBeNull()
  })

  it('should render with label', () => {
    const rendered = render(
      <Freshchat
        token='fake-api-token'
        label='Label text'
        config={undefined}
        host='fake-host'
      />
    )

    expect(rendered.getByText('Label text')).toBeInTheDocument()
  })

  it('it should render with label and custom styles', () => {
    const rendered = render(
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

    expect(rendered.getByText('Label text')).toBeInTheDocument()
  })

  it('should be able to toggle render when click in the component', () => {
    const rendered = render(
      <Freshchat
        token='fake-api-token'
        label='Label text'
        config={{}}
        host='fake-host'
      />
    )

    const button = rendered.container.querySelector('#btn-widget')
    button && userEvent.click(button)

    expect(rendered.container.firstChild).toBeNull()
  })
})
