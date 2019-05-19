import React from 'react';
import { Link } from '../routes';
import slug from '../helpers/slug'
const ChannelComponent = (props) => {
    return (
        //el componente link tiene que un hijo de tipo a para que funcione este funciona diferente 
        //como el de react router. 
        // lo que hace link es renderizar solamente lo faltante en este caso es channel 
        //ya que  esta en otra pagina en caso tal querramos que este componente se renderice por adelantado 
        //hacemo el uso de prefetch hay que que tener en cuenta que prefetch solo carga js , html y css
        //pero no precarga getInitialProps.
        //prefetch solo se ejecuta en produccion 
        <Link route='channel'
            params={{
                slug: slug(props.channel.title),
                id: props.channel.id
            }} prefetch>
            <a className="channel col-12 col-sm-6 col-md-4 col-lg-3 text-decoration-none link-unstyled text-dark" >
                <div className="card mb-2">
                    <img className="card-img-top" src={props.channel.urls.logo_image.original} alt={props.channel.title} />
                    <div className="card-body">
                        <h5 className="card-title">{props.channel.title}</h5>
                        <p className="card-text"><small className="text-muted">Actualizado: {props.channel.updated_at}</small></p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default ChannelComponent;


