import Head from "next/head";

import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Tasking">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
