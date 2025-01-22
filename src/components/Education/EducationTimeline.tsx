import { getPayload } from "payload";
import config from "@/payload.config";
import styles from "./EducationTimelime.module.scss";
import Image from "next/image";
import { Media } from "@/payload-types";

const payload = await getPayload({ config });

const EducationTimeline = async () => {
  const educations = await payload.find({
    collection: "Education",
  });

  return (
    <div className={styles.container}>
      {educations.docs.map((education) => (
        <div className={styles.card} key={education.id}>
          <div className={styles.details}>
            <h3>{education.DegreeTitle}</h3>
            <h4>{education.Grade}</h4>

            <span>{education.Years}</span>

            <ul>
              {education.Details?.map((detail) => (
                <li key={detail.id}>{detail.Text}</li>
              ))}
            </ul>
          </div>
          <div className={styles.school}>
            {education.Image && (
              <Image
                src={(education.Image as Media).url ?? ""}
                alt={(education.Image as Media).alt}
                width={1200}
                height={800}
              />
            )}
            <h4>{education.SchoolName}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
