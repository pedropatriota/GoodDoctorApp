import styled from "styled-components"
import { ErrorMessage } from "formik"

export const Container = styled.div`
  width: 40%;
  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 1.5rem;
    label {
      color: #fff;
      font-size: 1.8rem;
    }
    input {
      width: 100%;
      height: 5rem;
      border-radius: 8px;
      border: none;
      margin-top: 0.3rem;
      font-size: 1.6rem;
      padding: 0 1rem;
      color: #444;
    }
    button {
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`
export const Error = styled(ErrorMessage)`
  color: red;
`
