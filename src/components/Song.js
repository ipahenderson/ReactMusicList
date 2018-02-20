import React, {Component} from 'react';

class Song extends Component{

  render(){
    return (
      <div className="song">
        <div className="position-box"><h4 className='position'>{this.props.position}</h4></div>
        <h3 className='song-icon'>{this.props.index}</h3>
        <img className="image" src={this.props.image} alt={this.props.title}/>
        <h3>{this.props.title} - {this.props.artist}</h3>


      </div>
    )
  }


}

export default Song;
