import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: "general",
        
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        
       
    }

    constructor(props) {
        super(props);
        // console.log(props.apiKey)
        // console.log("this is constructor")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0

        }
        
        document.title = `AJ | ${this.props.category[0].toUpperCase()}${this.props.category.substring(1)}`;

        // console.log("Did M");
    }
    async updateNews() {
       
        this.setState({page:this.state.page})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            
        });
    }
    async componentDidMount() {
        this.updateNews();
    }

    
    fetchMoreData =async () => {
        await this.setState({ page: this.state.page + 1 });
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            // totalResults: parsedData.totalResults,
            
            
        });

    };

    render() {
        // console.log("render");
        return (
            <>
            
                <h1 className='text-center text-white'>AJ news top headline from {this.props.category[0].toUpperCase()}{this.props.category.substring(1)} category</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length+this.props.pageSize <= this.state.totalResults }
                    loader={ <Spinner/>}
                >
                    {/* {console.log(this.state.articles.length ,this.state.totalResults)} */}
                    <div className="container">

                    <div className="row">

                        {this.state.articles.map((element,index) => {
                            if (!element.url || !element.title || !element.description || !element.urlToImage) {
                                // eslint-disable-next-line
                                return ;
                            }
                            return <div className="col-md-4" key={element.url+index}>
                                <NewsItem title={element.title} description={element.description?.slice(0, 80)} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                            </div>
                        })}


                    </div>
                    </div>

                </InfiniteScroll>




           
            </>

        )
    }
}

export default News