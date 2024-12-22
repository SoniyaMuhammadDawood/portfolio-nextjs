
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/app/components/tabs"
  import Experiance from "../Experiance"
  import Skills from "../Skills"
  import Project from "../Project"
  import Education from "../Education"
  import Contact from "../Contact"
  
  
  
  export function Detail() {
    return (
      <Tabs defaultValue="education" className="w-full p-6">
        <TabsList className="grid w-full grid-cols-5">
  
          {/* Tabs triger button */}
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="project">Project</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
          {/* Tabs content here */}
        
        {/* Education */}
        <TabsContent value="education">
          <Education />
        </TabsContent>
  
        {/* Experiance */}
        <TabsContent value="experience">
          < Experiance />
          </TabsContent>
  
        {/* Skills */}
        <TabsContent value="skills">
          <Skills />
          </TabsContent>
  
        {/* Projects */}
        <TabsContent value="project">
          <Project />
          </TabsContent>
          
        {/* Contact */}
        <TabsContent value="contact">
          <Contact />
          </TabsContent>
      
      </Tabs>
    )
  }
  