import "./Programs.css"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src="https://i.postimg.cc/sD6W02XB/program-1.png" alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Mentorship</p>
        </div>
      </div>

      <div className="program">
        <img src="https://i.postimg.cc/k58t4Fy8/program-2.png" alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Entrepreneurial Skills</p>
        </div>
      </div>

      <div className="program">
        <img src="https://i.postimg.cc/VvsSKyPB/program-3.png" alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Leadership Training</p>
        </div>
      </div>

    </div>
  )
}

export default Programs
