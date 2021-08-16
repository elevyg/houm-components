import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextfield } from './textfield.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTextfield />);
  const rendered = getByText('hello from Textfield');
  expect(rendered).toBeTruthy();
});
