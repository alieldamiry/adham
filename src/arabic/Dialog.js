import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        اليومية
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"قد نحتاج كمدرسين أو أولياء أمور"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            أحيانا، قد نحتاج كمدرسين أو أولياء أمور، لتشكيل نصوص عربية قد تبلغ
            من الطول ما يجعل هذه العملية صعبة و مرهقة، و تستهلك الكثير من الوقت،
            لذلك سيكون من المفيد و نحن في عصر التقنية و الاستعانة بمنتجاتها
            لتسهيل العديد من أمور حياتنا اليومية، التوسل إلى برامج معلوماتية
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
