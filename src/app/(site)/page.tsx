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
import { unstable_cache } from "next/cache";

export const dynamic = 'force-static'

const payload = await getPayload({ config });

const getBio = unstable_cache(
  async (): Promise<Bio> => payload.findGlobal({ slug: "bio" }),
  ["bio-global"],
  { tags: ["payload", "bio"] },
);

const getSkills = unstable_cache(
  async (): Promise<ISkill> => payload.findGlobal({ slug: "skills" }),
  ["skills-global"],
  { tags: ["payload", "skills"] },
);

const getBioLinks = unstable_cache(
  async () => payload.find({ collection: "BioLink" }),
  ["bio-links"],
  { tags: ["payload", "bio-links"] },
);

const getProjects = unstable_cache(
  async () => payload.find({ collection: "Project", sort: "sortOrder" }),
  ["projects"],
  { tags: ["payload", "projects"] },
);

export default async function Home() {
  const [details, skills, bioLinks, projects] = await Promise.all([
    getBio(),
    getSkills(),
    getBioLinks(),
    getProjects(),
  ]);

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
