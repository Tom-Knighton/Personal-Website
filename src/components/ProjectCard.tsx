import Pill from "./Pill";

export interface Project {
  projectName: string;
  projectDesc: string;
  projectImageNames?: string[] | null;
  projectTags?: string[] | null;
  githubLink?: string;
  appStoreLink?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="shadow-xl rounded-md bg-darkgraylight w-full my-7 p-5">
      <h3 className="">{project.projectName}</h3>
      {project.projectImageNames && (
        <div className="m-3">
          <img
            src={require(`../assets/img/${project.projectImageNames[0]}`).default}
            className="rounded-md shadow-xl md:h-80 m-auto"
          />
        </div>
      )}
      <div>
        <p className="whitespace-pre-wrap">{project.projectDesc}</p>
      </div>

      {project.projectTags && (
        <div className="flex flex-row flex-wrap space-x-4 justify-center mt-3">
          {project.projectTags.map((tag) => (
            <Pill title={tag} key={tag} />
          ))}
        </div>
      )}

      <div className="flex flex-col space-y-4 justify-center mt-3">
        {project.githubLink && (
          <a
            className="gitbutton"
            href={project.githubLink}
            target="_blank"
          >
            GitHub
          </a>
        )}
        {project.appStoreLink && (
          <a
            className="appStoreButton"
            href={project.appStoreLink}
            target="_blank"
          >
            View on App Store
          </a>
        )}
      </div>
    </div>
  );
}
