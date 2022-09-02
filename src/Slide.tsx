import { useState } from "react";
import "./Slide.css";

export const Slide = () => {
  const [photos, setPhotos] = useState<string[]>([
    "https://images.unsplash.com/photo-1660845772915-5e048f8f1162?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjA4NjE3Nw&ixlib=rb-1.2.1&q=80&w=1920",
    "https://images.unsplash.com/photo-1661880874890-0ef6c246c924?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjA4NjQ4MQ&ixlib=rb-1.2.1&q=80&w=1920",
    "https://images.unsplash.com/photo-1661282520724-8dfe23cf717c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjA4NjQ5NA&ixlib=rb-1.2.1&q=80&w=1920",
    "https://images.unsplash.com/photo-1660866837673-76b45008913e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjA4Nzg4Nw&ixlib=rb-1.2.1&q=80&w=1920",
  ]);

  const [photoIndex, setPhotoIndex] = useState<number>(0);

  function setEffect() {
    document.getElementById("image")?.classList.add("change-photo");
    setTimeout(() => {
      document.getElementById("image")?.classList.remove("change-photo");
    }, 250);
  }

  function prevSlide() {
    setEffect();
    if (photoIndex === 0) {
      return setPhotoIndex(photos.length - 1);
    }
    setPhotoIndex(photoIndex - 1);
  }

  function nextSlide() {
    setEffect();

    if (photoIndex === photos.length - 1) {
      return setPhotoIndex(0);
    }

    setPhotoIndex(photoIndex + 1);
  }

  return (
    <div className="slide-container">
      <div className="btn_left" onClick={prevSlide}></div>
      <div className="btn_right" onClick={nextSlide}></div>

      <div className="slide-content">
        <img id="image" src={photos[photoIndex]} />
      </div>

      <div className="circles-select-photo">
        {photos.map((photo, index) => {
          return (
            <span
              onClick={() => {
                setEffect();
                setPhotoIndex(index);
              }}
              className={`circle ${photoIndex === index && "circle-active"}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
