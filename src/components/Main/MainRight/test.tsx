import { render, screen } from "@testing-library/react"
import MainRight from "./index"

describe("testing component MainRight", () => {
  it("Should render the heading", () => {
    const { container } = render(<MainRight />)

    expect(
      screen.getByRole("heading", { name: /Right Side/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render corretly the color", () => {
    const { container } = render(<MainRight />)

    expect(container.firstChild).toHaveStyle({ "background-color": "#bae1ff" })
  })
})
