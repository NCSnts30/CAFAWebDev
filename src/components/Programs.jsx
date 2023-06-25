import React from 'react'
import logo from '../assets/cafaLogo.png'

function Programs() {
  return (
    <div>
      <div className="faculty">
        <div className="text-3xl text-white">PROGRAMS</div>
      </div>
      <div className="flex justify-center items-center py-8">
        <div className="flex justify-center items-center rounded-lg bg-red-300 p-1 mx-1">
          <div className="text-center text-3xl font-bold" id="dean-section">
            UNDERGRADUATE PROGRAMS
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <div className="flex flex-wrap justify-center">
          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
            <div className="flex justify-center">
              <div className="w-32 h-32">
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={logo}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">BSA</div>
              <p className="text-gray-700 font-bold text-base">
                BACHELOR OF SCIENCE IN ARCHITECTURE
              </p>
            </div>
          </div>

          <div className="flex justify-center bg-white">
            <div className="flex flex-wrap justify-center">
              <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32">
                    <img
                      className="w-full h-full rounded-full object-cover object-center"
                      src={logo}
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 text-red-800">
                    B FA
                  </div>
                  <p className="text-gray-700 font-bold text-base">
                    BACHELOR OF FINE ARTS
                  </p>
                </div>
              </div>

              <div className="flex justify-center bg-white">
                <div className="flex flex-wrap justify-center">
                  <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                    <div className="flex justify-center">
                      <div className="w-32 h-32">
                        <img
                          className="w-full h-full rounded-full object-cover object-center"
                          src={logo}
                          alt="Profile Image"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 text-red-800">
                        BGT-AT
                      </div>
                      <p className="text-gray-700 font-bold text-base">
                        BACHELOR IN GRAPHICS TECHNOLOGY <br />- ARCHITECTURE
                        TECHNOLOGY
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center bg-white">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                        <div className="flex justify-center">
                          <div className="w-32 h-32">
                            <img
                              className="w-full h-full rounded-full object-cover object-center"
                              src={logo}
                              alt="Profile Image"
                            />
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="font-bold text-xl mb-2 text-red-800">
                            BGT - ID
                          </div>
                          <p className="text-gray-700 font-bold text-base">
                            BACHELOR IN GRAPHICS TECHNOLOGY <br />- INDUSTRIAL
                            DESIGN
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center bg-white">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                        <div className="flex justify-center">
                          <div className="w-32 h-32">
                            <img
                              className="w-full h-full rounded-full object-cover object-center"
                              src={logo}
                              alt="Profile Image"
                            />
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="font-bold text-xl mb-2 text-red-800">
                            BGT - MDT
                          </div>
                          <p className="text-gray-700 font-bold text-base">
                            BACHELOR IN GRAPHICS TECHNOLOGY <br />- MECHANICAL
                            DRAFTING TECHNOLOGY
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex justify-center items-center py-8">
        <div className="flex justify-center items-center rounded-lg bg-red-300 p-1 mx-1">
          <div className="text-center text-3xl font-bold" id="dean-section">
            GRADUATE PROGRAMS
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <div className="flex flex-wrap justify-center">
          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
            <div className="flex justify-center">
              <div className="w-32 h-32">
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={logo}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                MASTERS IN ARCHITECTURE
              </div>
              <p className="text-gray-700 font-bold text-base">
                CONSTRUCTION <br />- TECHNOLOGY MANAGEMENT
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
            <div className="flex justify-center">
              <div className="w-32 h-32">
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={logo}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                MASTERS IN GRAPHICS TECHNOLOGY
              </div>
              <p className="text-gray-700 font-bold text-base">MGT</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default Programs
