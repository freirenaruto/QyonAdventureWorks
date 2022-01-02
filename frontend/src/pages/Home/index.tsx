import Button from "@mui/material/Button";
import Header from "../../components/Header";

import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header title="Dashboard" />
      <S.Container>
        <div>
          <h1>aew</h1>
          <Button variant="contained"> Olá Mundo</Button>
        </div>
      </S.Container>
    </>
  );
};

export default Home;
