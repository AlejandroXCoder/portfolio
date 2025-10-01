import { useMemo } from "react";
import { Cloud, renderSimpleIcon, type ICloud } from "react-icon-cloud";
import * as si from "simple-icons/icons";
import type { SimpleIcon } from "simple-icons";

type IconCloudProps = {
  slugs: string[];
  size?: number;
  className?: string;
  options?: ICloud["options"];
  iconClassName?: string;
};

export function IconCloud({ slugs, size = 42, className, options, iconClassName }: IconCloudProps) {
  const icons = useMemo(() => {
    const getIcon = (slug: string): SimpleIcon | undefined => {
      // simple-icons uses export names like siReact, siNextdotjs, etc.
      const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof si;
      const icon = si[key] as unknown as SimpleIcon | undefined;
      return icon;
    };

    return slugs
      .map(getIcon)
      .filter((i): i is SimpleIcon => Boolean(i))
  .map((icon) =>
    renderSimpleIcon({
          icon,
          size,
          aProps: {
      className: iconClassName ?? "transition-transform duration-200 will-change-transform hover:scale-110 focus:scale-110",
            target: "_blank",
            rel: "noopener noreferrer",
            title: icon.title,
          },
        })
      );
  }, [slugs, size, iconClassName]);

  const cloudOptions: ICloud["options"] = {
    wheelZoom: false,
    imageScale: 2,
    reverse: true,
    tooltip: "native",
    clickToFront: 500,
    ...(options ?? {}),
  };

  return (
    <div className={className}>
  <Cloud options={cloudOptions}>{icons}</Cloud>
    </div>
  );
}
