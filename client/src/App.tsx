import { List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5002/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h3">2005-Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
