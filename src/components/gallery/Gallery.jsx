import "./Gallery.css"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Gallery = () => {
    return (
        <div className="chapter-gallery">
            <div className="gallery">
                <img src="https://i.postimg.cc/4d6t8b7Z/gallery-1.png" alt="" />
                <img src="https://i.postimg.cc/7hqzjG0z/gallery-2.png" alt="" />
                <img src="https://i.postimg.cc/x8gmQf34/gallery-3.png" alt="" />
                <img src="https://i.postimg.cc/ncc7kmHb/gallery-4.png" alt="" />
            </div>

            <button className="button dark-btn">View More Here
                <FaArrowUpRightFromSquare className="ml-1"/>
            </button>

        </div>
    )
}

export default Gallery;
