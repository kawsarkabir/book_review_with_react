import { useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";

export default function DetailsBookCards() {
  const allBooks = useLoaderData();
  const { bookId } = useParams();
  const book = allBooks.find((bookItem) => bookItem.bookId == bookId);

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
            {" "}
            <span className="font-semibold">Review:</span> {book?.review}
          </p>
          <div className="space-x-3 mt-2">
            <span className="font-semibold">Tags</span>
            <div className="badge badge-outline   text-[#23BE0A]">
              #{book.tags[0]}
            </div>
            <div className="badge badge-outline text-[#23BE0A]  ">
              #{book.tags[1]}
            </div>
          </div>
          <div className="divider"></div>
          <div className="space-y-3">
            <h4>
              Number of Pages:{" "}
              <span className="font-semibold">{book?.totalPages}</span>{" "}
            </h4>
            <h4>
              Publisher:{" "}
              <span className="font-semibold">{book?.publisher}</span>
            </h4>
            <h4>
              Year of Publishing:{" "}
              <span className="font-semibold">{book?.yearOfPublishing}</span>
            </h4>
            <h4>
              Rating: <span className="font-semibold">{book?.rating}</span>
            </h4>
          </div>
          <div className="card-actions">
            <button className="btn btn-outline px-8">Read</button>
            <button className="btn bg-[#59C6D2] px-8 text-white font-semibold">Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}
