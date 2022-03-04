import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import defaultImage from "../assets/default.png";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AlertDialog from "./Dialog";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";


export default function AppCardArabic2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, mb: 3, textAlign: "right" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<PhoneIcon />} label="نُصُوصٍ" />
          <Tab icon={<FavoriteIcon />} label="عَرَبِيَّةٍ" />
          <Tab icon={<PersonPinIcon />} label="أَوْلِيَاءِ" />
        </Tabs>
        <CardMedia
          component="img"
          height="194"
          image={defaultImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            أَحْيَانًا ، قَدْ نَحْتَاجُ كَمُدَرِّسِينَ أَوْ أَوْلِيَاءِ أُمُورٍ
            ، لِتَشْكِيلِ نُصُوصٍ عَرَبِيَّةٍ قَدْ تَبْلُغُ مِنْ اَلطُّولِ مَا
            يَجْعَلُ هَذِهِ اَلْعَمَلِيَّةِ صَعْبَةً وَمُرْهِقَةً ،
            وَتَسْتَهْلِكَ اَلْكَثِيرَ مِنْ اَلْوَقْتِ ، لِذَلِكَ سَيَكُونُ مِنْ
            اَلْمُفِيدِ وَنَحْنُ فِي عَصْرِ اَلتِّقْنِيَّةِ وَالِاسْتِعَانَةِ
            بِمُنْتَجَاتِهَا لِتَسْهِيلِ اَلْعَدِيدِ مِنْ أُمُورِ حَيَاتِنَا
            اَلْيَوْمِيَّةِ ، اَلتَّوَسُّلُ إِلَى بَرَامِجَ مَعْلُومَاتِيَّةٍ
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="contained">اَلْعَدِيدِ </Button>
        </CardActions>
      </Card>
      <Box sx={{ px: 3, mb: 2 }}>
        <TextField
          id="outlined-basic"
          label=" نُصُوصٍ عَرَبِيَّةٍ "
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <Snackbar
          open={true}
          autoHideDuration={6000}
          sx={{ width: "100%", position: "static", mb: 3 }}
        >
          <Alert severity="success" sx={{ width: "100%", position: "static" }}>
            قَدْ نَحْتَاجُ كَمُدَرِّسِينَ أَوْ أَوْلِيَاءِ أُمُورٍ
          </Alert>
        </Snackbar>
        <AlertDialog />
      </Box>
    </>
  );
}
