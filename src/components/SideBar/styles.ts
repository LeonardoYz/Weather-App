import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex-basis: 28.6875rem;
`

export const Header = styled.header`
  width: 100%;
  padding-top: 1.125rem;
  background-color: var(--dark-blue);

  @media only screen and (min-width: 1200px) {
    padding-top: 2.625rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 0.75rem;

    @media only screen and (min-width: 1200px) {
      margin: 0 2.875rem;
    }
  }

  .header {
    &__button {
      &--search,
      &--location {
        background-color: var(--dark-gray);
        border: 1px solid transparent;

        transition: background-color 280ms ease-out, border-color 280ms ease-in;

        &:hover {
          background-color: transparent;
          border-color: var(--neutral);
        }
      }

      &--search {
        padding: 0.6875rem 1.125rem 0.625rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      &--location {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 2.5rem;
        width: 2.5rem;
        border-radius: 100vw;

        .location-icon {
          font-size: 1.375rem;
        }
      }
    }
  }
`

interface ContentProps {
  cloudBgImg: string;
}

export const Content = styled.section<ContentProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4.75rem 0 6.4375rem;
  background: var(--dark-blue) url(${props => props.cloudBgImg}) no-repeat center top/156%;
  box-shadow: inset 0 0 0 2000px rgb(29, 32, 57, 0.94);

  @media only screen and (min-width: 1200px) {
    padding: 6.8125rem 0 3.125rem;
  }

  .sidebar {
    &__image {
      @media only screen and (min-width: 1200px) {
        height: 14.625rem;
        margin-bottom: 5.4375rem;
      }

      img {
        width: 9.375rem;
        margin-bottom: 2.5rem;

        @media only screen and (min-width: 1200px) {
          width: 12.625rem;
          margin-bottom: 0;
        }
      }
    }

    &__text {
      text-align: center;
    }

    &__degree {
      font-weight: 500;
      font-size: var(--h1-font-size);
      margin-bottom: 1.4375rem;

      @media only screen and (min-width: 1200px) {
        margin-bottom: 5.4375rem;
      }

      span {
        font-size: 3rem;
        color: var(--light-gray);
      }
    }

    &__temperature {
      display: block;
      color: var(--light-gray);
      font-size: var(--big-font-size);
      font-weight: 600;
      margin-bottom: 3rem;

      @media only screen and (min-width: 1200px) {
        margin-bottom: 5.4375rem;
      }
    }

    &__date span, 
    &__location span {
      color: var(--light-grayish-blue);
      font-size: var(--normal-font-size-alt);
    }

    &__date {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      margin-bottom: 2rem;

      span {
        &:nth-child(2) {
          height: 0.1875rem;
          width: 0.1875rem;
          background-color: currentColor;
          border-radius: 100vw;
        }
      }
    }

    &__location {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5625rem;
      
      span {
        font-weight: 600;
      }
    }
  }
` 
