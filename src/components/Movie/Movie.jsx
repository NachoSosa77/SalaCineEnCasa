import React, { useState } from "react";
import { Modal, show } from "react-bootstrap";
const API_IMG = "https://image.tmdb.org/t/p/w500";

const Movie = ({
  id,
  title,
  poster_path,
  popularity,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="col">
      <div className="card mb-3" style={{ width: "19rem" }}>
        <img
          src={API_IMG + poster_path}
          className="card-img-top"
          alt={poster_path}
        />
        <div className="card-body d-flex justify-content-between">
          <h6 className="card-title">{title}</h6>
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            Ver Más...
          </button>

          {/* Modal */}
          <Modal className="modal" show={show} onHide={handleClose}>
            <Modal.Header className="modal-header">
              <Modal.Title>
                <h5 className="modal-title">{title}</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body d-flex justify-content-between mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={API_IMG + poster_path}
                  className="card-img-top"
                  alt={poster_path}
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <h6 className="p-2 d-flex justify-content-start">
                  Lanzamiento: {release_date}
                </h6>
                <h5 className="p-2">Info:</h5>
                <p className="card-text-center p-2">{overview}</p>
              </div>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
              <div className="d-flex aling-baseline"><h4>Rate: {vote_average}</h4><span className="fa fa-star orange"></span></div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cerrar
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Movie;
