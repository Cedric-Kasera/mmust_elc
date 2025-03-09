import "./Gallery.css"
import gallery_1 from "../../assets/gallery-1.png"
import gallery_2 from "../../assets/gallery-2.png"
import gallery_3 from "../../assets/gallery-3.png"
import gallery_4 from "../../assets/gallery-4.png"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Gallery = () => {
    return (
        <div className="chapter-gallery">
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
            </div>

            <button className="button dark-btn">View More Here
                <FaArrowUpRightFromSquare className="ml-1"/>
            </button>

        </div>
    )
}

export default Gallery;
