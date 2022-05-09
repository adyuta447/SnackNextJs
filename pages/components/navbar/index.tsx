import LinkNav from "../../Atoms/LinkNav";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark container">
      <Link href="/">
        <a className="navbar-brand">
          <Image src="/logonavbar.svg" width={95} height={29} alt="snack" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse text-center-sm"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <LinkNav title="Home" />
          <LinkNav title="Feature" />
          <LinkNav title="Our Works" />
          <LinkNav title="About Us" />
          <LinkNav title="Contact" />
        </ul>
        <a
          href=""
          className="btn btn-warning shadow-sm px-3 ml-0 ml-md-4 rounded-lg"
        >
          Sign In
        </a>
        <a
          href=""
          className="btn btn-outline-light shadow-sm px-3 ml-0 ml-md-4 rounded-lg"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
