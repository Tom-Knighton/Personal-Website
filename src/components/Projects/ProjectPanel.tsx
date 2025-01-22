import Image from "next/image";
import styles from "./ProjectPanel.module.scss";
import { Media, Project } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface IProjectPanelProps {
  project: Project;
}

const ProjectPanel = ({ project }: IProjectPanelProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h3>{project.name}</h3>
        <RichText data={project.description} />
        <div style={{ flex: 1 }} />
        <div className={styles.pills}>
          {project.pills?.map((pill, index) => (
            <div
              className="bg-blue-300 bg-opacity-20 shadow-xl rounded-full px-5 py-1 inline-block my-2"
              key={index}
            >
              <p>{pill.text}</p>
            </div>
          ))}
        </div>
        {project.gitHubLink && <button>GitHub</button>}
      </div>
      <div className={styles.image}>
        <Image
          src={(project.image as Media).url ?? ""}
          alt={(project.image as Media).alt}
          width={1500}
          height={1500}
        />
      </div>
    </div>
  );
};

export default ProjectPanel;
