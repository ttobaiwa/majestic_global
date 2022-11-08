export default function Nav() {
  return (
    <nav
      id="navScroll"
      class="navbar navbar-expand-lg navbar-light fixed-top"
      tabindex="0"
    >
      <div class="container">
        <a class="navbar-brand pe-4 fs-4" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-layers-half"
            viewbox="0 0 16 16"
          >
            <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
          </svg>
          <span class="ms-1 fw-bolder">Stride</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#services"
                aria-label="Brings you to the frontpage"
              >
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutus">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#numbers">
                Numbers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#workwithus">
                Work with us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
          </ul>
          <a
            href="https://templatedeck.com"
            data-splitbee-event="Click Download"
            aria-label="Download this template"
            class="link-dark pb-1 link-fancy me-2"
          >
            Download this Template{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-download ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}