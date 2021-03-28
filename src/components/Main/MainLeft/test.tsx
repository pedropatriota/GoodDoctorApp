import { render, screen } from "@testing-library/react"
import MainLeft from "./index"

describe("testing component MainLeft", () => {
  it("Should render the heading", () => {
    const { container } = render(<MainLeft />)

    expect(
      screen.getByRole("heading", {
        name: /Sistema completo para sua pré e pós consulta/i,
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render corretly the color", () => {
    const { container } = render(<MainLeft />)

    expect(container.firstChild).toHaveStyle({ "background-color": "#005073" })
  })
})
