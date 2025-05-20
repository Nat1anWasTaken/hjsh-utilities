"use client";

import "@mantine/core/styles.css";
import "material-symbols";

import { AppShell, ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import React from "react";
import Header from "./components/header";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme={"dark"}>
          <AppShell padding={"md"} header={{ height: 60 }}>
            <AppShell.Header>
              <Header />
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
