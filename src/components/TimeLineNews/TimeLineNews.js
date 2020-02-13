import React, {useState} from 'react';
import classes from './TimeLineNews.module.css';

import axios from '../../config/axios';

import New from '../New/New';
import Preview from '../Preview/Preview';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';


/*class TimeLineNews extends React.Component{

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

    getFormatedNews(news) {
        return news.map( (n) => {                  
            return (<New 
                title={n.title} 
                description={n.description}                 
                urlImage={n.urlToImage}  
                key={n.title} 
                data={n}
                onclicked={() => this.onclickedHandlerShowNewDetail(n)}/>
            );
        });
    }

    render() {        
        return(               
            <div className={classes.TimeLineNews}>      
                <ProgressBar/>
                <Preview                         
                        new={this.state.newSelected}                     
                        clickedClosePreview={this.handlerClosePreview}
                />
                {this.getFormatedNews(this.state.news)}
            </div>
        );
    }

}*/

const getFormatedNews = news => {
    return news.map( (n) => {                  
        return (<New 
            title={n.title} 
            description={n.description}                 
            urlImage={n.urlToImage}  
            key={n.title} 
            data={n}
            onclicked={() => console.log('hi')}/>
        );
    });
}

const TimeLineNewsR = () => {
    const [news, setNews] = useState([])
    
    React.useEffect(async ()=> {
        const res = await axios.get('/v2/top-headlines?country=mx')
        setNews([...res.data.articles]);
    }, [])

    return <div className={classes.TimeLineNews}>      
        <ProgressBar/>
        <Preview                         
                new={null}                     
                clickedClosePreview={console.log('hi 2')}
        />
        {getFormatedNews(news)}
    </div>
    
}

export default TimeLineNewsR;