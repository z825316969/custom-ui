import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultProps = {
  onClick: jest.fn(),
}

const testProps: ButtonProps = {
  size: ButtonSize.Larger,
  btnType: ButtonType.Primary,
  className: 'lala',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test button component', () => {
  it('should render then current default button', () => {
    const wrapper = render(<Button {...defaultProps}>123</Button>)
    const ele = wrapper.getByText('123') as HTMLButtonElement
    expect(ele).toBeInTheDocument()
    expect(ele?.tagName).toEqual('BUTTON')
    expect(ele.disabled).toBeFalsy()
    expect(ele).toHaveClass('btn btn-default')
    fireEvent.click(ele)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>class</Button>)
    const ele = wrapper.getByText('class')
    expect(ele).toBeInTheDocument()
    expect(ele).toHaveClass('btn-primary btn-lg lala')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link}>123</Button>)
    const ele = wrapper.getByText('123')
    expect(ele).toBeInTheDocument()
    expect(ele?.tagName).toEqual('A')
    expect(ele).toHaveClass('btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>disabled</Button>)
    const ele = wrapper.getByText('disabled') as HTMLButtonElement
    expect(ele).toBeInTheDocument()
    expect(ele?.tagName).toEqual('BUTTON')
    expect(ele.disabled).toBeTruthy()
  })
})
