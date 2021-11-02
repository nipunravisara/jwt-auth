import * as yup from 'yup';

export interface LogInSchema {
  email: string;
  password: string;
}

const logInSchema: yup.SchemaOf<LogInSchema> = yup.object().shape({
  email: yup
    .string()
    .email({ message: 'Invalid email address.' })
    .required({ message: 'Email is required.' }),
  password: yup
    .string()
    .min(8, { message: 'Password must contain 8 characters or more.' })
    .required({ message: 'Password is required.' }),
});

export default logInSchema;
