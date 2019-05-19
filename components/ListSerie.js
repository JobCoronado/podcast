import React from 'react';
import Serie from './Serie';

const ListSerie = (props) => {
    return (
            <div className='row' >
                { props.series.map((serie) => (
                   <Serie serie={serie} key={serie.id}/>
                )) }
            </div>
    );
};

export default ListSerie;