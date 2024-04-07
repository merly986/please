import avatar from "/avatar.png";
import { Avatar } from "@mui/material";

const Candidate = {
  firstName: "Иван",
  lastName: "Иванов",
  middleName: "Иванович",
  foto: "kjhdvkjd.svg"
};

const CandidateInfo = () => {

  return (
    <>
      <Avatar
        src={Candidate.foto && avatar}
        alt="Фото"
        sx={{height: 155, width: 150}}
        variant="square"
      />
      <div>
        <h3>{Candidate.lastName}</h3>
        <h3>{Candidate.firstName}</h3>
        <h3>{Candidate.middleName}</h3>
      </div>
    </>
  );
};

export default CandidateInfo;
