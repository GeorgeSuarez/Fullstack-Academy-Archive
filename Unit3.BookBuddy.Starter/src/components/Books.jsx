import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
export default function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch(
                    "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books",
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                const result = await response.json();
                console.log(result);
                setBooks(result.books);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBooks();
    }, []);
    console.log("Books: ", books);
    return (
        <div id="books-container">
            <h2 id="catalog-header">Library Catalog</h2>
            <ul id="library-catalog">
                {books.map((book) => {
                    return((
                        <li key={book.id} className="book-item">{book.title}
                            <Link to={`/books/${book.id}`} className="details-link">
                                See Details
                            </Link>
                        </li>
                    ))
                })}
            </ul>
        </div>
    )
}
