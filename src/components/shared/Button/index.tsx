import React, { ButtonHTMLAttributes } from "react"

import * as S from "./styles"

interface Props {
  type?: "button" | "submit"
  children: string
  disabled?: boolean
  width?: string
  height?: string
  borderColor?: string
  background?: string
  fontWeight?: string
  color?: string
  margin?: string
  bgHover?: string
  colorHover?: string
  placeholder?: string
}

function Button({ type = "button", children, disabled, ...restProps }: Props) {
  return (
    <S.Button type={type} {...restProps} disabled={disabled}>
      {children}
    </S.Button>
  )
}

export default Button
