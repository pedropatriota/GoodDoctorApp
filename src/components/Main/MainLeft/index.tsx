import * as S from "./styles"

const MainLeft = () => (
  <S.Container>
    <S.Logo> GD - Good Doctor</S.Logo>

    <S.Wrapper>
      <h3>Sistema completo para sua pré e pós consulta:</h3>
      <ul>
        <li>
          <S.Check />
          Agendamento de consultas
        </li>
        <li>
          <S.Check />
          Receita médica, atestados e etc, todos digitais
        </li>
        <li>
          <S.Check />
          Contato direto com o médico ate 3 dias após a consulta
        </li>
        <li>
          <S.Check />
          Avaliie sua jornada, até finalizar a consulta
        </li>
      </ul>
    </S.Wrapper>

    <S.WrapperImages>
      <S.ImageDoctorWoman
        src="/img/doctor-woman.svg"
        alt="Imagem de uma médica com mascara e prancheta na mão"
      />
      <S.ImageDoctorMan
        src="/img/doctor-man.svg"
        alt="Imagem de um médico com mascara e prancheta na mão"
      />
    </S.WrapperImages>
  </S.Container>
)

export default MainLeft
