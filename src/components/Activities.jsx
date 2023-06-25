import React, { useEffect, useState } from 'react'
import Modal from './Modal'

const News = () => {
  const [toggle, setToggle] = useState(false)
  const [title, setTitle] = useState('default title')
  const [pic, setPic] = useState('')
  const [desc, setDesc] = useState('')

  const popUp = (title, pic, desc) => {
    setTitle(title)
    setToggle(!toggle)
    setPic(pic)
    setDesc(desc)
  }

  return (
    <>
      <div className="faculty">
        <div className="text-3xl text-white">ACTIVITIES</div>
      </div>
      <div className="NEWS">
        <div className="div">
          <div className="overlap-4">
            <div className="selection">
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="rectangle-5" />
            </div>
            <div className="news">
              <h1 className="h-1">DAGYAW</h1>
              <p className="p">
                The long wait is finally over! The College of Architecture and
                Fine Arts proudly presents to you, the 52nd Annual Architecture
                Arts and Design Exhibition & Competitions entitled: DAGYAW:
                Tungo sa Nagkakaisang Bayan. An extraordinary art event that
                transcends boundaries and immerse you in a world of boundless
                creativity and sensory exploration.
              </p>
              <div
                className="pop-up"
                onClick={() =>
                  popUp(
                    'DAGYAW',
                    'src/assets/Acti1.jpg',
                    'The long wait is finally over! The College of Architecture and Fine Arts proudly presents to you, the 52nd Annual Architecture Arts and Design Exhibition & Competitions entitled: DAGYAW: Tungo sa Nagkakaisang Bayan. An extraordinary art event that transcends boundaries and immerse you in a world of boundless creativity and sensory exploration.'
                  )
                }
              >
                <img className="line" alt="Line" src="line-3.png" />
                <img className="news-2" alt="News" src="src/assets/Act1.jpg" />
              </div>
            </div>

            <div className="news-3">
              <img
                className="news-4"
                alt="News"
                src="src/assets/Activ3.jpg"
                onClick={() =>
                  popUp(
                    'LINANG',
                    'src/assets/Act3.jpg',
                    'Prepare to be immersed in a world where talent and skills collide in an explosive showcase of artistry and speed! Save the date for June 29-30, as we unveil a talent and skills competition like no other. From the depths of imagination to the swiftness of execution, witness the remarkable fusion of character design and speed tests. Marvel at the stunning creations that spring to life before your eyes and be amazed by the lightning-fast mastery on display. Join us for an unforgettable event that will ignite your creativity, ignite your competitive spirit, and leave you craving for more! IN The Annual Architecture, Arts, Design, Exhibition and Competitions (AAADEC) has been officially moved to June 29 and 30 due to the financial difficulties that we ran into. We would like to apologize for any inconveniences that the unexpected scheduling modifications have caused. Keep checking for further updates to keep you posted!'
                  )
                }
              />
              <div className="text-wrapper-3">LINANG</div>
              <p className="text-wrapper-4">
                Prepare to be immersed in a world where talent and skills
                collide in an explosive showcase of artistry and speed! Save the
                date for June 29-30, as we unveil a talent and skills
                competition like no other. From the depths of imagination to the
                swiftness of execution, witness the remarkable fusion of
                character design and speed tests. Marvel at the stunning
                creations that spring to life before your eyes and be amazed by
                the lightning-fast mastery on display.
              </p>
              <img className="line" alt="Line" src="line-2.png" />
            </div>
            <div className="news-5">
              <img
                className="news-6"
                alt="News"
                src="src/assets/Act2.jpg"
                onClick={() =>
                  popUp(
                    'MARILAG',
                    'src/assets/Activ2.jpg',
                    'MR. & MS. CAFA 2023  “MARILAG: Pagkilala Sa Natatanging Katangian“ THE SEARCH IS OVER! Discover the charm and elegance of 11 individuals to represent their courses this year Mr. & Ms. CAFA 2023!'
                  )
                }
              />
              <div className="text-wrapper-5">MARILAG</div>
              <p className="text-wrapper-6">
                MR. & MS. CAFA 2023 “MARILAG: Pagkilala Sa Natatanging
                Katangian“ THE SEARCH IS OVER! Discover the charm and elegance
                of 11 individuals to represent their courses this year Mr. & Ms.
                CAFA 2023!
              </p>

              <img className="line" alt="Line" src="line-1.png" />
            </div>
          </div>
          <Modal title={title} toggle={toggle} pic={pic} desc={desc} />
          <footer className="footer">
            <div
              className="p-wrapper"
              style={{
                backgroundImage: 'url(footer.png)',
              }}
            >
              <p className="text-wrapper-7">
                TUP CAFA © 2023 All rights reserved
              </p>
            </div>
            <div
              className="overlay"
              style={{ display: toggle ? 'block' : 'none' }}
              onClick={() => setToggle(false)}
            ></div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default News
