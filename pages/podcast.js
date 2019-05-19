    import React, { Component } from 'react';
    import Header from '../components/Header';
    import fetch from 'isomorphic-fetch';
    import slug from '../helpers/slug'
    class Podcast extends Component {
        static async getInitialProps({query}) {
            let idAudio=query.id
            console.log(idAudio)
            let reqAudio= await fetch(`https://api.audioboom.com/audio_clips/${idAudio}.mp3`)
            let dataClips= await reqAudio.json()
            let audioClip=dataClips.body.audio_clip
            return {audioClip}
        }

        render() {
            let {audioClip}=this.props;
           
            return (
                <Header title={audioClip.title} showBoton={true} route='channel' params={{slug: slug(audioClip.channel.title),
                    id: audioClip.channel.id}}>
                    <div className="container-podcast">
                    

                        <div className="section-cover">

                            <div className="image-container">
                                <img className="cover" src={audioClip.channel.urls.logo_image.original||audioClip.urls.image} />
                            </div>
                        </div>

                        <div className="section-media">
                            <h5>{audioClip.title.substring(0,35)}</h5>
                            <h6>{audioClip.channel.title}</h6>
                            <audio
                                src={audioClip.urls.high_mp3}
                                title="Audioboom player"
                                controls
                                type='text/html'
                                autoPlay ></audio>
                        </div>
                    </div>
                    <style jsx>{`
                        
                        .section-cover{
                            height: 60vh;
                            background: #BA55D3;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding-left:20px;
                            padding-right: 20px;
                            
                        }
                        .cover{
                            max-width: 400px;
                            width: 100%;
                            
                        }
                        .image-container{
                            margin: 0 auto;
                        }
                        
                        .section-media{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            background:#9400D3;
                            height: 30vh;
                            font-size: 16px;
                        }
                        
                        h5,h6{
                            color: white;
                            margin: 5px;
                            
                        }
                        audio{
                            margin-top:20px; 
                        }
                        
                        
                            `}</style>
                    <style jsx global>{`
                    body {
                    margin: 0;
                    font-family: system-ui;
                    background: white;
                    }
                    `}</style>
                </Header>
            );
        }
    }

    export default Podcast;