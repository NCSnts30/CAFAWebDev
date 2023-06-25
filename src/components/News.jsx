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
        <div className="text-3xl text-white">NEWS</div>
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
              <h1 className="h-1">Kultura sa Tela</h1>
              <p className="p">
                Counting the Days Till the Big Day! Save the date and prepare to
                be enthralled as “KULTURA SA TELA: Philippine Culture Through
                Fashion” redefines the essence of style and culture. Dont miss
                this extraordinary event that will ignite your senses and leave
                you inspired. Join us this coming June 14, 2023, Wednesday, from
                1:00 PM to 5:00 PM, at the IRTC Conference Hall, Technological
                University of the Philippines - Manila or catch us via FB live.
              </p>
              <div
                className="pop-up"
                onClick={() =>
                  popUp(
                    'Kultura sa Tela',
                    'src/assets/news1.jpg',
                    'Counting the Days Till the Big Day! Save the date and prepare to be enthralled as KULTURA SA TELA Philippine Culture Through Fashion redefines the essence of style and culture. Dont miss this extraordinary event that will ignite your senses and leave you inspired. Join us this coming June 14, 2023, Wednesday, from 1:00 PM to 5:00 PM, at the IRTC Conference Hall, Technological University of the Philippines - Manila or catch us via FB live.'
                  )
                }
              >
                <img className="line" alt="Line" src="line-3.png" />
                <img className="news-2" alt="News" src="src/assets/news1.jpg" />
              </div>
            </div>
            <div className="news-3">
              <img
                className="news-4"
                alt="News"
                src="src/assets/news2.jpg"
                onClick={() =>
                  popUp(
                    '52nd AAADEC',
                    'src/assets/news2.jpg',
                    'JUST IN The Annual Architecture, Arts, Design, Exhibition and Competitions (AAADEC) has been officially moved to June 29 and 30 due to the financial difficulties that we ran into. We would like to apologize for any inconveniences that the unexpected scheduling modifications have caused. Keep checking for further updates to keep you posted!'
                  )
                }
              />
              <div className="text-wrapper-3">52nd AAADEC</div>
              <p className="text-wrapper-4">
                JUST IN The Annual Architecture, Arts, Design, Exhibition and
                Competitions (AAADEC) has been officially moved to June 29 and
                30 due to the financial difficulties that we ran into. We would
                like to apologize for any inconveniences that the unexpected
                scheduling modifications...
              </p>
              <img className="line" alt="Line" src="line-2.png" />
            </div>
            <div className="news-5">
              <img
                className="news-6"
                alt="News"
                src="src/assets/news3.jpg"
                onClick={() =>
                  popUp(
                    'CAFA WALK',
                    'src/assets/news3.jpg',
                    '“San ka bro?” “May ganap raw sa CAFA” “G?” TARA NA HERE! To kickstart the 52nd AAADEC with the there DAGYAW: Tungo sa Nagkakaisang Bayan, the CAFA Council invites you to come and join us in this year’s CAFA WALK 2023. Parade headed by TUP Kaliningan Drum and Lyre? G! Fun Opening Ceremony? G! The program will be held at the TUP Grounds on June 29, 2023 from 9:00 AM to 10:00 AM. We hope to see you there, CAFAtids!'
                  )
                }
              />
              <div className="text-wrapper-5">CAFA WALK</div>
              <p className="text-wrapper-6">
                Counting the Days Till the Big Day! Save the date and prepare to
                be enthralled as “KULTURA SA TELA: Philippine Culture Through
                Fashion redefines the essence of style and culture. Dont miss
                this extraordinary event that will ignite your senses and leave
                you inspired...
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
