import React from 'react';
import {Link} from '../routes'
import Head from 'next/head'
import NProgress from 'nprogress';
import Router from 'next/router';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

const Header = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className='pt-2'>
    
                    {props.showBoton&&<div className='back mt-2 mt-md-3'>
                        <Link route={props.route} params={props.params}>
                            <a><img src='/static/back.png' className='img-fluid'/>  </a>
                        </Link>
                        
                    </div> }              
                    <Link route='home' params={{}}>
                        <a className='logo'>Podcast</a>
                    </Link>
    
            </header>
            {props.children}

            <style jsx>{`
                        .back{
                            float:left;
                        }
                        header {
                            background:#9400D3; 
                            height:10vh;
                            
                        }
                        
                         .logo{
                            color: white;
                            text-decoration:none;
                            font-size:2em;
                            font-weight: bold;
                            display:flex;
                            justify-content: center;
                        }
           
           `}</style>
           <style jsx global>{`
                    body {
                    margin: 0;
                    font-family: system-ui;
                    background: white;
                    }
                    /* Make clicks pass-through */
                    #nprogress {
                    pointer-events: none;
                    }

                    #nprogress .bar {
                    background: #29d;

                    position: fixed;
                    z-index: 1031;
                    top: 0;
                    left: 0;

                    width: 100%;
                    height: 2px;
                    }

                    /* Fancy blur effect */
                    #nprogress .peg {
                    display: block;
                    position: absolute;
                    right: 0px;
                    width: 100px;
                    height: 100%;
                    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                    opacity: 1.0;

                    -webkit-transform: rotate(3deg) translate(0px, -4px);
                        -ms-transform: rotate(3deg) translate(0px, -4px);
                            transform: rotate(3deg) translate(0px, -4px);
                    }

                    /* Remove these to get rid of the spinner */
                    #nprogress .spinner {
                    display: block;
                    position: fixed;
                    z-index: 1031;
                    top: 15px;
                    right: 15px;
                    }

                    #nprogress .spinner-icon {
                    width: 18px;
                    height: 18px;
                    box-sizing: border-box;

                    border: solid 1px transparent;
                    border-top-color: #29d;
                    border-left-color: #29d;
                    border-radius: 50%;

                    -webkit-animation: nprogress-spinner 400ms linear infinite;
                            animation: nprogress-spinner 400ms linear infinite;
                    }

                    .nprogress-custom-parent {
                    overflow: hidden;
                    position: relative;
                    }

                    .nprogress-custom-parent #nprogress .spinner,
                    .nprogress-custom-parent #nprogress .bar {
                    position: absolute;
                    }

                    @-webkit-keyframes nprogress-spinner {
                    0%   { -webkit-transform: rotate(0deg); }
                    100% { -webkit-transform: rotate(360deg); }
                    }
                    @keyframes nprogress-spinner {
                    0%   { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                    }

                    

                    
                 `}</style>
        </div>
    );
};

export default Header;