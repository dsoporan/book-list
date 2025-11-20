import { render, screen, fireEvent } from "@testing-library/react";
import BookItem from "./BookItem";

describe("BookItem Component", () => {
  it("toggles description visibility", () => {
    render(
      <BookItem
        title="Test Book"
        description="This is a test description."
        imageUrl="https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX329_BO1,204,203,200_.jpg"
      />,
    );

    expect(screen.queryByText(/Test Book/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/This is a test description/i),
    ).toBeInTheDocument();
    const button = screen.getByRole("button", { name: /Description toggle button/i });
    fireEvent.click(button);

    expect(screen.queryByText(/This is a test description/i)).toBeNull();
  });

  it("renders an image (or fallback image) correctly", () => {
    const testUrl = "https://example.com/test-image.jpg";

    render(
      <BookItem
        title="Image Book"
        description="A book with a valid image."
        imageUrl={testUrl}
      />,
    );

    const img = screen.getByRole("img", { name: /Image Book cover/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", testUrl);
  });

  it("renders the fallback image when no image URL is provided", () => {
    const FALLBACK_IMAGE =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

    render(
      <BookItem title="No Image Book" description="Book without an image." />,
    );

    const img = screen.getByRole("img", { name: /No image available/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", FALLBACK_IMAGE);
  });
});
