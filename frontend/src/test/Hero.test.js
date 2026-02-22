import React from "react";
import{ render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

// import '@testing-library/jest-dom/extend-expect';

import Hero from "../landing_page/home/Hero";


//test suits

describe('Hero Component', ()=> {
    test('render hero image', () => {
render(<Hero/>);
const heroImage = screen.getByAltText('Hero Image');
expect(heroImage).toBeInTheDocument();
expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });


// describe('render signup button', ()=> {
    test('render signup button', () => {
render(<Hero/>);
const signupButton = screen.getByRole('button', {name: /signup now/i});
expect(signupButton).toBeInTheDocument();
expect(signupButton).toHaveClass("btn-primary");
    });
});
