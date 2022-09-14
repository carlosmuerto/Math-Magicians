import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header React Component', () => {
  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/test',
      text: 'test',
    },
  ];

  test('Render corrent title "Math Magicians"', () => {
    const component = render(<HashRouter><Header links={links} /></HashRouter>);
    const { getByTestId } = component;
    expect(getByTestId('title').textContent).toBe('Math Magicians');
  });

  test('Render correctly text links', () => {
    const component = render(<HashRouter><Header links={links} /></HashRouter>);
    const { getByTestId } = component;
    expect(getByTestId('nav').textContent).toBe(links.map((link) => link.text).join(''));
  });

  test(`Render correctly to have ${links.length} elements`, () => {
    const component = render(<HashRouter><Header links={links} /></HashRouter>);
    const navLinkElements = component.getAllByTestId('navlink');
    expect(navLinkElements).toHaveLength(links.length);
  });

  test('Render correctly navlink text correcly', () => {
    const component = render(<HashRouter><Header links={links} /></HashRouter>);
    const navLinkElements = component.getAllByTestId('navlink');
    for (let index = 0; index < navLinkElements.length; index += 1) {
      const element = navLinkElements[index];
      expect(element.textContent).toBe(links[index].text);
    }
  });

  test('Render correctly navlink active class Name correcly', () => {
    const component = render(<HashRouter><Header links={links} /></HashRouter>);
    const navLinkElements = component.getAllByTestId('navlink');
    for (let index = 0; index < navLinkElements.length; index += 1) {
      const element = navLinkElements[index];
      if (links[index].path === '/') {
        expect(element.classList.contains('active')).toBeTruthy();
      } else {
        expect(element.classList.contains('active')).toBeFalsy();
      }
    }
  });
});
