import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Layout</div>
      <div>{children}</div>
    </div>
  );
}
