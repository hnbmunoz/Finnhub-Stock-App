import { Header } from "./Panels/Header";
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout