import React from 'react';
import VideoItem from './video-item';

export default class VideoList extends React.Component{
  render(){
    const videoItemLists=this.props.videos.map(data=>{
      return <VideoItem key={data.etag} videos={data.snippet} video={data} onVideoSelect={this.props.onVideoSelect.bind(this)}/>
    })
    return(
        <ul className='col-lg-4 list-group'>
          {videoItemLists}
        </ul>
    );
  }
}
