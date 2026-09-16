import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
export default function SingleBook() {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        async function fetchSingleBook(bookId) {
            try {
                const response = await fetch(
                    `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );

                const result = await response.json();
                setBook(result.book);
                console.log(result.book);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSingleBook(id);
    }, [id]);

    console.log("Book: ", book);

    return (
        <div className="single-book-container">
            <h2>Book Details</h2>
            <p>
                <span>ID: </span>{book.id}
            </p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <p>Availability: {book.available ? "Available" : "Checked Out"}</p>
            <img src={book.coverimage} alt={book.title} />
        </div>
    );
}
