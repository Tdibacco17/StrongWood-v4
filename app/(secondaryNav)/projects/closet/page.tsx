import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function ClosetsPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("closet");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="closet"/>
}