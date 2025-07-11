import BioLinkButton from "@/components/BioLinkButton/BioLinkButton";
import { Bio, Media, Skill as ISkill } from "@/payload-types";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import { getPayload } from "payload";
import styles from "./layout.module.scss";
import AboutMe from "@/components/AboutMe/AboutMe";
import NavBar from "@/components/NavBar/NavBar";
import ProjectPanel from "@/components/Projects/ProjectPanel";
import Skill from "@/components/Skills/Skill";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import EducationTimeline from "@/components/Education/EducationTimeline";
import ContactMe from "@/components/Contact/ContactMe";
import { ToastContainer } from "react-toastify";

export const dynamic = 'force-static'

const payload = await getPayload({ config });

export default async function Home() {
  const details: Bio = await payload.findGlobal({
    slug: "bio",
  });
  const bioLinks = await payload.find({
    collection: "BioLink",
  });
  const projects = await payload.find({
    collection: "Project",
    sort: "createdAt",
  });
  const skills: ISkill = await payload.findGlobal({
    slug: "skills",
  });

  return (
    <div className={styles.body}>
      <section id="home">
        <div className={styles.bio}>
          <Image
            className={styles.image}
            src={(details.profileImg as Media).url ?? ""}
            alt="A picture of myself"
            width={1200}
            height={1600}
          />
          <RichText data={details.shortBioText} className={styles.bioShort} />

          <div className={styles.links}>
            {bioLinks.docs.map((link) => (
              <BioLinkButton key={link.id} bioLink={link} />
            ))}
          </div>
        </div>
      </section>

      <NavBar />

      {details.longBioText && <AboutMe bio={details.longBioText} />}

      <section id="projects">
        <h1>My Projects:</h1>
        {projects.docs.map((project) => (
          <ProjectPanel key={project.id} project={project} />
        ))}
      </section>

      <section id="skills">
        <h1>My Skills:</h1>

        {skills.professional && skills.professional.length > 0 && (
          <>
            <h3>Professional:</h3>
            <span>
              Skills I have experience in through professional work, in addition
              to side projects.
            </span>
            <div className={styles.skillsList}>
              {skills.professional.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </>
        )}
      </section>
      <section id="skills">
        {skills.hobby && skills.hobby.length > 0 && (
          <>
            <h3>Hobby:</h3>
            <span>
              Skills I have experience in through side projects / hobby work
              only
            </span>
            <div className={styles.skillsList}>
              {skills.hobby.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </>
        )}
      </section>
      <section id="experience">
        <h1>Experience:</h1>
        <ExperienceTimeline />
      </section>

      <section id="education">
        <h1>Education:</h1>
        <EducationTimeline />
      </section>

      <section id="contact">
        <ContactMe mailTo={details.contactEmail}/>
      </section>
      <ToastContainer />
    </div>
  );
}
