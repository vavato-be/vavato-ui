import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  beforeEach(() => {
    render(
      <React.Fragment>
        <span>Outside</span>
        <Tooltip>
          Did you know that crocodiles are not aligators?
        </Tooltip>
      </React.Fragment>
    );
  });

  it('renders the icon', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  describe('when hovered', () => {
    beforeEach(async () => {
      const button = screen.getByRole('button');
      fireEvent.mouseEnter(button);
      await screen.findByRole('navigation')
    });

    it('reveals a popup with the tooltip', async () => {
      expect(await screen.findByRole('navigation')).toBeVisible();
    })

    describe('when moving the mouse outside', () => {
      beforeEach(() => {
        fireEvent.mouseLeave(screen.getByRole('button'));
      })

      it('hides the dropdown menu', async () => {
        expect(screen.queryByRole('navigation')).toBeNull();
      })
    });
  })
});
