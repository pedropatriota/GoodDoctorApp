import * as S from "./styles"
import { Formik, Form, Field, FormikHelpers } from "formik"
import * as Yup from "yup"
import Button from "../shared/Button"

interface Values {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
}

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
}

const validation = Yup.object({
  firstName: Yup.string()
    .max(15, "Deve conter no máximo 15 caracteres")
    .required("Nome é obrigatório"),
  lastName: Yup.string()
    .max(20, "Deve conter no máxmimo 20 caracteres")
    .required("Sobrenome é obrigatório"),
  phoneNumber: Yup.string()
    .max(11, "Deve conter no máximo 15 caracteres")
    .required("Escreva um número de telefone válido"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
})

const SignIn = () => (
  <S.Container>
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={async (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        await alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      {(formik) => {
        console.log(formik)
        return (
          <Form>
            <Field name="firstName" type="text" placeholder="Nome" />
            <S.Error name="firstName" />

            <Field name="lastName" type="text" placeholder="Sobrenome" />
            <S.Error name="lastName" />

            <Field name="phoneNumber" type="text" placeholder="Telefone" />
            <S.Error name="phoneNumber" />

            <Field name="email" type="email" placeholder="E-mail" />
            <S.Error name="email" />

            <Button width="100%" margin="3rem 0" height="5rem" type="submit">
              Cadastrar
            </Button>
          </Form>
        )
      }}
    </Formik>
  </S.Container>
)

export default SignIn
