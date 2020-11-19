import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor (){
    super ();
    this.state = {
      errors: [],
      user: null, 
      settings: {
        bitrate: 8, 
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleClick2 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
    console.log (this.state.settings)
  }
  

render () {
  return (
    <div>
      <button className='bitrate' onClick={this.handleClick}>bitrate: {this.state.settings.bitrate}</button>
      <button className='resolution' onClick={this.handleClick2}>resolution: {this.state.settings.video.resolution}</button>
    </div>
  )
}

}

export default YouTubeDebugger;
