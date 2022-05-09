import Image from "next/image";
import LinkFooter from "../../Atoms/LinkFooter";

export default function Footer() {
  return (
    <footer className="container mt-4">
      <div className="row mb-3">
        <div className="col my-2">
          <h5 className="mb-2 font-weight-bold text-uppercase">FEATURE</h5>
          <ul className="list-unstyled">
            <LinkFooter title="Team Management" />
            <LinkFooter title="Tasks Schedule" />
            <LinkFooter title="File Manager" />
          </ul>
        </div>
        <div className="col my-2">
          <h5 className="mb-2 font-weight-bold text-uppercase">Resources</h5>
          <ul className="list-unstyled">
            <LinkFooter title="Blog" />
            <LinkFooter title="Support" />
            <LinkFooter title="Newsletter" />
          </ul>
        </div>
        <div className="col my-2">
          <h5 className="mb-2 font-weight-bold text-uppercase">Community</h5>
          <ul className="list-unstyled">
            <LinkFooter title="Twitter" />
            <LinkFooter title="Instagram" />
            <LinkFooter title="Facebook" />
            <LinkFooter title="Youtube" />
          </ul>
        </div>
        <div className="col my-2">
          <h5 className="mb-2 font-weight-bold text-uppercase">Support</h5>
          <ul className="list-unstyled">
            <LinkFooter title="My Account" />
            <LinkFooter title="Help & Support" />
            <LinkFooter title="Contact Us" />
          </ul>
        </div>
        <div className="col my-2">
          <h5 className="mb-2 font-weight-bold text-uppercase">Company</h5>
          <ul className="list-unstyled">
            <LinkFooter title="Privacy Policy" />
            <LinkFooter title="Terms of Service" />
            <LinkFooter title="Code of Conduct" />
          </ul>
        </div>
      </div>
      <div className="text-center-sm">
        <div className="row">
          <div className="col-sm-6 my-2 px-0">
            <a href="">
              <Image src="/logofooter.svg" width={95} height={29} alt="logo" />
            </a>
          </div>
          <div className="col-sm-6 my-2">
            <p className="text-muted text-center-sm float-right">
              Copyright 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
