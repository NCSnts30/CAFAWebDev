import React from 'react'
import orgpic1 from '../assets/orgpic1.png'
import orgpic2 from '../assets/orgpic2.png'
import orgpic3 from '../assets/orgpic3.png'
import a from '../assets/a.png'
import b from '../assets/b.png'
import c from '../assets/c.png'

function Organization() {
  return (
    <div>
      <div className="orgs">
        <div className="text-3xl text-white">ORGANIZATION</div>
      </div>
      <br></br>
      <div className="flex justify-center bg-cover bg-center rounded-lg backdrop-blur-sm bg-white-50 h-56 ml-32 mr-32">
        <div className="relative w-full h-full rounded-l-lg">
          <div className="org-text">
            <div
              className="text-lg absolute top-0 right-0 bg-rose-400 text-white rounded-lg py-2 px-4 w-1/2 h-48 flex items-center justify-end"
              style={{ fontSize: '1.6rem', textAlign: 'right' }}
            >
              ARCHTECTURAL STUDENTS <br /> ASSOCIATION OF THE PHILIPPINES
              <br />
              <br />
              Ar. Kenneth V. Tributo <br />
              Ar. Melduard L. Hernandez
            </div>
          </div>
          <img
            src={orgpic1}
            alt="Organization"
            className="object-cover w-full h-full rounded-l-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={a} alt="Logo" className="h-40" />
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="flex justify-center bg-cover bg-center rounded-l-lg rounded-r-lg backdrop-blur-sm bg-white-50 h-56 ml-32 mr-32">
        <div className="relative w-full h-full rounded-l-lg">
          <div className="org-text">
            <div
              className="text-lg absolute top-0 left-0 bg-rose-400 text-white rounded-lg py-12 px-4 w-1/2 h-48 flex flex-col items-start justify-end"
              style={{ fontSize: '1.6rem', textAlign: 'left' }}
            >
              TECHNOLOGY HOIST RELATED <br /> EXCELLENT ALLIANCE OF DRAFTING
              STUDENTS
              <br />
              <br />
              Prof. Cielo Q. Parafina <br />
            </div>
          </div>
          <img
            src={orgpic2}
            alt="Organization"
            className="object-cover w-full h-full rounded-l-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={b} alt="Logo" className="h-40" />
          </div>
          <div className=""></div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="flex justify-center bg-cover bg-center rounded-l-lg rounded-r-lg backdrop-blur-sm bg-white-50 h-56 ml-32 mr-32">
        <div className="relative w-full h-full rounded-l-lg">
          <div className="org-text">
            <div
              className="text-lg absolute top-0 right-0 bg-rose-400 text-white rounded-lg py-2 px-4 w-1/2 h-48 flex items-center justify-end"
              style={{ fontSize: '1.6rem', textAlign: 'right' }}
            >
              UNITED ARCHITECTS OF THE PHILIPPINES <br /> STUDENTS AUXILIARY -
              TUP CHAPTER
              <br />
              <br />
              Ar. Arjee Louie DC. Jimenez <br />
            </div>
          </div>
          <img
            src={orgpic3}
            alt="Organization"
            className="object-cover w-full h-full rounded-l-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={c} alt="Logo" className="h-40" />
          </div>
          <div className=""></div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default Organization
