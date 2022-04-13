import styled from "styled-components";
import { lighten } from "polished"

export const Header = styled.header`
  padding-top: 1.5rem;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    padding-top: 2.625rem;
  }

  .header {
    &__container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.75rem;

      margin: 0 0.75rem;

      @media only screen and (min-width: 1200px) {
        max-width: 47.5rem;
        margin: 0 auto;
      }
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

  @media only screen and (min-width: 1200px) {
    padding: 4.125rem 0 4.5rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.625rem;
    row-gap: 2rem;

    margin: 0 1.4375rem;

    @media only screen and (min-width: 1200px) {
      grid-template-columns: repeat(5, 1fr);
      row-gap: 0;

      max-width: 47.5rem;
      margin: 0 auto;
    }
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

      @media only screen and (min-width: 320px) {
        gap: 0.8125rem;
      }

      @media only screen and (min-width: 375px) {
        gap: 1rem;
      }

      &--min {
        color: var(--light-gray);
      }
    }
  }
`