import { Bio } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import styles from "./AboutMe.module.scss";

interface IAboutMeProps {
  bio: Bio["longBioText"];
}

const AboutMe = ({ bio }: IAboutMeProps) => {
  return (
    <section className={styles.container} id="about">
      <h1>About Me:</h1>
      <RichText data={bio!} />
    </section>
  );
};

export default AboutMe;
