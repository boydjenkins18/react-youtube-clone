import React from 'react';

export default class Logo extends React.Component{
  render(){
    return(
      <div>
          <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/05/youtube-high-resolution-logo-download.png" className="hidden-xs youtubeImg"alt="Youtube"/>
          <img src="http://alumni.ucd.ie/awards/wp-content/uploads/sites/3/2017/03/play.png" className="visible-xs youtubeImgPlay"alt="Youtube"/>
      </div>
    )
  }
}
