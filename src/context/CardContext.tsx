import { Dispatch, SetStateAction, createContext, useState, ReactNode } from "react";


export type ProjectsDetail = {
    name: string;
    serialId: string;
    region: string;
    }[];




    
export interface ProjectDetailContextInterface {
    projectDetail: ProjectsDetail,
    setProjectDetail: Dispatch<SetStateAction<ProjectsDetail>>
}

const defaultState = {
    projectDetail:[
        {
           name: 'MSR',
           serialId: 'herodhbsdkjn',
           region: 'sadkjjkjad' 
        },
        
    ],
    setProjectDetail: (projectDetail: ProjectsDetail) => {}
} as ProjectDetailContextInterface

export const ProjectsDetailContext = createContext(defaultState);

type ProjectsDetailProviderProps = {
    children: ReactNode
}

export default function ProjectsDetailProvider({children}: ProjectsDetailProviderProps)
{

    const [projectDetail, setProjectDetail] = useState<ProjectsDetail>([
        {
            name: 'MSR',
            serialId: 'herodhbsdkjn',
            region: 'sadkjjkjad' 
         },
         
    ])
    return (
        <ProjectsDetailContext.Provider value = {{ projectDetail, setProjectDetail}}>
            {children}
        </ProjectsDetailContext.Provider  >
    )

}
