import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-5xl text-center mt-24">
      <h1 className="">Oops!!!!!!!!!!!</h1>
      <Link to='/' className="btn btn-accent text-2xl">Go Back</Link>
    </div>
  );
}

export default Error