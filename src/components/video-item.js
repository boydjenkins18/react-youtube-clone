import React from 'react';

export default class VideoItem extends React.Component{
  render(){
    return(
      <li onClick={()=>this.props.onVideoSelect(this.props.video)} className='list-group-item'>
          <div className='video-list media'>
            <div className='media-left'>
              <img className='media-object' src={this.props.videos.thumbnails.default.url} alt='Youtube Video'/>
            </div>
            <div className='media-body'>
              <div className='media-heading'>{this.props.videos.title}</div>
            </div>
          </div>
      </li>
    )
  }
}
