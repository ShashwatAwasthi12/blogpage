import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import { Blogsdata } from './Blogsdata'
import Footer from './Footer'
import './Singleblog.css'


function Singleblog(props) {

    const [blog, setblog] = useState([])

    useEffect(() => {
        setblog(Blogsdata.filter(b => b.index == props.match.params.id)[0])

    }, [])
    return (
        <>
            <div className="blogbody">
                <img className="blogimage" src={blog.image} />
                <div className="blogtitle">{blog.title}</div>
                <div className="blogcontent"><p>{blog.desc}</p></div>
                <div className="row">
                    <div className="col"><img src={blog.image2} /></div>
                    <div className="col"><p>{blog.desc2}</p></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default withRouter(Singleblog)