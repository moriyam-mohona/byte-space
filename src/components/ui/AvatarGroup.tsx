import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarGroupProps {
  avatars: string[];
  badgeText?: string;
  className?: string;
  badgeClassName?: string;
  size?: number;
}

export function AvatarGroup({
  avatars,
  badgeText,
  className,
  badgeClassName,
  size = 32,
}: AvatarGroupProps) {
  return (
    <div className={cn("flex items-center -space-x-3 ", className)}>
      {avatars.map((src, index) => (
        <div
          key={index}
          className="relative inline-block w-16 h-16 rounded-full overflow-hidden bg-neutral-200 shrink-0"
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
          className={cn(
            "relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-400 font-bold text-xs font-body shrink-0 select-none",
            badgeClassName,
          )}
          style={{ width: size, height: size }}
          aria-label={`${badgeText} more students`}
        >
          {badgeText}
        </div>
      )}
    </div>
  );
}
