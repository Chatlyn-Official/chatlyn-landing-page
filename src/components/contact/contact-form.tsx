"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/components/motion/reveal";
import { submitContact } from "@/lib/api";
import { cn } from "@/lib/utils";

type Values = { name: string; email: string; company: string; inquiry: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", email: "", company: "", inquiry: "", message: "" };
const INQUIRY_TYPES = ["Sales", "Support", "Demo", "Partnership", "Billing"];

function validate(v: Values): Errors {
  const e: Errors = {};
  // Limits match the backend (ContactSubmissionCreate): name 2-100, company/inquiry 1-100, message up to 2000.
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.company.trim()) e.company = "Please enter your company name.";
  if (!v.inquiry.trim()) e.inquiry = "Please choose or type an inquiry type.";
  if (v.message.trim().length < 10) e.message = "Please write a short message (at least 10 characters).";
  return e;
}

/* Figma "Input": label DM Sans 16, field #f6f6f6 / 2px #d9d9d9 / radius 8, text Inter 14 lh 24. */
const fieldClass =
  "w-full rounded-[8px] border-2 border-[#d9d9d9] bg-[#f6f6f6] px-4 py-2 font-inter text-sm leading-6 text-black outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-black/40 hover:border-[#c4c4c4] focus:border-forest focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,73,48,0.08)]";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <label htmlFor={id} className="font-dm text-base leading-[1.2] font-medium text-ink">
        {label}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error ? (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden font-dm text-[13px] leading-[1.2] text-[#c0392b]"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failure, setFailure] = useState("");
  const inFlight = useRef(false); // blocks a second submit before React re-renders the disabled button

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    if (failure) setFailure("");
  };

  const errorProps = (key: keyof Values) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length || inFlight.current) return;
    inFlight.current = true;
    setSending(true);
    setFailure("");
    const result = await submitContact({
      name: values.name.trim(),
      email: values.email.trim().toLowerCase(),
      company: values.company.trim(),
      inquiry: values.inquiry.trim(),
      message: values.message.trim(),
    });
    inFlight.current = false;
    setSending(false);
    if (result.ok) setSent(true);
    else setFailure(result.message);
  }

  return (
    <div className="relative w-full overflow-clip rounded-[14px] border border-[#dfdfdf] bg-white p-6 shadow-[0px_0px_50px_0px_rgba(0,73,48,0.1)] sm:p-[42px] lg:w-[666px]">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex min-h-[425px] flex-col items-center justify-center gap-5 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
              className="grid size-16 place-items-center rounded-full bg-[rgba(0,73,48,0.1)]"
            >
              <svg viewBox="0 0 24 24" className="size-8 text-forest" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <motion.path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                />
              </svg>
            </motion.span>
            <div className="flex flex-col gap-2">
              <h2 className="font-manrope text-[28px] leading-[1.2] font-bold text-ink">Thank you, {values.name.trim().split(" ")[0]}!</h2>
              <p className="max-w-[420px] font-dm text-base leading-[1.3] font-medium text-body">
                We’ve received your message. The Chatlyn team will get back to you at{" "}
                <span className="text-ink">{values.email.trim()}</span> shortly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setValues(EMPTY);
                setSent(false);
              }}
              className="font-dm text-base font-semibold text-forest underline-offset-4 transition-colors hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex w-full flex-col gap-[26px]">
              <div className="flex w-full flex-col gap-[26px] sm:flex-row sm:items-start sm:gap-6">
                <Field id="name" label="Full Name" error={errors.name}>
                  <input id="name" maxLength={100} name="name" autoComplete="name" placeholder="Enter your full name" value={values.name} onChange={set("name")} className={cn(fieldClass, errors.name && "border-[#e08a80]")} {...errorProps("name")} />
                </Field>
                <Field id="email" label="Company Email" error={errors.email}>
                  <input id="email" name="email" maxLength={254} type="email" autoComplete="email" placeholder="company@gmail.com" value={values.email} onChange={set("email")} className={cn(fieldClass, errors.email && "border-[#e08a80]")} {...errorProps("email")} />
                </Field>
              </div>
              <div className="flex w-full flex-col gap-[26px] sm:flex-row sm:items-start sm:gap-6">
                <Field id="company" label="Company Name" error={errors.company}>
                  <input id="company" name="company" maxLength={100} autoComplete="organization" placeholder="Enter company name" value={values.company} onChange={set("company")} className={cn(fieldClass, errors.company && "border-[#e08a80]")} {...errorProps("company")} />
                </Field>
                <Field id="inquiry" label="Inquiry Type" error={errors.inquiry}>
                  <input id="inquiry" name="inquiry" maxLength={100} list="inquiry-types" placeholder="Sales, Support, Demo..." value={values.inquiry} onChange={set("inquiry")} className={cn(fieldClass, errors.inquiry && "border-[#e08a80]")} {...errorProps("inquiry")} />
                  <datalist id="inquiry-types">
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t} />
                    ))}
                  </datalist>
                </Field>
              </div>
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" name="message" placeholder="Write your message here..." value={values.message} onChange={set("message")} rows={5} maxLength={2000} className={cn(fieldClass, "h-[136px] resize-none", errors.message && "border-[#e08a80]")} {...errorProps("message")} />
              </Field>
            </div>

            <AnimatePresence initial={false}>
              {failure ? (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="-mb-4 w-full rounded-[8px] border border-[#f1c4bd] bg-[#fdf1ef] px-4 py-3 text-center font-dm text-sm leading-[1.3] text-[#a5281b]"
                >
                  {failure}
                </motion.p>
              ) : null}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-[42px] w-[186px] items-center justify-center rounded-full border-[0.7px] border-[rgba(3,24,20,0.49)] bg-forest px-8 py-2 font-dm text-lg leading-[1.2] font-bold text-[#f2f2f2] transition-shadow hover:shadow-[0_10px_24px_-8px_rgba(0,73,48,0.55)] disabled:opacity-80"
            >
              {sending ? (
                <span className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-label="Sending" />
              ) : (
                "Submit"
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
