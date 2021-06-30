# Vavato Back Office UI components

## Philosophy

These components provide consistency when used, providing all of the necessary
formatting and CSS, except for layout matters like flexbox, css grid, floats,
etc.

The idea is not to provide extensive options, but rather enforce consistency in
style throughout the backoffice applications.

Every component in this library should look "finished" when placed in a screen.
This mean margins are sensible, all necessary text effects are applied, etc.

If you feel like you need to extend a component here, think again. If there
is no component in the Figma UX style guide for what you're trying to achieve,
it's time to open a debate with the design colleagues in the team to define
a new component.

The Figma style guide goes hand in hand with these components, and nothing
present here should not be present in Figma and vice-versa.

DO NOT add options to your components beyond the strictly necessary to make
them functional, only exception being applying colors from the theme to
components that use color to indicate their state, like `Label` and `Badge`.

This means no utility classes like `right`, `center`, `big`, `small`, or
anything other than strictly semantic classes, like `number` for table cells.

## Layout

We apply flexbox for layout in order to maintain a fluid-width based power
user interface that can be used both from tablets and computers.

There are no utility classes for a grid system. Flexbox allows you to divide
the screen in as many divisions as you need.

Our backoffice applications do not need to be responsive, as they are only
supposed to work on tablets and computers, so there is nothing in here
for mobile.
