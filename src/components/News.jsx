import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResult] = useState(0)
    

    const updateNews = async () => {
        document.title = `AJ | ${props.category[0].toUpperCase()}${props.category.substring(1)}`;
        // setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        console.log(url);
      
        setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(parsedData.articles);
        settotalResult(parsedData.totalResults)
        setloading(false)
        


    }
    useEffect(() => {
        // setPage(page+1)
        
        updateNews();

    }, [])




    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
        console.log(url);
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        settotalResult(parsedData.totalResults);
    
    };


    // console.log("render");

    return (
        <>

            <h1 className='text-center text-white' style={{marginTop:"50px",paddingTop:"6px"}}>AJ news top headline from {props.category[0].toUpperCase()}{props.category.substring(1)} category</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                // !
                hasMore={articles.length + props.pageSize <= totalResults}
                loader={<Spinner />}
            >
                
                <div className="container my-3">

                    <div className="row">

                        {articles.map((element, index) => {
                            if (!element.url || !element.title || !element.description || !element.urlToImage) {
                                // eslint-disable-next-line
                                return;
                            }
                            return <div className="col-md-4" key={element.url + index}>
                                <NewsItem title={element.title} description={element.description?.slice(0, 80)} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                            </div>
                        })}


                    </div>
                </div>

            </InfiniteScroll>





        </>

    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: "general",

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,


}
export default News