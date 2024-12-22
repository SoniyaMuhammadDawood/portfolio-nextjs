import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/app/components/card"
import Image from 'next/image'
import Link from 'next/link'

const Project= () => {

  const project=[
    {
      name:"Travel Website",
      detail:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat.",
      link:"https://www.linkedin.com/posts/soniya-dawood-442436307_embarking-on-my-journey-as-a-budding-developer-activity-7191374755868925953-ly34?utm_source=share&utm_medium=member_desktop",
      image:"travelWeb.jpg",
    },
    {
      name:"Dynamic Resume builder app",
      detail:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat.",
      link:"https://dynamic-resume-builder-soniya.vercel.app/",
      image:"resume s.jpg",
    },
    {
      name:"Facebook login page clone",
      detail:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat.",
      link:"https://www.linkedin.com/posts/soniya-dawood-442436307_project-update-facebook-login-page-clone-activity-7249127998803595264-_CFR?utm_source=share&utm_medium=member_desktop",
      image:"FB.jpg",
    },
   
    {
      name:"Day Night effect animation",
      detail:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat cold-pressed sriracha leggings jianbingmicrodosing tousled waistcoat.",
      link:"https://www.linkedin.com/posts/soniya-dawood-442436307_just-completed-day-night-effect-animation-activity-7211400602298290177-e1ID?utm_source=share&utm_medium=member_desktop",
      image:"city2.jpg",
    },
   
  ];

  return (
    <div>       
              {/* for animation */}
             <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto ">
          <CardHeader>
            <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Projects</CardTitle>   
          </CardHeader>
          <CardContent className="space-y-2">
           <div className="flex flex-wrap -m-4">
      {/* My Portfolio */}
      {project.map((Item, i)=>(

      <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-64">
              <Image
                alt="gallery"
                height={1000}
                width={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`/Assets/pictures/${Item.image}` }
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                <h2 className=" text-lg font-semibold tracking-tight">
                  {Item.name}
                </h2>
                <p className="mt-3 leading-relaxed line-clamp-3">
                 {Item.detail}
                </p>
                <Link href={Item.link} target="_blank" className="text-sm font-medium tracking-tight"> 
               <p className="mt-3 hover:text-blue-500 hover:underline"> View project</p>
                 </Link>
              </div>
            </div>
          </div>

      

        )
      )}
  </div>
 </CardContent>
        
        </Card>
    </div>
  )
}

export default Project
