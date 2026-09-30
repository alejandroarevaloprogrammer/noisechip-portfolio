"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

const projectTypes = [
  "Characters",
  "Environments",
  "UI",
  "Animations",
  "Other",
];

export default function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setNotice(
      "Online submissions are not available yet. Please contact me at contact@noisechip.com.",
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.field}>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="project-type">
          Project Type
          <span className={styles.optional}>Optional</span>
        </label>

        <select
          id="project-type"
          name="projectType"
          defaultValue=""
        >
          <option value="">Select a project type</option>

          {projectTypes.map((type) => (
            <option
              key={type}
              value={type}
            >
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows={8}
          required
        />
      </div>

      <button
        type="submit"
        className={styles.submit}
      >
        <span>Send Message</span>
        <span aria-hidden="true">→</span>
      </button>

      {notice && (
        <p
          className={styles.notice}
          role="status"
        >
          {notice}
        </p>
      )}
    </form>
  );
}