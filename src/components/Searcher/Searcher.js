import React from 'react';
import classes from './Searcher.module.css';

import axios from '../../config/axios';
import New from '../New/New';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';


class General extends React.Component {

    searcher = React.createRef();
    state = {
        textToSearch: '',
        searching: false,
        news: []
    };

    search = () => {
        
        axios.get(`/v2/everything?q=${this.searcher.current.value}`).then((res) => {
            if(res.data && res.data.articles){                
                this.setState({ news: [...res.data.articles], searching: false });
            }            
        })
    }

    onclick = () => {             
        this.setState((state, props) => {
            return {
                textToSearch: this.searcher.current.value,
                searching: true
            }
        });                
        this.search();
    }

    render(){        
        let spinner= '';
        let listNews;
        if(this.state.searching){
            spinner= 'Buscando...';            
        }

        if(this.state.news.length > 0){
            listNews = this.state.news.map((n) => {
                return(
                    <New  title={n.title} description={n.description} urlImage={n.urlToImage}  key={n.title+Date.now()} />
                );
            })
        }

        return (            
            <div>
                <ProgressBar/>
                <div className={classes.Searcher}>                    
                    <p><input ref={this.searcher} placeholder='Search..' /></p>
                    <p><button onClick={this.onclick}>Search</button></p>                
                    {spinner}                    
                </div>
                {listNews}
            </div>
        );
    }
}

export default General;