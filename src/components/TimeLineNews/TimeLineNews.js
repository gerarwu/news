import React from 'react';
import classes from './TimeLineNews.module.css';

import axios from '../../config/axios';

import New from '../New/New';


class TimeLineNews extends React.Component{

    state= {
        news: []
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get('/v2/top-headlines?country=mx').then( (res) => {
            if(res.data && res.data.articles){
                this.setState({news: [...res.data.articles]});
            }            
        })
    }

    render(){
        const news = this.state.news.map( (n) => {            
            return (<New title={n.title} description={n.description} urlImage={n.urlToImage}  key={n.title} />);
        });

        return(
            <React.Fragment>
               {news}
            </React.Fragment>
        );
    }

}

export default TimeLineNews;