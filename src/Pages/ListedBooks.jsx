import { Link } from "react-router-dom";

export default function ListedBooks() {
  const readItems = JSON.parse(localStorage.getItem("read"));
  console.log(readItems);
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist"));
  console.log(wishlistItems);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-8 bg-gray-100 rounded-xl my-4 text-center w-full text-2xl font-bold work-sans">
          Books
        </h1>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-8 bg-[#23BE0A] text-white font-semibold work-sans"
          >
            Sort by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a> Number of pages</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tab list here */}
      <div role="tablist" className="tabs tabs-lifted mb-20">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 p-6"
        >
          {readItems?.map((item) => (
            <div
              key={item?.bookId}
              className="card card-side border rounded-lg my-6 px-5"
            >
              <figure>
                <img
                  src={item?.image}
                  className="w-52 rounded-xl h-52"
                  alt="Movie"
                />
              </figure>
              <div className="card-body work-sans">
                <h2 className="card-title">{item.bookName}</h2>
                <p>By: {item.author}</p>
                <div className="space-x-3 mt-2 flex items-center">
                  <span className="font-semibold">Tags</span>
                  <div className="badge   bg-gray-100   text-[#23BE0A]">
                    #{item.tags[0]}
                  </div>
                  <div className="badge   bg-gray-100 text-[#23BE0A]  ">
                    #{item.tags[1]}
                  </div>
                  <div>
                    Year of Publishing:
                    {item.yearOfPublishing}
                  </div>
                </div>
                <div className="flex items-center gap-x-4 border-b pb-2">
                  <h4>Publisher: {item?.publisher}</h4>
                  <h4>Pages: {item?.totalPages}</h4>
                </div>
                <div className="flex items-center gap-x-3">
                  <span className="badge bg-gray-200 text-[#1518f3] opacity-80 mt-2 py-4 px-4">
                    Category: {item.category}
                  </span>
                  <span className="badge bg-gray-200 text-[#1518f3] opacity-80 mt-2 py-4 px-4">
                    Rating: {item.rating}
                  </span>
                  <Link to={`/detailsBookCards/${item.bookId}`}>
                    <span className="badge bg-[#23BE0A] text-white opacity-80 mt-2 py-4 px-4">
                      View Details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {wishlistItems?.map((item) => (
            <div
              key={item?.bookId}
              className="card card-side border rounded-lg my-6 px-5"
            >
              <figure>
                <img
                  src={item?.image}
                  className="w-52 rounded-xl h-52"
                  alt="Movie"
                />
              </figure>
              <div className="card-body work-sans">
                <h2 className="card-title">{item.bookName}</h2>
                <p>By: {item.author}</p>
                <div className="space-x-3 mt-2 flex items-center">
                  <span className="font-semibold">Tags</span>
                  <div className="badge   bg-gray-100   text-[#23BE0A]">
                    #{item.tags[0]}
                  </div>
                  <div className="badge   bg-gray-100 text-[#23BE0A]  ">
                    #{item.tags[1]}
                  </div>
                  <div>
                    Year of Publishing:
                    {item.yearOfPublishing}
                  </div>
                </div>
                <div className="flex items-center gap-x-4 border-b pb-2">
                  <h4>Publisher: {item?.publisher}</h4>
                  <h4>Pages: {item?.totalPages}</h4>
                </div>
                <div className="flex items-center gap-x-3">
                  <span className="badge bg-gray-200 text-[#1518f3] opacity-80 mt-2 py-4 px-4">
                    Category: {item.category}
                  </span>
                  <span className="badge bg-gray-200 text-[#1518f3] opacity-80 mt-2 py-4 px-4">
                    Rating: {item.rating}
                  </span>
                  <Link to={`/detailsBookCards/${item.bookId}`}>
                    <span className="badge bg-[#23BE0A] text-white opacity-80 mt-2 py-4 px-4">
                      View Details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
