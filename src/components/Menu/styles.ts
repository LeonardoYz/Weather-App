import { lighten } from "polished";
import styled from "styled-components";

interface ContentProps {
  menuIsOpen: boolean;
}

export const Content = styled.div<ContentProps>`
  position: absolute;
  inset: 0;
  z-index: var(--z-index-menu);

  height: 100vh;
  background-color: var(--dark-blue);
  padding: 4.3rem 0.75rem 3rem;

  transform: ${(props) =>
    props.menuIsOpen ? "translateX(0)" : "translateX(-100%)"
  };

  opacity: ${(props) => (props.menuIsOpen ? 1 : 0)};

  transition: opacity 350ms ease-in-out, transform 500ms ease-in-out;

  @media only screen and (min-width: 768px) {
    padding: 4.6rem 2rem 3rem;
  }

  @media only screen and (min-width: 992px) {
    height: 100%;
  }

  @media only screen and (min-width: 1200px) {
    padding: 5.125rem 2.875rem 3rem;
  }

  .close-button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    font-size: 0;
    background-color: transparent;
    border: none;

    transition: transform 280ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    @media only screen and (min-width: 768px) {
      top: 0.875rem;
      right: 1.6rem;
    }

    @media only screen and (min-width: 1200px) {
      right: 0.9375rem;
    }
  }

  .suggestion {
    max-height: 70vh;
    overflow-y: auto;

    &__container {
      display: grid;
      row-gap: calc(3.125rem - 1.375rem);
      padding-right: 0.3rem;
    }

    &__option {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 0.1875rem 0 0.75rem;
      background-color: transparent;
      border: 1px solid transparent;
      width: 100%;
      height: 4rem;
      text-align: left;
      line-height: 1.6;

      transition: border-color 280ms ease-in-out;

      &:hover {
        border-color: var(--dark-grayish-blue);

        .suggestion__icon {
          opacity: 1;
        }
      }
    }

    &__icon {
      font-size: 1.5625rem;
      color: var(--dark-grayish-blue);
      opacity: 0;

      transition: opacity 280ms ease-out;
    }
  }
`;

interface SearchFormProps {
  closeIcon: string;
}

export const SearchForm = styled.form<SearchFormProps>`
  display: grid;
  grid-template-columns: 1fr 5.375rem;
  align-items: center;
  gap: 0.75rem;

  margin-bottom: 2.375rem;

  @media only screen and (min-width: 992px) {
    margin-bottom: 3.625rem;
  }

  .form {
    &__input-group {
      position: relative;
    }

    &__input {
      outline: none;
      padding: 0.875rem 0.9375rem 0.9375rem 3.0625rem;
      width: 100%;
      background-color: transparent;
      border: 1px solid var(--neutral);

      &::-webkit-search-cancel-button {
        position: relative;
        right: -0.9375rem;

        -webkit-appearance: none;
        cursor: pointer;
        background: url(${(props) => props.closeIcon}) no-repeat;
        background-size: 1.5rem;
        height: 1.5rem;
        width: 1.5rem;
        pointer-events: none;
        opacity: 0;

        transition: opacity 300ms ease-in, right 300ms ease-in-out;
      }

      &:focus {
        &::-webkit-search-cancel-button {
          right: -0.5rem;
          opacity: 1;
          pointer-events: all;
        }

        ~ .form__input--icon {
          color: var(--neutral);
        }
      }

      &::placeholder {
        color: var(--dark-grayish-blue);
      }

      &--icon {
        position: absolute;
        top: 0.75rem;
        left: 0.9375rem;

        font-size: 1.5rem;
        color: var(--dark-grayish-blue);

        transition: color 280ms ease-in-out;
      }
    }

    &__search {
      display: flex;
      justify-content: center;

      width: 5.375rem;
      padding: 0.875rem 0 0.9375rem;
      background-color: var(--blue);
      border: 1px solid transparent;
      font-weight: 600;

      transition: background-color 280ms ease-in-out, opacity 280ms ease-in-out;

      &:hover {
        background-color: ${lighten(0.05, "hsl(236, 80%, 57%)")};
      }
    }
  }
`;
