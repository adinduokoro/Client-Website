import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [feed, setFeed] = useState([]);
  const [visible, setVisible] = useState(12)

  const handleClick = () => {
    setVisible(visible + 6)
  }

  useEffect(() => {
    const URL = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setFeed(data.data));
  }, []);

  return (
    <section className="gallery">
      <div className="gallery__container container">
        <h2 className="section__title">Gallery</h2>
        <span className="section__subtitle">Follow Us on Instagram</span>
        <ul className="instagramFeed__container">
          {feed.slice(0, visible).map((post) => {
            return (
              <li className="postCard" key={post.id}>
                <a href={post.permalink} target="_blank">
                  <img src={post.media_url} alt={post.caption} />
                </a>
              </li>
            );
          })}
        </ul>
        {visible === 24 ? ""  : <button className="load__more" onClick={handleClick} disabled={visible === 24}>load more...</button> }
        
      </div>
    </section>
  );
};

export default Gallery;
