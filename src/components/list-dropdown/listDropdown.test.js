import { render, screen, fireEvent } from '@testing-library/react';

import ListDropdown from './listDropdown.component';

describe('ListDropdown', () => {
    const props = [
        { id: 1, linkUrl: '/gaming', title: 'gaming' },
        { id: 2, linkUrl: '/cameras', title: 'cameras' },
        { id: 3, linkUrl: '/components', title: 'components' },
        {
            id: 4,
            linkUrl: '/laptop-and-computers',
            title: 'laptop and computers',
        },
    ];
    const fn = jest.fn();
    it('should render component', () => {
        render(<ListDropdown list={props} setElement={fn} />);

        expect(screen.getAllByRole('listitem')).toHaveLength(5);
        expect(screen.getByText(/all/)).toBeInTheDocument();
        expect(screen.getByText(/gaming/)).toBeInTheDocument();
        expect(screen.getByText(/cameras/)).toBeInTheDocument();
        expect(screen.getByText(/components/)).toBeInTheDocument();
        expect(screen.getByText(/laptop & computer/)).toBeInTheDocument();
    });
    it('should fire event on click', () => {
        render(<ListDropdown list={props} setElement={fn} />);
        fireEvent.click(screen.getByText('gaming'));

        expect(fn).toBeCalled();
    });
    it('should fire event on click with params', () => {
        render(<ListDropdown list={props} setElement={fn} />);
        fireEvent.click(screen.getByText('all'));

        expect(fn).toBeCalledWith('all');
    });
});
