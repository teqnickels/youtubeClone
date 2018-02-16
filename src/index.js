import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Footer from './components/footer';

const API_KEY = 'AIzaSyB5mrokL2AZqj5ACIC7ORui26TTUW-klcs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('React For Beginners');
  };

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term
    }, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <header className="header">
          <SearchBar onSearchTermChange={videoSearch}/>
        </header>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'));