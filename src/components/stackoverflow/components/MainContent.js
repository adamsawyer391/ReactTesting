import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
import './css/MainContent.css'
import QuestionBlock from './QuestionBlock';
import EditIcon from '@material-ui/icons/Edit';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function MainContent() {

    const useStyles = makeStyles(theme => ({
        featuredBlog: {
            margin: 0,
            padding: 0,
        }
    }))

    const classes = useStyles();
    const banner_url = "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/banner-ads-examples-ncino.jpg";
    const google_url = "https://cloud.google.com/images/developers/event-kubecon-2021.png";
    const developer_book_url = "https://images-na.ssl-images-amazon.com/images/I/61RMmT-TlgL._AC_UL600_SR600,600_.jpg";

    return (
        <div className="main-content-so-container">
            <div className="so-content-left">
                <img src={banner_url} alt="" className="main-banner-container" />
                <QuestionBlock />
            </div>
            <div className="so-content-right">
                <img src={google_url} alt="" className="top-ad-banner" />
                <div className="white-block">

                </div>
                <Card className={classes.featuredBlog}>
                    <p className="featured-blog-title">
                        The Overflow Blog
                    </p>
                    <div className="featured-blog-article-container">
                        <div className="left-article">
                            <EditIcon />
                        </div>
                        <div className="right-article">
                            <p className="article-paragraph-so">
                                Podcast 364: What's the blast radius when your database goes down?
                            </p>
                        </div>
                    </div>
                    <div className="featured-blog-article-container">
                        <div className="left-article">
                            <EditIcon />
                        </div>
                        <div className="right-article">
                            <p className="article-paragraph-so">
                                The Overflow #84 and 85: How Dwarf Fortress is built
                            </p>
                        </div>
                    </div>
                    <p className="featured-blog-title">
                        Featured on Metadata
                    </p>
                    <div className="featured-blog-article-container">
                        <div className="left-article">
                            <ChatBubbleOutlineIcon />
                        </div>
                        <div className="right-article">
                            <p className="article-paragraph-so">
                                Join me in Welcoming Valued Associates: #945 - Slate - and #948 - Vanny
                            </p>
                        </div>
                    </div>
                </Card>
                <div className="white-block">

                </div>
                <p className="advertisement-title">
                    Advertisement
                </p>
                <img src={developer_book_url} alt="" className="main-ad-block" />
            </div>
        </div>
    )
}

export default MainContent
