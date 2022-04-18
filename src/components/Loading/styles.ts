import styled from "styled-components";

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  /*==== ANIMATIONS =============================*/
  @keyframes loadingAnim {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(calc(19.6875rem - 6.25rem));
    }

    100% {
      transform: translateX(0);
    }
  }

  @media only screen and (min-width: 1200px) {
    @keyframes loadingAnim {
      0% {
        transform: translateX(0);
      }
  
      50% {
        transform: translateX(calc(33.125rem - 9.25rem));
      }
  
      100% {
        transform: translateX(0);
      }
    }
  }

  /*==== STYLES =============================*/
  position: fixed;
  inset: 0;
  z-index: var(--z-index-loading);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  background-color: var(--dark-blue);
  opacity: ${props => props.isLoading ? 0 : 1};
  visibility: ${props => props.isLoading ? "hidden" : "visible"};

  transition: opacity 300ms ease-in-out;


  .loading {
    &__image {
      img { 
        width: 14rem;

        @media only screen and (min-width: 1200px) {
          width: 19rem;
        }
      }
    }

    &__bar {
      height: 0.4375rem;
      width: 19.6875rem;
      background-color: var(--dark-gray);
      border-radius: 100vw;

      @media only screen and (min-width: 1200px) {
        width: 33.125rem;
      }
    }

    &__fill {
      height: inherit;
      width: 6.25rem;
      border-radius: inherit;
      background-color: var(--white);
      transform: translateX(0);
      animation: loadingAnim 1550ms infinite ease-in-out;

      @media only screen and (min-width: 1200px) {
        width: 9.25rem;
        animation: loadingAnim 1700ms infinite ease-in-out;
      }
    }
  }
`