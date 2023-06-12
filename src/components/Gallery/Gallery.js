import React, { useEffect, useState } from "react";
import "./Gallery.css";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  deleteObject,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";

const Gallery = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const storage = getStorage();
  
  const uploadImage = () => {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    if (imageUpload !== null);
    uploadBytes(imageRef, imageUpload).then((response) => {
      getDownloadURL(response.ref).then((url) => {
        setImageList(prev => [...prev, url])
      })
    });
  };
  
  useEffect(() => {
    const imageListRef = ref(storage, "images/")
    listAll(imageListRef).then(response => {
      response.items.forEach(item => {
        getDownloadURL(item).then((url) => {
          setImageList(prev => [...prev, url])
        })
      })
    })
  }, [])


  const handleDelete = (url) => {
    const newList = imageList.filter(f => f !== url)
    setImageList(newList)
    const deleteRef = ref(storage, url)
    deleteObject(deleteRef).then(() => {
      console.log("item deleted")
    })
  }

  return (
    <section className="gallery">
      <div className="gallery__container container">
        <h2 className="section__title">Gallery</h2>
        <span className="section__subtitle">Follow Us on Instagram</span>
        {imageList.map((url, index) => {
          return(
            <img src={url} alt="" key={index} onClick={() => handleDelete(url)}/>
          )
        })}
        <input
          type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <button onClick={uploadImage}>upload</button>
      </div>
    </section>
  );
};

export default Gallery;
