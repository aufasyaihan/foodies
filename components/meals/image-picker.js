"use client";

import { useRef, useState, FileReader } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickImage() {
    imageInput.current.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]; // get the first file picked by user

    // Set the picked image to the selected file
    setPickedImage(file);

    if (!file) {
      // If no file is selected, set the picked image to null
      setPickedImage(null);
      return;
    }

    // Create a new instance of the FileReader class
    const reader = new FileReader();
    reader.onload = () => {
      // Read the file as a data URL and set the picked image to the result
      setPickedImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="image picked by user" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleChangeImage}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
