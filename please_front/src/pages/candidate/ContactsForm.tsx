import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField }


const ContactsForm = () => {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Контакты</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="phone"
          label="Телефон"
          fullWidth
          variant="standard"
        >
        <TextField
          margin="dense"
          id="name"
          name="email"
          label="Адрес электронной почты"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button type="submit">Сохоранить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactsForm;
