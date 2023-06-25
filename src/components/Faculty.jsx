import React from 'react'
import faculty from '../assets/faculty.png'

function Faculty() {
  return (
    <>
      <div className="faculty">
        <div className="text-3xl text-white">FACULTY AND STAFF</div>
      </div>
      <div className="flex justify-center items-center py-8">
        <div className="flex justify-center items-center rounded-lg bg-red-300 p-1 mx-1">
          <div className="text-center text-3xl font-bold" id="dean-section">
            OFFICE OF THE DEAN
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-8 bg-white">
        <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4">
          <div className="flex justify-center">
            <div className="w-32 h-32">
              <img
                className="w-full h-full rounded-full object-cover object-center"
                src={faculty}
                alt="Profile Image"
              />
            </div>
          </div>
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2 text-red-800">
              Ar. Elpidio T. Balais Jr.,uap
            </div>
            <p className="text-gray-700 font-bold text-base"> College Dean</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <div className="flex justify-center items-center rounded-lg bg-red-300 p-1 mx-1">
          <div className="text-center text-3xl font-bold" id="college-section">
            COLLEGE DEPARTMENT OFFICIALS
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
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Mr. Kristoffer Torralba
              </div>
              <p className="text-gray-700 font-bold text-base">
                College Secretary-CAFA
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
                      src={faculty}
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 text-red-800">
                    Ar. Rosellia Rowena Manzano
                  </div>
                  <p className="text-gray-700 font-bold text-base">
                    Head - Architecture Department
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
                          src={faculty}
                          alt="Profile Image"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 text-red-800">
                        Prof. Ramon T. Dela Cruz
                      </div>
                      <p className="text-gray-700 font-bold text-base">
                        Head - Fine Arts Department
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
                              src={faculty}
                              alt="Profile Image"
                            />
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="font-bold text-xl mb-2 text-red-800">
                            Prof. Elmer M. Sangalang
                          </div>
                          <p className="text-gray-700 font-bold text-base">
                            Head - Graphics Department
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
      <div className="flex justify-center items-center py-8">
        <div className="flex justify-center items-center rounded-lg bg-red-300 p-1 mx-1">
          <div className="text-center text-3xl font-bold" id="faculty-section">
            ARCHITECTURE DEPARTMENT
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
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Ar. Arjee Louie Jimenez
              </div>
              <p className="text-gray-700 font-bold text-base"> </p>
            </div>
          </div>
          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
            <div className="flex justify-center">
              <div className="w-32 h-32">
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Ar. Ariel Tabang Jr.
              </div>
              <p className="text-gray-700 font-bold text-base"> </p>
            </div>
          </div>
          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
            <div className="flex justify-center">
              <div className="w-32 h-32">
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Ar. Melduard Hernandez
              </div>
              <p className="text-gray-700 font-bold text-base"> </p>
            </div>
          </div>

          <br></br>
          <br></br>
          <div className="flex justify-center bg-white">
            <div className="flex flex-wrap justify-center">
              <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32">
                    <img
                      className="w-full h-full rounded-full object-cover object-center"
                      src={faculty}
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 text-red-800">
                    Ar. Rowena Nacion
                  </div>
                  <p className="text-gray-700 font-bold text-base"></p>
                </div>
              </div>
              <div className="flex justify-center bg-white">
                <div className="flex flex-wrap justify-center">
                  <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                    <div className="flex justify-center">
                      <div className="w-32 h-32">
                        <img
                          className="w-full h-full rounded-full object-cover object-center"
                          src={faculty}
                          alt="Profile Image"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 text-red-800">
                        Ar. Shen Kene Cuarte
                      </div>
                      <p className="text-gray-700 font-bold text-base"></p>
                    </div>
                  </div>
                  <div className="flex justify-center bg-white">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                        <div className="flex justify-center">
                          <div className="w-32 h-32">
                            <img
                              className="w-full h-full rounded-full object-cover object-center"
                              src={faculty}
                              alt="Profile Image"
                            />
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="font-bold text-xl mb-2 text-red-800">
                            Ar. Mercedita Balbero
                          </div>
                          <p className="text-gray-700 font-bold text-base"></p>
                        </div>
                      </div>
                      <div className="flex justify-center bg-white">
                        <div className="flex flex-wrap justify-center">
                          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                            <div className="flex justify-center">
                              <div className="w-32 h-32">
                                <img
                                  className="w-full h-full rounded-full object-cover object-center"
                                  src={faculty}
                                  alt="Profile Image"
                                />
                              </div>
                            </div>
                            <div className="px-6 py-4 text-center">
                              <div className="font-bold text-xl mb-2 text-red-800">
                                Ar. Raymond Villa
                              </div>
                              <p className="text-gray-700 font-bold text-base"></p>
                            </div>
                          </div>
                          <div className="flex justify-center bg-white">
                            <div className="flex flex-wrap justify-center">
                              <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
                                <div className="flex justify-center">
                                  <div className="w-32 h-32">
                                    <img
                                      className="w-full h-full rounded-full object-cover object-center"
                                      src={faculty}
                                      alt="Profile Image"
                                    />
                                  </div>
                                </div>
                                <div className="px-6 py-4 text-center">
                                  <div className="font-bold text-xl mb-2 text-red-800">
                                    Ar. Emerson Baquiran
                                  </div>
                                  <p className="text-gray-700 font-bold text-base"></p>
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
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex justify-center items-center py-8">
        <div className="flex justify-center items-center rounded-lg bg-red-300 p-1 mx-1">
          <div className="text-center text-3xl font-bold" id="faculty-section">
            FINE ARTS DEPARTMENT
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
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Prof. Almina T. Tengco-Chan
              </div>
              <p className="text-gray-700 font-bold text-base">
                Associate Professor I
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
                      src={faculty}
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 text-red-800">
                    Prof. Ernes Joseph M. Garcia
                  </div>
                  <p className="text-gray-700 font-bold text-base">
                    Instructor I
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
                          src={faculty}
                          alt="Profile Image"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 text-red-800">
                        Prof. Ferdinand R. Doctolero
                      </div>
                      <p className="text-gray-700 font-bold text-base">
                        Assistant Professor I
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
                              src={faculty}
                              alt="Profile Image"
                            />
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="font-bold text-xl mb-2 text-red-800">
                            Prof. Ramon T. Dela Cruz
                          </div>
                          <p className="text-gray-700 font-bold text-base">
                            Instructor III
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
          <div className="text-center text-3xl font-bold" id="faculty-section">
            GRAPHICS DEPARTMENT
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
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Prof. Lowell Quey S. Fabrigar
              </div>
              <p className="text-gray-700 font-bold text-base">
                Assistant Professor III
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
                      src={faculty}
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 text-red-800">
                    Prof. Remegia C. Jacob
                  </div>
                  <p className="text-gray-700 font-bold text-base">
                    Instructor I
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
                          src={faculty}
                          alt="Profile Image"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 text-red-800">
                        Prof. Danna Rose F. Miciano
                      </div>
                      <p className="text-gray-700 font-bold text-base">
                        Instructor I
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
                              src={faculty}
                              alt="Profile Image"
                            />
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="font-bold text-xl mb-2 text-red-800">
                            Prof. Melvin G. Mojica
                          </div>
                          <p className="text-gray-700 font-bold text-base">
                            Instructor I
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
      <div className="flex justify-center bg-white">
        <div className="flex flex-wrap justify-center">
          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
            <div className="flex justify-center">
              <div className="w-32 h-32">
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Prof. Cielo Q. Parafina
              </div>
              <p className="text-gray-700 font-bold text-base">
                Assistant Professor IV
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
                      src={faculty}
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 text-red-800">
                    Prof. Pax Jerome M. Pedrosa
                  </div>
                  <p className="text-gray-700 font-bold text-base">
                    Instructor I
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
                          src={faculty}
                          alt="Profile Image"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 text-red-800">
                        Prof. Pablo G. Pilar Jr.
                      </div>
                      <p className="text-gray-700 font-bold text-base">
                        Assistant Professor I
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
                              src={faculty}
                              alt="Profile Image"
                            />
                          </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                          <div className="font-bold text-xl mb-2 text-red-800">
                            Prof. Marcelina P. Puga
                          </div>
                          <p className="text-gray-700 font-bold text-base">
                            Instructor I
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
      <div className="flex justify-center bg-white">
        <div className="flex flex-wrap justify-center">
          <div className="w-72 max-w-lg rounded overflow-hidden shadow-lg bg-gray-300 pt-4 mx-4">
            <div className="flex justify-center">
              <div className="w-32 h-32">
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={faculty}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-red-800">
                Prof. Almer M. Sanglang
              </div>
              <p className="text-gray-700 font-bold text-base">
                Associate Professor I
              </p>
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
                    src={faculty}
                    alt="Profile Image"
                  />
                </div>
              </div>
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2 text-red-800">
                  Prof. Kristoffer R. Torralba
                </div>
                <p className="text-gray-700 font-bold text-base">
                  Instructor II
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
    </>
  )
}

export default Faculty
