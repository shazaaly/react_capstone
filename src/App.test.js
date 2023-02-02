import { render, screen } from '@testing-library/react';
import App from './App';
import { BookingForm } from './components/forms/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();

});

test('render submit button', () => {
  render(<BookingForm />)
  const button = screen.getByRole('button', { name: 'Submit' })
  expect(button).toBeInTheDocument()

})

test('submit form', () => {
  const handleSubmit = jest.fn()
  render(<BookingForm onSubmit={handleSubmit} />)
  expect(handleSubmit).toHaveBeenCalled()

})