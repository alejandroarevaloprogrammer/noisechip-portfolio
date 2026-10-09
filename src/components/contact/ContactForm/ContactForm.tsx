
"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

const API_URL = "https://noisechip.com/api/contact.php";

const projectTypes = [
  "Characters",
  "Environments",
  "UI",
  "Animations",
  "Other",
];

type SubmitStatus = "idle" | "sending" | "success" | "error";

type ApiResponse = {
  success: boolean;
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      projectType: String(formData.get("projectType") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    setStatus("sending");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={120}
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
          maxLength={254}
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
            <option key={type} value={type}>
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
          maxLength={5000}
          required
        />
      </div>

      {/* Honeypot: hidden from regular visitors */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={status === "sending"}
      >
        <span>
          {status === "sending" ? "Sending..." : "Send Message"}
        </span>
        <span aria-hidden="true">→</span>
      </button>

      {status === "success" && (
        <p className={styles.notice} role="status">
          Your message has been sent successfully. Thank you for getting
          in touch!
        </p>
      )}

      {status === "error" && (
        <p className={styles.notice} role="alert">
          Something went wrong. Please try again later or contact me at{" "}
          <a href="mailto:contact@noisechip.com">
            contact@noisechip.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
