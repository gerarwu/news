import React from 'react';
import classes from './TimeLineNews.module.css';

import axios from '../../config/axios';

import New from '../New/New';
import Preview from '../Preview/Preview';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';


class TimeLineNews extends React.Component{

    state= {
        news: [],        
        newSelected: undefined,
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get('/v2/top-headlines?country=mx').then( (res) => {
            if(res.data && res.data.articles){
                this.setState({news: [...res.data.articles]});
            }            
        });        
    }

    onclickedHandlerShowNewDetail(newSelected){             
        this.setState({newSelected: newSelected});
    }

    handlerClosePreview = () => {
        this.setState({newSelected: undefined});
    }

    render(){
        const news = this.state.news.map( (n) => {                  
            return (<New 
                title={n.title} 
                description={n.description}                 
                urlImage={n.urlToImage}  
                key={n.title} 
                data={n}
                onclicked={() => this.onclickedHandlerShowNewDetail(n)}/>
            );
        });
        
        return(               
            <div className={classes.TimeLineNews}>      
                <ProgressBar/>
                <Preview                         
                        new={this.state.newSelected}                     
                        clickedClosePreview={this.handlerClosePreview}
                />
                {news}
            </div>
        );
    }

}

export default TimeLineNews;