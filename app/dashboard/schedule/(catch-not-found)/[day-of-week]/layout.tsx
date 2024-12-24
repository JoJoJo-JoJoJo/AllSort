import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Day of week layout</div>
      <div>{children}</div>
    </div>
  );
}
