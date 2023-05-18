import React from 'react'
import { Link } from 'react-router-dom'

const myobj = {

  rates: [
    {
      crop: "rice", rate: 50
    },
    {
      crop: "wheat", rate: 70
    },
    {
      crop: "sugarcane", rate: 20
    },
    {
      crop: "barley", rate: 100
    },
    {
      crop: "cotton", rate: 150
    }
  ]
}

const Market = () => {
  return (
    <section className="py-1 bg-blueGray-50 w-full min-h-full">
      <div className="w-full xl:w-4/12 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Market Prices
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <Link className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" to={'https://agmarknet.gov.in/#skip'} target='_blank'>
                  See all
                </Link>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full border-collapse text-blueGray-700  ">
              <thead className="thead-light ">
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Crop
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Rate
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                </tr>
              </thead>
              <tbody>

                {

                  myobj.rates.map((obj,index)=>{

                    return(
                      <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {obj.crop}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {obj.rate}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">{obj.rate}</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div style={{width:obj.rate}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    )
                  })

                }


              </tbody>
            </table>
          </div>
        </div>
        {/* <iframe src="http://www.google.com/custom?q=&btnG=Search" title="description"></iframe> */}
      </div>


    </section>
  )
}

export default Market
