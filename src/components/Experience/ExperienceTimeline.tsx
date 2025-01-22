import config from "@/payload.config";
import { getPayload } from "payload";
import styles from "./Timeline.module.scss";

const payload = await getPayload({ config });

const ExperienceTimeline = async () => {
  const experiences = await payload.findGlobal({
    slug: "experience",
  });

  return (
    <div className={styles.timeline}>
      {experiences.experience?.map((experience) => (
        <div className={`${styles.container} ${experience.side === 'left' ? styles.left : styles.right}`} key={experience.id}>
          <div className={styles.content}>
            <h2>{experience.company}</h2>
            <p>{experience.title}</p>
            <p>{experience.years}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
