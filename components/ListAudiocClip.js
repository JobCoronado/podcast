import React from 'react';
import AudioClip from './AudioClip';

const ListAudiocClip = (props) => {

    return (
        <div>
            <div className="list-group" >
                {
                    props.audioClips.map(clip => (

                        <div className="list-group-item list-group-item-action mb-3" key={clip.id}>
                            <AudioClip audioClip={clip} />
                        </div>

                    ))
                }
            </div>
            <style>{`
                    .list-group{
                        padding:0;
                    }
                `}</style>
        </div>
    );
};

export default ListAudiocClip;