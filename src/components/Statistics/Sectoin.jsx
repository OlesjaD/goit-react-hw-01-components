import PropTypes from 'prop-types';
import css from './Statistics.module.css';


function Section ({title, children}) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}
export default Section;