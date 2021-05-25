import React from 'react'
import './Blogpage.css'
import TopImage from '../assets/photoblog.jpg'
import { Blogsdata } from "./Blogsdata";
import Footer from './Footer';
import Singleblog from './Singleblog';
import { withRouter, Route, Switch } from 'react-router';

function Blogpage(props) {



    return (
        <>
            <div className="my-blog">
                <h1 className="Blog-title">Blogs</h1>
                <img className="top-pic" src={TopImage} />
                <span>Check our Blogs Below {">>"}</span>
                <div className=" row row-cols-1 row-cols-md-2 g-4 blog-post">
                    {Blogsdata.map((item, index) => {
                        return (
                            <div key={index} className="" onClick={(e) => {
                                props.history.push(`/blogpage/${index}`)
                            }}>
                                <div className="col">
                                    <div className="card">
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text postDesc">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <Footer />
        </>
    )
}

export default withRouter(Blogpage)








