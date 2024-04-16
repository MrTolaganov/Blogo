import { Box } from "@mui/material";
import { Footer, Navbar } from "../components";
import { LayoutProps } from "./layout.props";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </>
  );
}
