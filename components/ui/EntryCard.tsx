import { UIContext } from "@/context/ui";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DragEvent, FC, useContext } from "react";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDraggin } = useContext(UIContext);
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    startDragging();
    event.dataTransfer.setData("text", entry._id);
  };

  const onDragEnd = () => {
    endDraggin();
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">
            {new Date(entry.createdAt).toLocaleString()}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
