import styled from "styled-components";

export const Content = styled.section`
  padding-bottom: 6rem;
  margin: 0 1.4375rem;

  .title {
    font-size: var(--h2-font-size);
    margin-bottom: 2rem;
  }

  .container {
    display: grid;
    gap: 2rem;
  }

  .card {
    padding: 1.375rem 0 2.3125rem;
    width: 100%;
    background-color: var(--dark-blue);
    text-align: center;

    &__title {
      display: block;
      margin-bottom: 0.375rem;
    }

    &__detail {
      font-size: var(--bigger-font-size);
      display: block;

      span {
        font-size: var(--big-font-size);
        font-weight: 500;
      }
    }

    &.wind {
      padding: 1.375rem 0 1.8913rem;

      .card__detail {
        margin-bottom: 1.5rem;
      }

      .wsw {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5162rem;

        &__icon {
          &--box {
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: var(--dark-grayish-blue);
            height: 1.2688rem;
            width: 1.2688rem;
            border-radius: 100vw;
          }

          font-size: 0.5625rem;
          color: var(--neutral);
          transform: rotate(160deg);
        }
      }
    }

    &.humidity {
      padding: 1.375rem 3.125rem 1.4375rem 3.0625rem;

      .card__detail {
        margin-bottom: 0.75rem;
      }

      .level {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.125rem;

        span {
          font-size: var(--small-font-size);
          color: var(--light-gray);
        }
      }

      .bar {
        &--bg {
          height: 0.5rem;
          width: 100%;
          background-color: var(--neutral);
          border-radius: 5rem;
        }

        &--fill {
          border-radius: inherit;
          height: 100%;
          background-color: var(--yellow);
        }
      }

      .percentage-char {
        display: flex;
        justify-content: flex-end;
        
        font-size: var(--small-font-size);
        color: var(--light-gray);
        margin-top: 0.25rem;
      }
    }
  }
`