import { cn } from "@/lib/utils";

/** Chatlyn mark + wordmark, laid out exactly as the Figma "Group 2 / Group 3" pair. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-[35px] w-[140px] shrink-0", className)}>
      <span className="absolute top-0 left-0 h-[35px] w-[33.444px]">
        <span className="absolute inset-[-0.36%_-0.37%]">
          <img src="/images/logo-mark.svg" alt="" className="block size-full max-w-none" />
        </span>
      </span>
      <span className="absolute top-0 left-[42.78px] h-[35px] w-[97.222px]">
        <span className="absolute inset-[-0.36%_-0.13%]">
          <img src="/images/logo-wordmark.svg" alt="Chatlyn" className="block size-full max-w-none" />
        </span>
      </span>
    </span>
  );
}
