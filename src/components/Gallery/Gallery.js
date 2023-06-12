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
  const [visible, setVisible] = useState(8)
  const storage = getStorage();

  useEffect(() => {
    const imageListRef = ref(storage, "images/");
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item)
            .then((url) => {
              setImageList((prev) => [...prev, url]);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((response) => {
        getDownloadURL(response.ref)
          .then((url) => {
            setImageList((prev) => [...prev, url]);
            setImageUpload(null)
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (url) => {
    const newList = imageList.filter((f) => f !== url);
    setImageList(newList);
    const deleteRef = ref(storage, url);
    deleteObject(deleteRef)
      .then(() => {
        console.log("item deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoadMore = () => {
    setVisible(visible + 4)
  }

  return (
    <section className="gallery">
      <div className="gallery__container container">
        <h2 className="section__title">Gallery</h2>
        <span className="section__subtitle">Follow Us on Instagram</span>
        <ul className="image__container">
          {imageList.slice(0, visible).map((url, index) => {
            return (
              <li className="imageCard" key={index} onClick={() => ("")}>
                <img src={url} alt="" />
              </li>
            );
          })}
        </ul>
        {visible >=  imageList.length ? ""  : <button className="load__more" onClick={handleLoadMore} disabled={visible === 24}>load more...</button> }
        {/* <input
          type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <button onClick={uploadImage}>upload</button> */}
      </div>
    </section>
  );
};

export default Gallery;
