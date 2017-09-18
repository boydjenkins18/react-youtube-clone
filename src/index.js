import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import YTSearch from 'youtube-api-search';
import Logo from './components/Logo';
import Footer  from './components/Footer';

const apiKey='AIzaSyARyj2Z2EqEfYzde6uYwuQOwr0XPLV5qA0';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo: null
    }

    YTSearch({key:apiKey,term:'Javascript'},(data)=>{
      this.setState({
        videos:data,
        selectedVideo:data[0]
      })
    });

  }

  render(){

    return(
      <div id='container'>
        <Logo />
        <SearchBar onUpdateSearch={this.onUpdateSearch.bind(this)} videos={this.state.videos}/>
        <div className='container'>
          <div className='row'>
            <VideoDetail selectedVideo={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>this.setState({selectedVideo})}/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

onUpdateSearch(e){
  e.preventDefault();
  let input=document.querySelector('input');

    YTSearch({key:apiKey,term:input.value},(data)=>{
          this.setState({
            videos:data,
            selectedVideo:data[0]
          })
    });
  }

}

ReactDOM.render(<App />,document.getElementById('app'));
