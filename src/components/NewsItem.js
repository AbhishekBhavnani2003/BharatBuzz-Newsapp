import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let { title, description, imageurl, newsurl,author,date} = this.props;


    return (
      <div className='my-5'>
        <div className="card">
          <img src={!imageurl?"https://static1.bigstockphoto.com/0/6/5/large1500/5605933.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target='_blank' className="btn btn-primary btn-dark ">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
