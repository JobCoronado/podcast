import React, { Component } from 'react';
import ListAudiocClip from '../components/ListAudiocClip';
import Header from '../components/Header';
import ListSerie from '../components/ListSerie';
import Error from 'next/error'
import fetch from 'isomorphic-fetch'
class Channel extends Component {

    static async getInitialProps({ query, res }) {
        let idChannel = query.id
    
        try {
          let [reqChannel, reqSeries, reqAudios] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
          ])
    
          if( reqChannel.status >= 400 ) {
           
            return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
          }
    
          let dataChannel = await reqChannel.json()
          let channel = dataChannel.body.channel
    
          let dataAudios = await reqAudios.json()
          let audioClips = dataAudios.body.audio_clips
    
          let dataSeries = await reqSeries.json()
          let series = dataSeries.body.channels
    
          return { channel, audioClips, series, statusCode: 200 }
        } catch(e) {
          return { channel: null, audioClips: null, series: null, statusCode: 503 }
        }
      }

    render() {
        let { channel, audioClips, series,statusCode } = this.props
        if(statusCode!==200){
            return <Error statusCode={statusCode} />
          }
        return (
            <Header title={channel.title} showBoton={true} route='home' params={{}} >
                <div className='border-bottom border-dark'>
                    <img src={channel.urls.banner_image.original} alt={channel.title}></img>
                </div>
                <div >
                    <div className='container-fluid mt-3'>

                        <div className='row'>
                            {series.length != 0 ?
                                <div className='col-12 col-lg-8'>
                                    <h2 className='mb-3'>Series</h2>
                                    <ListSerie series={series} />
                                </div> : null}

                            {audioClips.length != 0 ?
                                <div className={series.length != 0 ? 'col-12 col-lg-4' : 'col-12 col-lg-8 offset-lg-2'}>
                                    <h2 className='mb-3'>Ultimos Podcasts</h2>
                                    <ListAudiocClip audioClips={audioClips} />
                                </div>
                                : null}

                        </div>

                    </div>
                </div>

                <style jsx>{`
                
                img{
                    width:100%;
                    heigth:30vh;
                    
                }
                `}</style>
                
            </Header>
        );
    }
}

export default Channel;