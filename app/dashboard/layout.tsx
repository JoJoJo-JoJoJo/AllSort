import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Dashboard layout</div>
      <div>{children}</div>
    </div>
  );
}
