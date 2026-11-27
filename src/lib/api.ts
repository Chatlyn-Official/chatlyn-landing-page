/** The Chatlyn backend (same API the app uses). Set NEXT_PUBLIC_API_BASE_URL for local testing. */
export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.chatlyn.in").replace(/\/+$/, "");

/** Where people log in and sign up (the WhatsApp app). */
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.chatlyn.in").replace(/\/+$/, "");

/** Every "Get Started" button goes here. */
export const LOGIN_URL = `${APP_URL}/login`;

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "rate_limited" | "invalid" | "network" | "server"; message: string };

const TIMEOUT_MS = 15_000;

/** Sends the contact form to POST /api/contact-submissions. Never throws. */
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}/api/contact-submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (res.ok) return { ok: true };
    if (res.status === 429) {
      return { ok: false, reason: "rate_limited", message: "Too many messages in a short time. Please wait a minute and try again." };
    }
    if (res.status === 422 || res.status === 400) {
      return { ok: false, reason: "invalid", message: "Some details look wrong. Please check the form and try again." };
    }
    return { ok: false, reason: "server", message: "We couldn't send your message right now. Please try again in a moment." };
  } catch {
    return {
      ok: false,
      reason: "network",
      message: "We couldn't reach Chatlyn. Check your internet connection and try again.",
    };
  } finally {
    clearTimeout(timer);
  }
}
