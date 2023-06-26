
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormContainer, Form, Input, Label, Button, FormGroup } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
   
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormGroup>
          <Label htmlFor="name">Username</Label>
          <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup style={{ marginTop: '4px' }}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup style={{ marginTop: '4px' }}>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" />
        </FormGroup>
        <Button type="submit" >
          Register
        </Button>
      </Form>
    </FormContainer>
  );
};
