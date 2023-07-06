import React, { useState, useEffect } from "react";
import "./Classes.css";
import logo from "../../assets/images/washington-logo.png";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const Classes = () => {
  const [newCourse, setNewCourse] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const productsCollectionRef = collection(db, "products");

  const createProduct = async (event) => {
    event.preventDefault();

    if (newCourse.length > 35 || newPrice.length > 4) {
      return;
    }

    try {
      const docRef = await addDoc(productsCollectionRef, {
        course: newCourse.toUpperCase(),
        price: newPrice.toUpperCase(),
      });

      setProducts([...products, { course: newCourse.toUpperCase(), price: newPrice.toUpperCase(), id: docRef.id }]);

      setNewCourse("");
      setNewPrice(0);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const productRef = doc(db, "products", productId);
      await deleteDoc(productRef);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const editProduct = async (productId) => {
    try {
      const productRef = doc(db, "products", productId);
      const updatedData = {
        course: newCourse.toUpperCase(),
        price: newPrice.toUpperCase(),
      };

      await updateDoc(productRef, updatedData);

      setProducts(
        products.map((product) =>
          product.id === productId
            ? { ...product, course: newCourse.toUpperCase(), price: newPrice.toUpperCase() }
            : product
        )
      );

      setEditProductId(null);
      setNewCourse("");
      setNewPrice(0);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productsCollectionRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error getting products:", error);
      }
    };
    getProducts();
  }, []);

  const isEditMode = (productId) => {
    return productId === editProductId;
  };

  const handleEditClick = (productId) => {
    const product = products.find((product) => product.id === productId);
    setEditProductId(productId);
    setNewCourse(product.course);
    setNewPrice(product.price);
  };

  return (
    <section
      className="classes"
      id="classes"
      style={{ scrollMarginTop: "7.5rem" }}
    >
      <div className="classes__container container">
        <h2 className="section__title">Classes & Training</h2>
        <span className="section__subtitle">Course Pricing</span>

        <form action="">
          <input
            placeholder="Course Name?"
            value={newCourse}
            onChange={(event) => setNewCourse(event.target.value)}
          />
          <input
            type="number"
            placeholder="Price?"
            value={newPrice}
            onChange={(event) => setNewPrice(event.target.value)}
          />
          <button onClick={createProduct} disabled={products.length === 6}>
            Create Product
          </button>
        </form>

        <div className="pricing__container">
          <div className="logo__left">
            <img src={logo} alt="" />
            <div className="logo__text">
              <p className="info__title">FIREARMS</p>
              <p className="info__subTitle">TRAINING COURSE</p>
            </div>
          </div>

          <div className="pricing__right">
            {products.map((product, index) => {
              return (
                <div className="product__card" key={index}>
                  <p className="product__title">{product.course}</p>
                  <button
                    onClick={() =>
                      isEditMode(product.id)
                        ? editProduct(product.id)
                        : handleEditClick(product.id)
                    }
                  >
                    {isEditMode(product.id) ? "Save" : "Edit"}
                  </button>
                  <button
                    style={{ marginLeft: "3px" }}
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                  <div className="price__container">
                    <hr className="price__line" />
                    <p className="product__price">${product.price}.00</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="disclaimer">
          Fingerprints are required to be done prior to class <br />
          MD state police has $75.00 (wear and carry) $50.00 (HQL) application
          fee <br />
          ***PRICES MAY VARY***
        </p>
      </div>
    </section>
  );
};

export default Classes;
