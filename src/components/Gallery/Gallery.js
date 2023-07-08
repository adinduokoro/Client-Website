import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
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
import {
  setPopupImg,
  showPopupImg,
  showModal,
} from "../../features/popup/popupSlice";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

const Gallery = () => {
  const { logout, user } = UserAuth();

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [visible, setVisible] = useState(8);
  const dispatch = useDispatch();
  const storage = getStorage();

  useEffect(() => {
    const imageListRef = ref(storage, "images/");
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item)
            .then((url) => {
              setImageList((prev) => [...prev, url]);
              console.log(imageList.length);
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
            setImageUpload(null);
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

  const handleClick = (url) => {
    dispatch(setPopupImg(url));
    dispatch(showPopupImg(true));
    dispatch(showModal(true));
  };

  const handleLoadMore = () => {
    setVisible(visible + 4);
  };

  return (
    <section className="gallery">
      <div className="gallery__container container">
        <h2 className="section__title">Gallery</h2>
        <span className="section__subtitle">Follow Us on Instagram</span>
        <ul className="image__container">
          {imageList.slice(0, visible).map((url, index) => {
            return (
              <li
                className="imageCard"
                key={index}
                onClick={
                  user ? () => handleDelete(url) : () => handleClick(url)
                }
              >
                <img src={url} alt="" />
                {user ? (
                  <>
                    <div className="delete__img">
                      <Icon className="trash-icon" icon="mdi:delete-off" />
                    </div>
                  </>
                ) : null}
              </li>
            );
          })}
        </ul>
        {visible >= imageList.length ? (
          ""
        ) : (
          <button
            className="load__more"
            onClick={handleLoadMore}
            disabled={visible >= 24}
          >
            load more...
          </button>
        )}
        {user ? (
          <>
            <input
              className="option__button button-admin"
              type="file"
              onChange={(event) => setImageUpload(event.target.files[0])}
            />
            <button
              className="option__button button-admin"
              onClick={uploadImage}
              disabled={imageList.length >= 20}
            >
              upload
            </button>
            <p className="logout__text">When logged in you can upload up to 24 pictures.</p>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Gallery;
