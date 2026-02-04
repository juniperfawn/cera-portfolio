import type { StatProps } from "../stat/stat.types";

export default function Stat({ title, stats }: StatProps) {
  return (
    <div className="uppercase font-mono flex flex-col gap-2">
      <p>{title}</p>
      <div className="text-pf-gray-01 flex flex-col gap-2">
        {stats.map((stat, index) => (
          <p key={index}>{stat}</p>
        ))}
      </div>
    </div>
  );
}
