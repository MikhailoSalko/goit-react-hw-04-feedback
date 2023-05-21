import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
