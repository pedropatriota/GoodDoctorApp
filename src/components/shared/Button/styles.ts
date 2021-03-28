import styled from "styled-components"
import { StyledProps } from "styled-components"

type Props = StyledProps<{
  width?: string
  height?: string
  borderColor?: string
  background?: string
  fontWeight?: string
  color?: string
  margin?: string
  bgHover?: string
  colorHover?: string
}>

export const Button = styled.button`
  width: ${({ width }: Props) => width || "180px"};
  height: ${({ height }) => height || "42px"};
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor || "#009cdd"};
  border-radius: 3px;
  background-color: ${({ background }) => background || "#009cdd"};
  font-size: 15px !important;
  color: ${({ color }) => color || "#fff"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"} !important;
  margin: ${({ margin }) => margin || 0};
  transition: background-color 0.4s;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    cursor: not-allowed !important;
    background: #ccc;
    color: #fff;
    border-color: #ccc;
    &:hover {
      background: #ccc;
      color: #fff;
      border-color: #ccc;
    }
  }
  &:hover {
    background: ${({ bgHover }) => bgHover || "#009cdd"};
    color: ${({ colorHover }) => colorHover || "#fff"};
  }
`
