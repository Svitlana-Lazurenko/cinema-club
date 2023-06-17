import { Input, Button, Form, Label } from './SearchForm.styled';

export const SearchForm = ({ value, onSubmit, onChange }) => {
  return (
    <Form onSubmit={e => onSubmit(e)}>
      <Label>
        Enter title of movie
        <Input
          placeholder="Avatar"
          name="title"
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Label>
      <Button type="submit">Search</Button>
    </Form>
  );
};
