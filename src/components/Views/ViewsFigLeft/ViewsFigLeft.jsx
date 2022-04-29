import PropTypes from 'prop-types';
import './ViewsFigLeft.scss';

function ViewsFigLeft({ title, figure, text }) {
  return (
    <div className="container-view">
      <div className="container-view__title">
        <p className="container-view__title--top">{title}</p>
      </div>
      <div className="container-view__figure">
        <img className="left-figure" src={figure} alt="left figure" />
      </div>
      <div className="container-view__text">
        <p>{text}</p>
      </div>
    </div>
  );
}

ViewsFigLeft.propTypes = {
  title: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ViewsFigLeft;
