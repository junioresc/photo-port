import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText("camera")).toHaveTextContent("📸");
    });

    it('links are visible', () => {
        const { getByTestId } = render(<Nav />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})