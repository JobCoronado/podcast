import React from 'react';
import { Link } from '../routes';
import slug from '../helpers/slug'
const Serie = (props) => {
    return (
        <Link route='channel' params={{ 
            slug: slug(props.serie.title), 
            id: props.serie.id }} prefetch>
                <a className="col-12 col-md-6 col-lg-3 text-decoration-none link-unstyled text-dark" >
                <div className="card mb-2">
                    <img className="card-img-top" src={props.serie.urls.logo_image.original} alt={props.serie.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{props.serie.title}</h5>
                        </div>
                </div>
                </a>
            </Link>
    );
};

export default Serie;