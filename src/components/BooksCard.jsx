import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BooksCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-16">
      <h2 className="text-5xl font-bold text-center">Books</h2>

      <div className="grid grid-cols-3 gap-10 mb-10">
        {data.map((book, idx) => {
          return (
            <div key={idx}>
              <Link to={`detailsBookCards/${book.bookId}`}>
                <div className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={book.image} alt="Shoes" className="rounded-xl" />
                  </figure>
                  
                  <div className="card-body">
                  <div className="flex gap-x-3">
                    <button className="bg-gray-100 font-semibold text-lg text-[#23BE0A] px-4 rounded-full">
                      {book.tags[0]}
                    </button>
                    <button className="bg-gray-100 font-semibold text-lg text-[#23BE0A] px-4 rounded-full">
                      {book.tags[1]}
                    </button>
                  </div>
                    <h2 className="card-title my-2">{book.bookName}</h2>
                    <p className="work-sans opacity-70 font-medium">
                      By: {book.author}
                    </p>
                    <div className="divider"></div>
                    <div className="flex justify-between text-xl">
                      <p>Fiction</p>
                      <span className="flex items-center gap-2">
                        {book.rating}
                        <CiStar></CiStar>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksCard;
