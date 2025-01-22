"use client";
import { sendEmail } from "@/actions/email";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Contact.module.scss";

interface IContactProps {
  mailTo: string;
}

const ContactMe = ({ mailTo }: IContactProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("email", formData.email);
      formDataObj.append("message", formData.message);
      formDataObj.append("to", mailTo);

      const result = await sendEmail(formDataObj);

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ email: "", message: "" });
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.contact}>
      <h1>Contact Me</h1>
      <span>
        Feel free to contact me at{" "}
        <a href={`mailto:${mailTo}`}>{mailTo}</a> or:
      </span>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
