<template>
  <div class="features">
    <div class="container">
      <div class="layout">
        <div class="col">
          <h3>John Quincy Adding Machine.</h3>
          <p>Well, let's just dump it in the sewer and say we delivered it. And why did 'I' have to take a cab? And why did 'I' have to take a cab?</p>
        </div>
        <div class="col middle">
          <h3>Anyone who laughs is a communist!</h3>
          <p>You know the worst thing about being a slave? They make you work, but they don't pay you or let you go.</p>
        </div>
        <div class="col">
          <h3>Your lyrics lack subtlety.</h3>
          <p>When the lights go out, it's nobody's business what goes on between two consenting adults.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features {
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-bottom: 3rem;

  .layout {
    @media screen and (min-width: em(1442px,16px)) {
      border-right: 1px solid grey;
      border-left: 1px solid grey;
      bottom: em(1442px);
    }

    @media screen and (min-width: em(800px,16px)) {
      display: flex;
    }
  }

  .col {
    padding: 3rem 1.5rem;
    min-height: 33vw;

    @media screen and (min-width: em(1442px,16px)) {
      min-height: rem(1400 / 3 + 0px);
    }

    @media screen and (min-width: em(800px,16px)) {
      width: 33.33%;
    }

    &.middle {
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;

      @media screen and (min-width: em(800px,16px)) {
        border-top: none;
        border-right: 1px solid grey;
        border-left: 1px solid grey;
        border-bottom: none;
      }
    }
  }

  h3 {
    min-height: 5em;

    &:before {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      margin-bottom: 20px;
      background: #000;
    }
  }
}
</style>
