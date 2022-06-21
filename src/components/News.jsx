import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:8,
        category:"general"
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    constructor(props) {
        super(props);
        // console.log("this is constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`AJ | ${this.props.category[0].toUpperCase()}${this.props.category.substring(1)}`;

        // console.log("Did M");
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=af8b1d84dde94c859c6cee77c6ecae8a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles, totalResults: parsedData.totalResults,
        loading:false });
    }
    async componentDidMount() {
        this.updateNews();
    }

    handlePreviousClick = async () => {
        

        await this.setState({page:this.state.page-1});
        this.updateNews()
    }
    handleNextClick = async (e) => {
       
        await this.setState({page:this.state.page+1});
        this.updateNews()
    }

    render() {
        // console.log("render");
        return (
            <div className='container my-3'>
                <h1 className='text-center'>AJ news top headline from {this.props.category[0].toUpperCase()}{this.props.category.substring(1)} category</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                
                    {!this.state.loading && this.state.articles.map((element) => {
                        if (!element.url || !element.title || !element.description || !element.urlToImage) {
                            // eslint-disable-next-line
                            return ;
                        }
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description?.slice(0, 80)} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                        </div>
                    })}


                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-dark " disabled={this.state.page <= 1} onClick={this.handlePreviousClick}>&larr; Prev</button>
                    <button type="button" className="btn btn-dark " >{this.state.page}</button>

                    <button type="button" className="btn btn-dark" disabled={(this.state.page +1)>Math.ceil((this.state.totalResults )/ this.props.pageSize)}  onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>

        )
    }
}

export default News