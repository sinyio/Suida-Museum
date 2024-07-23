import { FC, ReactNode } from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";

export interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
