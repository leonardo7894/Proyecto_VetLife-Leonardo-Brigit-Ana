import { render, screen } from '@testing-library/react';
import Home from '../src/components/Home';

test("renderiza el home y muestra 'hello word'", () => {
  render(<Home/>);
  expect(screen.getByText('hola mundo')).toBeInTheDocument();
});