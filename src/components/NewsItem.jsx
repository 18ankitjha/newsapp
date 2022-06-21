import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let { title, description, imageURL, newsURL, author, date,source } = this.props;
    if (!title || !description || !imageURL || !newsURL) {

      return;
    }
    return (
      <div className='my-3 '>
        <div className="card" style={{ height: "30rem", position: "relative" }}>
          {/* eslint-disable-next-line  */}
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",}}>
              {source}
              
            </span>
          <img className="card-img-top" src={imageURL} alt="this image is not available" style={{ height: "12rem" }} />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>

            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "unkown"} on {new Date(date).toGMTString()}</small></p>

            <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark" style={{ position: "absolute", bottom: "3px", right: "3px" }}>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem