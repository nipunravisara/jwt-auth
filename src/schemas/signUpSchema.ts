import * as yup from 'yup';

export interface SignUpSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const signUpSchema: yup.SchemaOf<SignUpSchema> = yup.object().shape({
  firstName: yup.string().required({ message: 'First name is required.' }),
  lastName: yup.string().required({ message: 'Last name is required.' }),
  email: yup
    .string()
    .email({ message: 'Invalid email address.' })
    .required({ message: 'Email is required.' }),
  password: yup
    .string()
    .min(8, { message: 'Password must contain 8 characters or more.' })
    .required({ message: 'Password is required.' }),
});

export default signUpSchema;
