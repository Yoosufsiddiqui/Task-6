import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";

const Book = () => {
  const [book, setBook] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        const request = await fetch(
          `https://api.matgargano.com/api/books/${params.id}`
        );
        const response = await request.json();
        setBook(response);
      } catch (e) {
        console.error(e);
      }
    }
    fetchBook();
  }, [params.id]);

  return (
    <Container>
      {book && (
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <img src={book.imageURL} alt="image" />
        </div>
      )}
    </Container>
  );
};

export default Book;
