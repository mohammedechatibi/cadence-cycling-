import { MARKERS } from "@/lib/strength";

const TONE = {
  Strong: "text-accent",
  Modest: "text-foreground/65",
  Little: "text-muted-foreground/50",
};

export default function MarkerTable() {
  return (
    <div className="overflow-x-auto rounded-sm border border-border">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <thead>
          <tr className="bg-secondary/60">
            <th className="label-mono px-5 py-4 font-normal text-muted-foreground">
              What we want to keep
            </th>
            <th className="label-mono px-5 py-4 font-normal text-muted-foreground">
              Cycling
            </th>
            <th className="label-mono px-5 py-4 font-normal text-muted-foreground">
              Lifting
            </th>
          </tr>
        </thead>
        <tbody>
          {MARKERS.map((row, index) => (
            <tr
              key={row.marker}
              className={index % 2 === 1 ? "bg-card/60" : "bg-card/20"}
            >
              <td className="border-t border-border px-5 py-3.5 text-[13.5px] text-foreground/85">
                {row.marker}
              </td>
              <td
                className={`border-t border-border px-5 py-3.5 text-[13px] ${TONE[row.ride]}`}
              >
                {row.ride}
              </td>
              <td
                className={`border-t border-border px-5 py-3.5 text-[13px] ${TONE[row.lift]}`}
              >
                {row.lift}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}