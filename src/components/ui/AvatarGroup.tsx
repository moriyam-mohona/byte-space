import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarGroupProps {
  avatars: string[];
  badgeText?: string;
  className?: string;
  size?: number;
}

export function AvatarGroup({
  avatars,
  badgeText,
  className,
  size = 32,
}: AvatarGroupProps) {
  return (
    <div className={cn("flex items-center -space-x-2", className)}>
      {avatars.map((src, index) => (
        <div
          key={index}
          className="relative inline-block w-8 h-8 rounded-full overflow-hidden ring-2 ring-white bg-neutral-200 shrink-0"
          style={{ width: size, height: size }}
        >
          <Image
            src={src}
            alt={`Student ${index + 1}`}
            fill
            sizes={`${size}px`}
            className="object-cover"
          />
        </div>
      ))}
      {badgeText && (
        <div
          className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-neutral-950 font-bold text-xs ring-2 ring-white shrink-0 select-none"
          style={{ width: size, height: size }}
          aria-label={`${badgeText} more students`}
        >
          {badgeText}
        </div>
      )}
    </div>
  );
}
