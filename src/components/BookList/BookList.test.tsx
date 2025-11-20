import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "./BookList";
import type { IBookItem } from "../BookItem/BookItem";

// Mock BookItem so we test BookList independently
vi.mock("../index.ts", () => ({
  BookItem: ({ title, description, imageUrl }: IBookItem) => (
    <div data-testid="book-item">
      <span data-testid="title">{title}</span>
      <span data-testid="description">{description}</span>
      <span data-testid="imageUrl">{imageUrl}</span>
    </div>
  ),
}));

// Mock getRandomInt so tests are deterministic
vi.mock("../../utils/getRandomInt.ts", () => ({
  getRandomInt: () => 123,
}));

describe("BookList Component", () => {
  const initialBooks: IBookItem[] = [
    {
      title: "Book A",
      description: "Description A",
      imageUrl: "image-A.jpg",
    },
    {
      title: "Book B",
      description: "Description B",
      imageUrl: "image-B.jpg",
    },
  ];

  it("renders the initial list of books", () => {
    render(<BookList bookList={initialBooks} />);

    const items = screen.getAllByTestId("book-item");
    expect(items.length).toBe(2);

    expect(screen.getByText("Book A")).toBeInTheDocument();
    expect(screen.getByText("Book B")).toBeInTheDocument();
  });

  it("adds a new book when the button is clicked", () => {
    render(<BookList bookList={initialBooks} />);

    const button = screen.getByRole("button", { name: /Add new book/i });

    fireEvent.click(button);

    // Now there are 3 items
    const items = screen.getAllByTestId("book-item");
    expect(items.length).toBe(3);

    // Because getRandomInt returns 123 in the mock, we know the expected output
    expect(screen.getByText("New Book Title 123")).toBeInTheDocument();
    expect(
      screen.getByText("Description of the new book. 123"),
    ).toBeInTheDocument();
  });

  it("appends the new book at the end of the list", () => {
    render(<BookList bookList={initialBooks} />);

    const button = screen.getByRole("button", { name: /add new book/i });

    fireEvent.click(button);

    const titles = screen.getAllByTestId("title").map((el) => el.textContent);

    expect(titles).toEqual(["Book A", "Book B", "New Book Title 123"]);
  });
});
