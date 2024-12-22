import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/app/components/card"

const Experience = () => {

  
  const experience=[
  //My Experience
  {
      compName:"XYZ Limited Co.",
      dateStart:"Oct - 2023",
      dateEnd:"dec -2024",
      position:"General manager",
      details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
      work:["develop there official website", "make e-commerce website for client", "Have contributed on the team task"]
  },
  //My Experience
  {
      compName:"ABC Limited Co.",
      dateStart:"Oct - 2023",
      dateEnd:"dec -2024",
      position:"General manager",
      details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
      work:["develop there official website", "make e-commerce website for client", "Have contributed on the team task"]
  },
  //My Experience
  {
      compName:"XYZ Limited Co.",
      dateStart:"Oct - 2023",
      dateEnd:"dec -2024",
      position:"General manager",
      details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
      work:["develop there official website", "make e-commerce website for client", "Have contributed on the team task"]
  },


]

  return (
    <div>       
              {/* for animation */}
             <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto ">
          <CardHeader>
            <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Experience</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2">
<div className="-my-8 divide-y-2 divide-gray-100">
{experience.map((item, i)=>(
<div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
    <span className="font-semibold title-font text-gray-700 uppercase">
      {item.position}
    </span>
    <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
  </div>
  <div className="md:flex-grow">
    <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
      {item.compName}
    </h2>
  
<ul className="ml-4 list-disc mr-1">
  {item.work?.map((workItem , i)=>(
    <li key={i} >{workItem}</li>
  ))}
  
 
</ul>

  </div>
</div> ))}
</div>
 </CardContent>
        
        </Card>
    </div>
  )
}

export default Experience
