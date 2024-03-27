import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailsBookCards() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [bookAddedToRead, setBookAddedToRead] = useState(false);
  const [bookAddedToWishlist, setBookAddedToWishlist] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const foundBook = data.find(
          (bookItem) => bookItem.bookId === parseInt(bookId)
        );
        setBook(foundBook);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchData();
  }, [bookId]);

  const handleRead = () => {
    if (!bookAddedToRead) {
      addToLocalStorage("read", book);
      setBookAddedToRead(true);
      alert("Read book added to the ls successfully!");
    } else {
      alert("book already added to the Ls!");
    }
  };

  const handleWishlist = () => {
    if (!bookAddedToWishlist) {
      if (!bookAddedToRead) {
        addToLocalStorage("wishlist", book);
        setBookAddedToWishlist(true);
        alert(" wishlist added to the ls successfully!");
      } else {
        alert("book already added to the Read! Cannot add to Wishlist.");
      }
    } else {
      alert("Book already added to Wishlist!");
    }
  };

  const addToLocalStorage = (key, book) => {
    const items = JSON.parse(localStorage.getItem(key)) || [];
    items.push(book);
    localStorage.setItem(key, JSON.stringify(items));
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-5 justify-between work-sans mt-8 items-center">
        <div>
          <img src={book?.image} alt="BookImage" className="w-full h-full" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{book?.bookName}</h2>
          <h3>By: {book?.author}</h3>
          <h4 className="border-y py-3">{book?.category}</h4>
          <p className=" mt-3">
            <span className="font-semibold">Review:</span> {book?.review}
          </p>
          <div className="space-x-3 mt-2">
            <span className="font-semibold">Tags</span>
            <div className="badge badge-outline bg-gray-100   text-[#23BE0A]">
              #{book.tags[0]}
            </div>
            <div className="badge badge-outline bg-gray-100 text-[#23BE0A]  ">
              #{book.tags[1]}
            </div>
          </div>
          <div className="divider"></div>
          <div className="space-y-3">
            <h4>
              Number of Pages:
              <span className="font-semibold">{book?.totalPages}</span>{" "}
            </h4>
            <h4>
              Publisher:
              <span className="font-semibold">{book?.publisher}</span>
            </h4>
            <h4>
              Year of Publishing:
              <span className="font-semibold">{book?.yearOfPublishing}</span>
            </h4>
            <h4>
              Rating: <span className="font-semibold">{book?.rating}</span>
            </h4>
          </div>
          <div className="card-actions">
            <button onClick={handleRead} className="btn btn-outline px-8">
              Read
            </button>
            <button
              onClick={handleWishlist}
              className="btn bg-[#59C6D2] px-8 text-white font-semibold"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
