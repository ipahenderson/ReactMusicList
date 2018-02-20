import React, {Component} from 'react';
import Song from './Song';

class MusicList extends Component {

  render(){
    const songNodes = this.props.music.map((song, index) => {
      return (
        <Song title={song["im:name"]["label"]} position={index + 1} artist={song["im:artist"]["label"]} image={song["im:image"][0]["label"]} key={index} value={index}>

        </Song>
      )
      console.log(this.props);
    })

    return <div className="music-list"> {songNodes}</div>
  }

}

export default MusicList;
