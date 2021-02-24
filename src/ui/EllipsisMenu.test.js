import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EllipsisMenu from './EllipsisMenu';

describe('EllipsisMenu', () => {
  beforeEach(() => {
    render(
      <React.Fragment>
        <span>Outside</span>
        <EllipsisMenu>
          <span>Another item</span>
          <span>Menu Item</span>
        </EllipsisMenu>
      </React.Fragment>
    );
  });

  it('renders the ellipsis', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  describe('when clicked', () => {
    beforeEach(async () => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
      await screen.findByRole('navigation')
    });

    it('reveals a dropdown menu', async () => {
      expect(await screen.findByRole('navigation')).toBeVisible();
    })

    describe('when clicking outside', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText(/outside/i));
      })

      it('hides the dropdown menu', async () => {
        expect(screen.queryByRole('navigation')).toBeNull();
      })
    });

    describe('when clicking a menu item', () => {
      beforeEach(async () => {
        await screen.findByRole('navigation')
        fireEvent.click(screen.getByText(/menu item/i));
      });

      it('hides the dropdown menu', () => {
        expect(screen.queryByRole('navigation')).toBeNull();
      })
    })
  })
});
