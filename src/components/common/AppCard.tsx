// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";

// import type { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
//   className?: string;
// }

// export default function AppCard({
//   children,
//   className,
// }: Props) {
//   return (
//     <Card className={cn("rounded-2xl p-6 shadow-sm", className)}>
//       {children}
//     </Card>
//   );
// }

import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface Props {

  children: ReactNode;

  className?: string;

}

export default function AppCard({

  children,

  className,

}: Props) {

  return (

    <Card
      className={cn(
        "rounded-2xl p-6 shadow-sm",
        className
      )}
    >

      {children}

    </Card>

  );

}