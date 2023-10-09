import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="h-[100vh]">
        <div className="container">
          <h1>Page Not Found</h1>
          <br />
          <Link to={"/"} className="bg-primary p-2 text-white rounded-xl mt-10">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
