"use client";
import React, { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const inputImage = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handleSelectInput = () => {
    inputImage.current.click();
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          name={name}
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          ref={inputImage}
          onChange={handleImage}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleSelectInput}
        >
          Pick Image
        </button>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image</p>}
          {pickedImage && <Image src={pickedImage} alt="Selected Image" fill />}
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
