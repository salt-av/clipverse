import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Homepage() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async() =>{
            try {
                const query = '';
                const API_key = import.meta.env.VITE_APIkey;
                const API_url = `https://www.googleapis.com/youtube/v3/search?key=${API_key}&part=snippet&q=${query}&type=video`;
                const response = await fetch(`${API_url}?key=${API_key}&maxResults=5`);
                const data = await response.json();
                setVideos(data.items);
            }
            catch(error) {
                console.log(`Error fetching ${query} videos.`, error);
            }  
    };
      fetchVideos();
    }, []);
    return(<div className="home-page">
        <header className="header">
            <a href="#">
                <img src="./favicon.png" alt="Clipverse" className="Clipverse-logo" />
            </a>
            <form className="search-bar">
                <input className="search-input"     type="text"
                placeholder="What'u lookin' for today?"
                aria-label="Search" />
                <button type="submit" className="search-btn">
                    <img src="./magnify.svg" />
                </button>
            </form>
            <div className="menu-icons">
                <a href="#">
                    <img src="./video-plus.svg" alt="Upload Video" />
                </a>
                <a href="#">
                    <img src="./apps.svg" alt="Apps" />
                </a>
                <a href="#">
                    <img src="./bell.svg" alt="Notifications" />
                </a>
                <a href="#">
                    <img className="menu-channel-icon" src="http://unsplash.it/36/36?gravity=center" alt="Your Channel" />
                </a>
            </div>
        </header>
        <div className="categories">
            <section className="category-section">
                <button className="category">All</button>
                <button className="category">News</button>
                <button className="category">Technology</button>
                <button className="category">Animations</button>
                <button className="category">Movies</button>
                <button className="category">Learning</button>
                <button className="category">Music</button>
                <button className="category">Gaming</button>
                <button className="category">Sport</button>
                <button className="category">Fashion & Beauty</button>
            </section>
        </div>
        <div className="videos">
            <section className="video-section">
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
            </section>
            <section className="video-section">
                <h2 className="video-section-title">
                    Videos worth watching 
                <button className="video-section-title-close">&times;</button></h2>
                <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
                    <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                    </a> 
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Title</a>
                            <a href="#" className="video-channel-name">Channel name</a>
                            <div className="video-metadata">
                                <span>12 views </span>
                                •
                                <span> 2 years ago</span>
                            </div>
                        </div>
                    </div>
                    </article>
            </section>
        </div>
    </div>)
}
