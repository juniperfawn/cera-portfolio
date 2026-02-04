import type { StatProps } from "../stat/stat.types";

export default function Stat({ title, stats }: StatProps) {
  return (
    <div className="uppercase font-mono flex flex-col gap-2 items-start text-pf-black-01">
      <p>{title}</p>
      <div className="text-pf-gray-01 flex flex-col gap-2 items-start">
        {stats.map((stat, index) => (
          <p key={index}>{stat}</p>
        ))}
      </div>
    </div>
  );
}
