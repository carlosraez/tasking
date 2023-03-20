import { DragEvent, useContext, useMemo, FC } from "react";

import { EntriesContext } from "@/context/entries";
import { EntryStatus } from "@/interfaces";
import { Paper, List } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { UIContext } from "@/context/ui";
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updatedEntry } = useContext(EntriesContext);
  const { isDraggin, endDraggin } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updatedEntry(entry);
    endDraggin();
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={isDraggin ? styles.dragging : ""}
      onDrop={onDropEntry}
      onDragOver={allowDrop}
    >
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 3px",
        }}
      >
        <List sx={{ opacity: isDraggin ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <>
              <EntryCard key={entry._id} entry={entry} />
            </>
          ))}
        </List>
      </Paper>
    </div>
  );
};
