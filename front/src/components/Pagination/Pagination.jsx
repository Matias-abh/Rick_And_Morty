
import css from './pagination.module.css';

const Pagination = ( {prev, next, prevPage, nextPage} ) => {
    

    return (
        <>
            <div className={css.container}>
                {prev ? (<button onClick={prevPage} className={css.container__btns}>Prev</button>) : null}
                {next ? (<button onClick={nextPage} className={css.container__btns}>Next</button>) : null}                
            </div>
        </>
    )
};

export default Pagination;
