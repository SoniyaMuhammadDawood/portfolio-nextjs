import React from 'react'


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/app/components/card"

const Education = () => {

  
const education=[
  //My education
  {
      uniName:"Karachi university",
      date:"Oct - 2022",
      field:"Bachlors in commerce",
      details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
  },

// my Education
{
  uniName:"Karachi College",
  date:"sep - 2020",
  field:"Intermediate in Commerce",
  details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
},

// my Education
{
  uniName:"CMS Alumni Govt college karachi",
  date:"sep - 2018",
  field:"Matric",
  details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
},
]

  return (
    <div>       
              {/* for animation */}
             <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto ">
          <CardHeader>
            <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Education</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2">
          <div  className="-my-8 divide-y-2 divide-gray-100">

    {education.map((Item, i)=>(

<div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
    <span className="font-semibold title-font text-gray-700 uppercase">
      {Item.field}
    </span>
    <span className="mt-1 text-gray-500 text-sm">{Item.date}</span>
  </div>
  <div className="md:flex-grow">
    <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
      {Item.uniName}
    </h2>
    <p className="leading-relaxed ">
     {Item.details}
    </p>
  
  </div>
</div>

    ))}

</div>

 </CardContent>
        
        </Card>
    </div>
  )
}

export default Education
