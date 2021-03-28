import styled from "styled-components"
import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle"

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #005073;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
`
export const Logo = styled.h1`
  color: #71c7ec;
  text-align: center;
  font-size: 2.5rem;
`
export const Wrapper = styled.div`
  color: #fff;
  text-align: center;
  h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  li {
    font-size: 1.5rem;
    text-align: left;
    margin-top: 1rem;
  }
`

export const WrapperImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const ImageDoctorWoman = styled.img`
  width: min(10rem, 100%);
`
export const ImageDoctorMan = styled.img`
  width: min(18rem, 100%);
`

export const Check = styled(CheckCircle)`
  width: 2rem;
  margin-right: 1rem;
  color: #71c7ec;
`
