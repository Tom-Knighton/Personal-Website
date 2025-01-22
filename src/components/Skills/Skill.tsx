import { Media } from "@/payload-types";
import Image from "next/image";
import styles from "./Skill.module.scss";

interface ISkillProps {
  skill: {
    name: string;
    id?: string | null;
    logo: string | Media;
  };
}

const Skill = ({ skill }: ISkillProps) => {
  const media = skill.logo as Media;

  return (
    <div className={styles.container}>
      <Image src={media.url ?? ""} alt={media.alt} width={512} height={512} />
      <span>{skill.name}</span>
    </div>
  );
};

export default Skill;
