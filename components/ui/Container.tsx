import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 ${className}`}>
      {children}
    </div>
  );
}
