import React from 'react'


const NewsItem = (props)=> {


    let { title, description, imageURL, newsURL, author, date, source } = props;
    if (!title || !description || !imageURL || !newsURL) {

      return;
    }
    return (
    
      <div className='my-3 '>
        <div className="card" style={{ height: "30rem", position: "relative" }}>
          {/* eslint-disable-next-line  */}
          <div style={{
            display: "flex",
            justifyContent: " flex-end",
            position: "absolute",
            right: " 0px",
          }}>
            <span className="badge rounded-pill bg-danger" style={{ left: "90%", }}>
              {source}

            </span>

          </div>
          {/* eslint-disable-next-line */}
          <img className="card-img-top" src={imageURL} alt="this image is not available" style={{ height: "12rem" }} />
          <div className="card-body" style={{background:"black"}}>
            <h5 className="card-title text-white">{title}..</h5>

            <p className="card-text text-white">{description}...</p>
            <p className="card-text text-white"><small className="font-weight-light font-italic">By {author ? author : "unkown"} on {new Date(date).toGMTString()}</small></p>

            <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark" style={{ position: "absolute", bottom: "3px", right: "3px" }}>Read More</a>
          </div>
        </div>
      </div>
    )

}

export default NewsItem