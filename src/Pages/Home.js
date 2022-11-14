import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'
import { store } from './Details'

const Home = () => {

  const [detail] = useContext(store);
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <h1>Maldives</h1>
      </div>
      <div className="home__sec">
       <Link to="/fitness" > <img src="https://img.freepik.com/free-photo/portrait-young-spotive-girl-doing-exercises-with-rope-keeping-body-fit-isolated-green-background-neon_155003-45635.jpg?size=626&ext=jpg&ga=GA1.2.1805328126.1661931410" alt="not foun" /></Link>
       
      </div>
      </div>
      
      <div className="home__thir">
      
       <Link to='/technology'>   <img src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&ext=jpg&ga=GA1.2.1805328126.1661931410" alt="not found" /></Link>
          </div>
          <h1 style={{marginTop:"40px"}}>The Latest</h1>
          <hr style={{width:"200px",  thickness:"20px"}} />
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Articles</h1>
                
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px",  thickness:"20px",}} />
                

                <div className='rightbar2'>
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                    
    </div>
  
    </div>
  )
}

export default Home