import * as yup from 'yup';

export interface SignInSchema {
  name: string;
  email: string;
  password: string;
}

const signInSchema: yup.SchemaOf<SignInSchema> = yup.object().shape({
  name: yup.string().required({ message: 'Name is required.' }),
  email: yup
    .string()
    .email({ message: 'Invalid email address.' })
    .required({ message: 'Email is required.' }),
  password: yup
    .string()
    .min(8, { message: 'Password must contain 8 characters or more.' })
    .required({ message: 'Password is required.' }),
});

export default signInSchema;
