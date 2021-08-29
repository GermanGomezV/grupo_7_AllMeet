import React from "react";
import PropTypes from 'prop-types';

function GenresInDb(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{props.quantity}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

GenresInDb.defaultProps = {
  title: 'No Title'
}

/* PROPTYPES */

GenresInDb.propTypes = {
  atritutes: PropTypes.shape({
      title: PropTypes.string.isRequired
  })
}

export default GenresInDb;
