import React, {Component} from 'react';
import MusicList from '../components/MusicList';

class MusicBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      music: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () =>{
      if(xhr.status !== 200) return;
      var jsonString = xhr.responseText;
      var data = JSON.parse(jsonString);
      this.setState({
        music: data.feed.entry
      });
    })

    xhr.send();

  }
  render(){
    return (
      <div className="music-box">
        <h1>UK Top 20!</h1>
        <MusicList music={this.state.music}/>
      </div>
    )
  }


}

export default MusicBox;
