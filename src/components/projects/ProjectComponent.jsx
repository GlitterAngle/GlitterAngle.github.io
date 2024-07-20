import React, { forwardRef } from 'react'
import projectOne from '../../assets/projects/projectOne.png'
import projectTwo from '../../assets/projects/prjectTwo.png'
import projectThree from '../../assets/projects/projectThree.png'
import projectFour from '../../assets/projects/projectFour.png'
import projectFive from '../../assets/projects/projectFive.png'
import './ProjectComponent.css'

const projects = [
    {
        img: projectFive,
        description: 'Working with a small team I handled the implimentation and integration of data form Sanity CMS',
        links: [{href:'https://www.offbend.com/'}]
    },
    {
        img: projectFour,
        description: 'Fullstack project created with ReactJS Python and SQL',
        links: [
            { href: 'https://github.com/GlitterAngle/Vogue-Estate-Backend', text: 'Backend Code' },
            { href: 'https://github.com/GlitterAngle/Vogue-Estates-FrontEnd', text: 'Frontend Code' }
        ]
    },
    {
        img: projectThree,
        description: 'Fullstack project created with ReactJS MongoDB and NodeJS',
        links: [
            { href: 'https://github.com/GlitterAngle/life-choices-server', text: 'Backend Code' },
            { href: 'https://github.com/GlitterAngle/life-choices-frontend', text: 'Frontend Code' }
        ]
    },
    {
        img: projectTwo,
        description: 'Solo fullstack project created with JS MongoDB and NodeJS',
        links: [
            { href: 'https://github.com/GlitterAngle/Recipe-Backend-', text: 'Backend Code' },
            { href: 'https://github.com/GlitterAngle/Recipe-Frontend', text: 'Frontend Code' }
        ]
    },
    {
        img: projectOne,
        description: 'Solo frontend project created with JS HTML and CSS',
        links: [{ href: 'https://github.com/GlitterAngle/Pong', text: 'Code' }]
    }
];

const ProjectComponent = forwardRef(() => {
    return (
        <div id='projects' className='mt-20 space-y-12'>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`w-[900px] h-[600px] relative rounded-[12px] ${index % 2 === 0 ? 'ml-0' : 'ml-auto'}`}
                >
                    <div className='bg-[#1885819d] w-full h-full rounded-[12px] relative'>
                        <div className='bg-[#00c6bf91] w-[880px] h-[580px] absolute top-[10px] left-[10px] rounded-[12px] flex flex-col items-center p-4'>
                            <img src={project.img} className="mb-4 max-w-full max-h-full object-cover rounded-[12px]" alt={`Project ${index + 1}`} />
                            <p>{project.description}</p>
                            {project.links.map((link, linkIndex) => (
                                <a key={linkIndex} href={link.href} className='underline mr-2'>{link.text}</a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
});




export default ProjectComponent


// import React, { forwardRef } from 'react'
// import projectOne from '../../assets/projects/projectOne.png'
// import projectTwo from '../../assets/projects/prjectTwo.png'
// import projectThree from '../../assets/projects/projectThree.png'
// import projectFour from '../../assets/projects/projectFour.png'
// import './ProjectComponent.css'

// const ProjectComponent = forwardRef(() => {
//     return (
//         <div id='projects' className='mt-20'>
//             <div >
//                 <div id='outerBorder'>
//                     <div id='innerBorder'>
//                         <div className=" row-span-1 p-4 " id='project1'>
//                             <img src={projectOne}></img>
//                         </div>
//                         <div>
//                             <p>Solo frontend project created with JS HTML and CSS</p>
//                             <a href='https://github.com/GlitterAngle/Pong' className='underline'>Code</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div id='rightOuterBorder'>
//                     <div id='rightInnerBorder'>
//                         <div className=" rounded-full object-cover row-span-1 p-4">
//                             <img src={projectTwo} className='image'></img>
//                         </div> 
//                         <div>
//                     <p>Solo fullstack project created with JS MongoDB and NodeJS</p>
//                     <a href='https://github.com/GlitterAngle/Recipe-Backend-' className='underline mr-2'>Backend Code</a>

//                     <a href='https://github.com/GlitterAngle/Recipe-Frontend' className='underline'>Frontend Code </a>
//                 </div>
//                     </div>
//                 </div>
               
//                 <div id='outerBorder'>
//                     <div id='innerBorder'>
//                         <div className=" rounded-full row-span-1 place-self-center p-4">
//                             <img src={projectThree}></img>
//                         </div><p>Fullstack project created with ReactJS MongoDB and NodeJS</p>
//                     <a href='https://github.com/GlitterAngle/life-choices-server' className='underline mr-2'>Backend Code</a>
//                     <a href='https://github.com/GlitterAngle/life-choices-frontend' className='underline'>Frontend Code </a>
//                     </div>
                    
//                 </div>
//                 <div id='rightOuterBorder'>
//                     <div id='rightInnerBorder'>
//                         <div className=" rounded-full row-span-1 place-self-center p-4">
//                             <img src={projectFour}></img>
//                         </div><p>Fullstack project created with ReactJS Python and SQL</p>
//                     <a href='https://github.com/GlitterAngle/Vogue-Estate-Backend' className='underline mr-2'>Backend Code</a>
//                     <a href='https://github.com/GlitterAngle/Vogue-Estates-FrontEnd' className='underline'>Frontend Code </a>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     )
// })

// export default ProjectComponent