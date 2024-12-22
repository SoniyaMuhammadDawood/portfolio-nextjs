import React from 'react'
import { FaCheckSquare } from "react-icons/fa";


function MobileSkills() {
  const skills = [
      {
        name:"HTML",
        detail:"100%",

      },
      {
        name:"CSS",
        detail:"90%",

      },
      {
        name:"Typescript/Javascript",
        detail:"70%",

      },
      {
        name:"Nodejs",
        detail:"60%",

      },
      {
        name:"Python",
        detail:"0%",

      },
    
    ];

  return (
    <div className=" w-full p-5" >
        <h2 className="mb-4 scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Skills
    </h2>
      {/* HTML */}
      {skills.map((item, i)=>(
          <div key={i} className=" p-4 w-full md:w-1/3 ">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                
                <FaCheckSquare className="text-lg font-bold text-white" />
    
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
               {item.name}
                </h2>
              </div>
    
              <div className="w-full h-1 rounded-lg bg-gray-500 ">
                  <div className="w-[100%] h-1 rounded-lg bg-blue-500 "/>
                </div>
                <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">{item.detail}</h3>
    
            </div>
        
          ))}
    </div>
  )
}

export default MobileSkills
