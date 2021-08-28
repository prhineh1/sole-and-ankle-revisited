import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
          {/* Desktop markup */}
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          {/* Tablet and Down markup */}
          <IconRow>
            <Icon id="shopping-bag" strokeWidth={2} />
            <Icon id="search" strokeWidth={2} />
            <Hamburger onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
            </Hamburger>
          </IconRow>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.tabletDown} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(3rem, -15.870967741935484rem + 23.225806451612904vw, 12rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletDown} {
    display: none;
  }
`;

const IconRow = styled.div`
  display: none;

  @media ${QUERIES.tabletDown} {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    gap: clamp(1.25rem, 5.9vw - 1rem, 2.5rem);
  }
`;

const Side = styled.div`
  flex: 1;

  &:last-of-type {
    @media ${QUERIES.tabletDown} {
      flex: 0;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Hamburger = styled.button`
  background: transparent;
  border: 0;
`;

export default Header;
