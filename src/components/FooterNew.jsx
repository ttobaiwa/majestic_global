export default function FooterNew() {
  return (
    <footer>
      <div className="container small border-top">
        <div className="row py-5 d-flex justify-content-between">
          <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-layers-half"
              viewbox="0 0 16 16"
            >
              <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
            </svg>
            <address className="text-secondary mt-3">
              <strong>Stride, Inc.</strong>
              <br />
              1355 Market St, Suite 900
              <br />
              San Francisco, CA 94103
              <br />
              <abbr title="Phone">P:</abbr>
              (123) 456-7890
            </address>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
            <h3 className="h6 mb-3">Company</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link link-secondary ps-0"
                  aria-current="page"
                  href="#"
                >
                  Lorem ipsum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary ps-0" href="#">
                  Dolor sitam est
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary ps-0" href="#">
                  Sed odio cras
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary ps-0" href="#">
                  Commodo tortor ac
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
            <h3 className="h6 mb-3">Products</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link link-secondary ps-0"
                  aria-current="page"
                  href="#"
                >
                  Fusce dapibus est
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary ps-0" href="#">
                  Donec sed dui
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary ps-0" href="#">
                  Tortor mauris
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary ps-0" href="#">
                  Ut fermentum massa
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link link-secondary ps-0" href="#">
                  Magna mollis
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 p-5">
            <h3 className="h6 mb-3">Subpages</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link link-secondary ps-0"
                  aria-current="page"
                  href="404.html"
                >
                  404 System Page
                </a>
                <a
                  className="nav-link link-secondary ps-0"
                  aria-current="page"
                  href="register.html"
                >
                  Register System Page
                </a>
                <a
                  className="nav-link link-secondary ps-0"
                  aria-current="page"
                  href="content.html"
                >
                  Simple Text Content Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container text-center py-3 small">
        Made by{" "}
        <a
          href="https://templatedeck.com"
          className="link-fancy"
          target="_blank"
        >
          templatedeck.com
        </a>
      </div>
    </footer>
  );
}
