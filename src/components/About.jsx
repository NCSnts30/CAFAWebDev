import 'react'
import CAFA1 from '../assets/about.png'
import CAFA2 from '../assets/about_2.png'

function Menu() {
  return (
    <div>
      <div className="about w-[450px] h-[40px] bg-red-800 ">
        <p className="ml-5 text-3xl ">ABOUT</p>
      </div>
      <div className="center">
        <img width="100%" height="50&" src={CAFA1} alt="CAFA1" />
      </div>
      <div className="history ml-90 w-[450px] bg-red-100 rounded-2xl">
        <p className="ml-7 text-3xl font-bold">HISTORY</p>
      </div>
      <div className=" history bg-gray-200 rounded-3xl ">
        <p> &nbsp;</p>
        <p className="ml-10 mr-20 mb-50 text-2xl ">
          The roots of the College of Architecture and Fine Arts (CAFA) can be
          traced from the drawing subjects required in all courses offered by
          the University since 1907. The college has been a consistent
          contributor in the University's achievements and recognition in
          various art competitions both local and abroad. The CAFA also produces
          top passers in the Licensure Examination given by the Professional
          Regulations Commission. Presently, the college is composed of three
          departments, namely: Architecture, Fine Arts, and Graphics.
          Furthermore, the college offers advance studies in the Graduate
          Programs: Master in Architecture (Major in Construction Technology
          Management) and Master in Graphics Technology.
        </p>
        <p> &nbsp;</p>
      </div>
      <div className="container2">
        <div>
          <p className="mt-20"> &nbsp;</p>
          <section className="history2 ml-90 w-[450px] bg-red-100 rounded-2xl">
            <p className="ml-7 text-3xl font-bold">GOAL</p>
          </section>
          <section className=" history2 w-[800px] bg-gray-200 rounded-3xl ">
            <p> &nbsp;</p>
            <p className="ml-10 mr-10 mb-50 text-2xl ">
              The College ot Architecture and Fine Arts (CAFA) develops
              competitive architects, artist, designers and draftsmen for
              industry and related sectors toward an improved quality of life.
            </p>
            <p> &nbsp;</p>
          </section>
          <p className="mt-20"> &nbsp;</p>
          <section className="history2 ml-90 w-[450px] bg-red-100 rounded-2xl">
            <p className="ml-7 text-3xl font-bold">OBJECTIVES</p>
          </section>
          <section className=" history2 w-[800px] bg-gray-200 rounded-3xl ">
            <p> &nbsp;</p>
            <p className="ml-10 mr-10 mb-50 text-2xl ">
              After 3-5 years, the graduates of the program are expected to:
            </p>
            <p className="ml-10 mr-10 mb-50 text-2xl ">
              • Attain highly level of technical skills in their chosen
              profession.
            </p>
            <p className="ml-10 mr-10 mb-50 text-2xl ">
              • Acquire a lifelong learning actively such as progressive
              leadership in applied research development studies in the areas of
              Arts, Design, and Architectural fields and production.
            </p>
            <p className="ml-10 mr-10 mb-50 text-2xl ">
              • Commit in professional services to effect/impart technology
              transfer in assisting the development of small and medium
              industries to contribute to national development.
            </p>
            <p> &nbsp;</p>
          </section>
        </div>
        <div className="left">
          <img width="80%" height="50&" src={CAFA2} alt="CAFA2" />
        </div>
      </div>
    </div>
  )
}

export default Menu
