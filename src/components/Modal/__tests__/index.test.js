import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    index: 1
};

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
          <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
        );

        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(
          <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
        );

        fireEvent.click(getByText('Close this modal'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})