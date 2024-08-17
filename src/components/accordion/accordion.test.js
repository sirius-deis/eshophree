import { render, screen } from '@testing-library/react';
import Accordion from './accordion';

const list = []
const title = '';

describe('Accordion component', () => {
  it('should match snapshot with kind round', () => {
    const { container } = render(<Accordion list={list} title={title}/>);
    expect(container).toMatchSnapshot();
  });
});