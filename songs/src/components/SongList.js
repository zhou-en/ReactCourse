import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
  // helper function returns a block of js
  renderList () {
    return this.props.songs.map((song) => {
      // map function returns list jsx
      return (
        <div className="item" key={song.title} >
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render () {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  // console.log(state.songs);
  return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList)