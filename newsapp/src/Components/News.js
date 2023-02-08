import React, { Component } from 'react'
import NewsItem from './NewsItem'



export class News extends Component {
  articles= [
    {
      source: {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Amy Skorheim",
        "title": "The best sci-fi movies, books and shows to consume over the holidays",
        "description": "If you need a break from the hustle and cheer of the holidays, there’s nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off-planet or otherwise removed from our reality. We finally g…",
        "url": "https://www.engadget.com/best-sci-fi-movies-books-shows-141537070.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/21ca03a0-7697-11ed-bf7f-151267d43141",
        "publishedAt": "2022-12-26T14:15:37Z",
        "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
        },
        {
          source: {
            "id": "engadget",
            "name": "Engadget"
            },
            "author": "Masaud",
            "title": "The best sci-fi movies, books and shows to consume over the holidays",
            "description": "If you need a break from the hustle and cheer of the holidays, there’s nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off-planet or otherwise removed from our reality. We finally g…",
            "url": "https://www.engadget.com/best-sci-fi-movies-books-shows-141537070.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/21ca03a0-7697-11ed-bf7f-151267d43141",
            "publishedAt": "2022-12-26T14:15:37Z",
            "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
            },
            {
              source: {
                "id": "engadget",
                "name": "Engadget"
                },
                "author": "Amy Skorheim",
                "title": "The best sci-fi movies, books and shows to consume over the holidays",
                "description": "If you need a break from the hustle and cheer of the holidays, there’s nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off-planet or otherwise removed from our reality. We finally g…",
                "url": "https://www.engadget.com/best-sci-fi-movies-books-shows-141537070.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/21ca03a0-7697-11ed-bf7f-151267d43141",
                "publishedAt": "2022-12-26T14:15:37Z",
                "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
                }
    ]
  constructor(){
    super()
    this.state={
articles : this.articles,
loading : false,
totalResults :0
    }
   
  }
/*async componentDidMount(){
  let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=736dac6dbf22459fa283b97c6cd510ab';
  let data = await fetch(url)
  let parsedData = await data.json()
  this.setState = ({articles:parsedData.articles})
  console.log(parsedData)
}*/

handlepreviousclick=()=>{

}

handlenextclick=()=>{

}

  render() {
    return (
      <div className = 'container my-3'>
        <h1 className="text-center">News Monkey - Top Headlines</h1>
    
        
        
        <div className = 'row'>
       {this.state.articles.map((element)=>{
       
return <div className = 'col-md-4' key={element.url}>
       <NewsItem  title = {element.title} description = {element.description}
       imageurl = {element.urlToImage}
       newsurl={element.url} author={element.author} date={element.publishedAt}/>
       </div> 
       
})}  
        </div>

         
        <div className= 'container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button>
        <button type="button" class="btn btn-dark"onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
