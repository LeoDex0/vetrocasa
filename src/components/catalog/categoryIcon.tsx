import { DoorClosed, DoorOpen, PanelsTopLeft, ShieldCheck, MoveHorizontal } from "lucide-react";

export function CategoryGlyph({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  switch (category) {
    case "finestre-pvc":
      return <PanelsTopLeft strokeWidth={1.1} className={className} />;
    case "porte-pvc":
      return <DoorOpen strokeWidth={1.1} className={className} />;
    case "porte-blindate":
      return <ShieldCheck strokeWidth={1.1} className={className} />;
    case "sistemi-scorrevoli":
      return <MoveHorizontal strokeWidth={1.1} className={className} />;
    case "porte-tecniche-pvc":
    default:
      return <DoorClosed strokeWidth={1.1} className={className} />;
  }
}
