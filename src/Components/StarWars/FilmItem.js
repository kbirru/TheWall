import React, { Component } from 'react';
class FilmItem extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.FilmData.title}</h3>
            <p> {this.props.FilmData.opening_crawl} </p>
         </div>
    )
  }
}
export default FilmItem;


