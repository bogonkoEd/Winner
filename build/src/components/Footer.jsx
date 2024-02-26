
const Footer = () => {
  return (
    <div>
      <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
        <nav>
          <h1 className="text-2xl font-extrabold">PROJECT | LIGHTS</h1>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Get Help</a>
          <a className="link link-hover">Add your store</a>
          <a className="link link-hover">Sign up to deliver</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About PROJECT | LIGHTS</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Jobs</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
