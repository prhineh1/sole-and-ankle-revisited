/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen}>
      <Content>
        <Close onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </Close>
        <PrimaryNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </PrimaryNav>
        <FooterNav>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterNav>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
`;

const Content = styled(DialogContent)`
  max-width: 300px;
  height: 100%;
  position: relative;
  margin-left: auto;
  background-color: ${COLORS.white};
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Close = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`;

const PrimaryNav = styled('nav')`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & > a {
    font-weight: ${WEIGHTS.medium};
    font-size: 1.125rem;
    text-decoration: none;
    line-height: 21px;
    text-transform: uppercase;
    color: ${COLORS.gray[900]};
  }

  & > a:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterNav = styled('footer')`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: absolute;
  bottom: 32px;

  & > a {
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[700]};
    font-size: 0.875rem;
    line-height: 16px;
    text-decoration: none;
  }
`;

export default MobileMenu;
