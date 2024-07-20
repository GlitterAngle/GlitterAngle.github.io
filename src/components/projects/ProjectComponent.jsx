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
        img: projectOne,
        description: 'Solo frontend project created with JS HTML and CSS',
        links: [{ href: 'https://github.com/GlitterAngle/Pong', text: 'Code' }]
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
        img: projectThree,
        description: 'Fullstack project created with ReactJS MongoDB and NodeJS',
        links: [
            { href: 'https://github.com/GlitterAngle/life-choices-server', text: 'Backend Code' },
            { href: 'https://github.com/GlitterAngle/life-choices-frontend', text: 'Frontend Code' }
        ]
    },
    {
        img: projectFour,
        description: 'Fullstack project created with ReactJS Python and SQL',
        links: [
            { href: 'https://github.com/GlitterAngle/Vogue-Estate-Backend', text: 'Backend Code' },
            { href: 'https://github.com/GlitterAngle/Vogue-Estates-FrontEnd', text: 'Frontend Code' }
        ]
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