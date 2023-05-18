import React from 'react'
// import { YearView } from 'react-calendar';

const CropTr = (props) => {
    const {cname,rmse,cyield,r2score}=props;


  return (
    <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={"img"} width="40" height="40" alt="Burak Long"/></div> */}
                                        <div className="font-medium text-gray-800">{cname}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">{r2score}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text text-center">{rmse}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">{cyield.toFixed(2)}</div>
                                </td>
                                
                            </tr>
  )
}

export default CropTr
