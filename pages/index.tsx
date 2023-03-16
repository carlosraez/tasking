import Head from "next/head";

import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { EntryList } from "@/components/ui/EntryList";
import NewEntry from "@/components/ui/NewEntry";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Tasking">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              <NewEntry />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <CardContent>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
