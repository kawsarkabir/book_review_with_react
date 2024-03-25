

const Banner = () => {
  return (
    <div className="hero min-h-[calc(100vh-250px)] rounded-md bg-base-200 mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/QC9Jk36N/1994.jpg"
          className="  rounded-lg shadow-2xl w-72"
        />
        <div>
          <h1 className="text-5xl font-bold mr-36">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white text-xl mt-6">View The List</button>
        </div>
      </div>
    </div>
  );
}

export default Banner