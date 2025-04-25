import { Link } from "react-router-dom";
import LoginFormModal from "./LoginFormModal";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-success" href="#">EAT HEALTHY +</a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-black" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-black" to="/eathealthy">Eat Healthy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-black" to="/resource">Resources</Link>
              </li>
            </ul>

            {/* Trigger the modal */}
            <button
              type="button"
              className="btn border-success text-success ms-3"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <LoginFormModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
