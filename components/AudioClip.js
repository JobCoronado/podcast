import React from 'react';
import {Link} from '../routes'
import slug from '../helpers/slug'
const AudioClip = (props) => {
    return (
        <div>
            <Link route='podcast' 
            params={{
                slugChannel: slug(props.audioClip.channel.title),
                idChannel: props.audioClip.channel.id,
                slug:slug(props.audioClip.title),
                id:props.audioClip.id
            }} prefetch >
            <a> {props.audioClip.title}</a>
            </Link>
            <style jsx>{`
             a {
                color:black;
                text-decoration: none;
              }
            `}</style>
        </div>
    );
};

export default AudioClip;