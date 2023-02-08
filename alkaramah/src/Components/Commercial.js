import React,{Component} from 'react'
import CommercialItem from './CommercialItem'
import main from './main.png'
import mangla from './mangla.png'
import Secondcup from './Secondcup.png'
import BarBQ from './BarBQ.png'
import Duran from './Duran.png'

export class Commercial extends Component {
  articles= [
    {
      source: {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Amy Skorheim",
        "title": "G.B Scouts Mess",
        "description": "Mess Constructed by alkaramah architects in 2018…",
        "url": "https://google.com.pk",
        "urlToImage": main,
        "publishedAt": "2022-12-26T14:15:37Z",
        "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
        },
        {
          source: {
            "id": "engadget",
            "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "Second Cup Coffee Shop",
            "description": "Second Cup Coffee Shop Constructed by alkaramah architects in 2018…",
            "url": "https://www.engadget.com/best-sci-fi-movies-books-shows-141537070.html",
            "urlToImage": Secondcup,
            "publishedAt": "2022-12-26T14:15:37Z",
            "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
            },
            {
              source: {
                "id": "engadget",
                "name": "Engadget"
                },
                "author": "Amy Skorheim",
                "title": "Mangla Complex",
                "description": "Mangla Complex Constructed by alkaramah architects in 2018…",
                "url": "https://facebook.com",
                "urlToImage": mangla,
                "publishedAt": "2022-12-26T14:15:37Z",
                "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
                },
                {
                  source: {
                    "id": "engadget",
                    "name": "Engadget"
                    },
                    "author": "Amy Skorheim",
                    "title": "Bar-B-Q Tonight Restaurant",
                    "description": "Bar-B-Q Tonight Restaurant Constructed by alkaramah architects in 2018…",
                    "url": "https://hec.edu.pk",
                    "urlToImage": BarBQ,
                    "publishedAt": "2022-12-26T14:15:37Z",
                    "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
                    },  
                    {
                      source: {
                        "id": "engadget",
                        "name": "Engadget"
                        },
                        "author": "Amy Skorheim",
                        "title": "Duran Shopping Mall",
                        "description": "Duran Shopping Mall Constructed by alkaramah architects in 2018…",
                        "url": "https://hotmail.com",
                        "urlToImage": Duran,
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
      render() {
  return (
    
    <div className='container my-5' style={{ backgroundImage: "url(images/Contact.jpg)",backgroundSize: 'cover',
      
  }}> 
      <br></br>
      <h2 className="text-center my-3">Projects - Commercial</h2>
      <div className = 'row' >
      {this.state.articles.map((element)=>{
  return <div className = 'col-md-4' key={element.url} >
  <CommercialItem  title = {element.title} description = {element.description}
             imageurl = {element.urlToImage} url={element.url}/>
  </div> 
})}  
   </div>
 </div>
)
}
}
export default Commercial




