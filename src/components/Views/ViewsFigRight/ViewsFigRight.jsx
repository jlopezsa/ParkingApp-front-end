import PropTypes from 'prop-types';
import './ViewsFigRight.scss';

function ViewsFigRight({ title, figure, text }) {
  return (
    <div className="container-view-r">
      <div className="container-view-r__title">
        <p className="container-view-r__title--top">{title}</p>
      </div>
      <div className="container-view-r__figure">
        <img className="right-figure" src={figure} alt="left figure" />
      </div>
      <div className="container-view-r__text">
        <p>{text}</p>
      </div>
    </div>
  );
}

ViewsFigRight.propTypes = {
  title: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ViewsFigRight;
