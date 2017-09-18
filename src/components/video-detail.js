import React from 'react';

export default class VideoDetail extends React.Component{
  render(){

  if(!this.props.selectedVideo){
    return <div>Loading....</div>
  }

  const embedUrl='https://www.youtube.com/embed/'+this.props.selectedVideo.id.videoId;

    return(
        <div className='video-detail col-lg-8'>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src={embedUrl} className="embed-responsive-item"></iframe>
          </div>
          <div className='details'>
            <div className='videoDetailTitle'>{this.props.selectedVideo.snippet.title}</div>
            <div>{this.props.selectedVideo.snippet.description}</div>
          </div>
        </div>
    )
  }
}
