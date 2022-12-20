import css from './NotFound.module.css'

const NotFound = () => {
  return (
    <div>
      <h6 className={css.NotFound}>404</h6>
      <span className={css.NotFoundText}>We are sorry... Something goes wrong</span>
    </div>
  );
};

export default NotFound;
