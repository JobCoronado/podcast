import React from 'react';
import Channel from '../components/ChannelComponent';
const GridChannel = (props) => {
    return (
        <div className='container mt-3 mb-3' >
            <div className="row ">
                { props.channels.map((channel) => (
                
                    <Channel channel={channel}  key={channel.id } />
                )) }
            </div>
      </div>
    );
};

export default GridChannel;