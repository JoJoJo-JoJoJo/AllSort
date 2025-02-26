import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Schedule layout</div>
      <div>{children}</div>
    </div>
  );
}
