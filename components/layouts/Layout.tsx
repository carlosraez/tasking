import { FC, ReactNode } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Navbar } from "../ui/Navbar";
import { Sidebar } from "../ui/Sidebar";

interface Props {
  title?: string;
  children?: ReactNode;
}

export const Layout: FC<Props> = ({ title = "Tasking", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ paddingTop: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
