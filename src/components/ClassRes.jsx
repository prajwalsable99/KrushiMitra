import React from 'react'

const ClassRes = (props) => {

    const {algo,acc,prec,recll,f1}=props;
  return (
    <div>
                                
<section className="antialiased bg-gray-700 text-gray-600 h-full px-4">
    <div className="flex flex-col  justify-center h-full py-4">
        
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 py-2">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Classification results for {algo}</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Accuracy</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Precsion</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Recall</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">f1-score </div>
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                        <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={"img"} width="40" height="40" alt="Burak Long"/></div> */}
                                        <div className="font-medium text-gray-800">{acc}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">{prec}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text text-center">{recll}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">{f1}</div>
                                </td>
                                
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ClassRes
