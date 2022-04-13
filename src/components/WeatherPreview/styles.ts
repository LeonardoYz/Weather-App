import styled from "styled-components";
import { lighten } from "polished"

export const Header = styled.header`
  padding-top: 1.5rem;
  width: 100%;

  .header {
    &__container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.75rem;

      margin: 0 0.75rem;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 2.5rem;
      width: 2.5rem;
      font-weight: 700;
      font-size: var(--normal-font-size-alt);
      border-radius: 100vw;
      border: none;
      background-color: var(--grayish-blue);

      transition: background-color 280ms ease-in-out, color 280ms ease-in;

      &:hover {
        background-color: ${lighten(0.09, "hsl(244, 16%, 40%)")};
      }

      &.active {
        background-color: var(--neutral);
        color: var(--darkest-blue);
      }
    }
  }
`

export const Content = styled.section`
  padding: 3.25rem 0;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.625rem;
    row-gap: 2rem;

    margin: 0 1.4375rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.125rem 1.3125rem 1.125rem 1.25rem;
    background-color: var(--dark-blue);

    &__title {
      margin-bottom: 0.625rem;
    }

    &__image {
      width: 3.5275rem;
      height: 3.875rem;
      object-fit: cover;
      margin-bottom: 2rem;
    }

    &__temperature {
      display: flex;
      gap: 1rem;

      @media only screen and (min-width: 320px) {
        gap: 0.8125rem;
      }

      &--min {
        color: var(--light-gray);
      }
    }
  }
`