import fetch from 'isomorphic-fetch'
import Error from 'next/error'

import Header from '../components/Header';
import GridChannel from '../components/GridChannel';

export default class extends React.Component {
  
  static async getInitialProps({ res }) {
    try {
      let req = await fetch('https://api.audioboom.com/channels/recommended')
      if (req.status >= 400) {
        return { channels: null, statusCode: req.status }
      }
      let datachannels = await req.json()
      let channels=datachannels.body;
      return { channels, statusCode: 200 }
    } catch (error) {

      return { channels: null, statusCode: 503 }
    }

  }

  render() {
    const { channels, statusCode } = this.props
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />
    }
    return <Header title='Channels' showBoton={false} >
      

      <GridChannel channels={channels} />

    </Header>
  }
}