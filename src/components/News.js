import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner.js'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state =
    {
      articles: [],
      loading: false,
      page: 1,
      totalResult: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - BharatBuzz `;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  async updatenews() {
    this.props.setProgress(10) ; 
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page} &pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30) ; 
    let parseddata = await data.json();
    this.props.setProgress(70) ; 
    this.setState({
      articles: parseddata.articles,
      totalResult: parseddata.totalResult,
      loading: false
    }) 
    this.props.setProgress(100) ;  
  }


  async componentDidMount() {
    this.updatenews();

  }



  handlepreviousclick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updatenews();
  }

  handlenextclick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updatenews();
  }


  render() {
    return (
      <div className='container my-3' style={{overflowX: "hidden"}}>
        <h1 className="text-center" style={{margin : "35px 0px", marginTop:"90px" , fontWeight:"bold"}}>BharatBuzz - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })
          }
        </div>

        <div className="container d-flex justify-content-between mb-5">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}> Next &rarr;</button>

        </div>


      </div>
    )
  }
}

export default News