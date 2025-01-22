import { BioLink, Media } from "@/payload-types";
import styles from "./BioLinkButton.module.scss";
import Image from "next/image";
import { useMemo } from "react";

interface IBioLinkProps {
  bioLink: BioLink;
}

const BioLinkButton = ({ bioLink }: IBioLinkProps) => {

  const media = useMemo((): Media | undefined => {
    if (!bioLink.Logo) return undefined;

    return bioLink.Logo as Media;
  }, [bioLink.Logo])

  return (
    <a
      href={bioLink["Link Url"]}
      className={styles.button}
      style={{
        color: bioLink["Text Color Hex"] ?? "black",
        backgroundColor: bioLink["Link Type"] === "primary" ? bioLink["Background Color Hex"] ?? "white" : '',
        border: bioLink["Link Type"] === "primary" ? 'none' : `1px solid ${bioLink["Background Color Hex"]}`
      }}
    >
      <span className={styles.name}>{bioLink["Display Text"]}</span>
      {media && (
        <Image
          src={media.url ?? ""}
          width={media.width ?? 240}
          height={media.height ?? 240}
          alt={media.alt}
        />
      )}
    </a>
  );
};

export default BioLinkButton;
