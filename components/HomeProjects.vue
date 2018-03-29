<template>
  <div class="projects">
    <div class="container">
      <h2>Projects</h2>
      <div class="layout">
        <div
          class="project lazyload"
          data-bg="http://via.placeholder.com/800x300"
          style="background-image: url('http://via.placeholder.com/100x37')"
        >
          <div class="message">
            <h3>Faboulus stufff</h3>
            <p>hey</p>
          </div>
        </div>
        <div
          class="project lazyload"
          data-bg="http://via.placeholder.com/800x300"
          style="background-image: url('http://via.placeholder.com/100x37')"
        >
          <div class="message">
            <h3>Faboulus stufff</h3>
            <p>hey</p>
          </div>
        </div>
        <div
          class="project lazyload"
          data-bg="http://via.placeholder.com/800x300"
          style="background-image: url('http://via.placeholder.com/100x37')"
        >
          <div class="message">
            <h3>Faboulus stufff</h3>
            <p>hey</p>
          </div>
        </div>
        <div
          class="project lazyload"
          data-bg="http://via.placeholder.com/800x300"
          style="background-image: url('http://via.placeholder.com/100x37')"
        >
          <div class="message">
            <h3>Faboulus stufff</h3>
            <p>hey</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  text-align: center;
}

.layout {
  padding: 0 1rem;

  @media screen and (min-width: em(600px,16px)) {
    padding: 0 3rem;
  }
}

.project {
  max-width: em(800px);
  min-height: em(300px);
  margin: 3rem auto;
  border: 1px solid grey;
  position: relative;
  background-position: 9999px 9999px;
  background-repeat: no-repeat;
  overflow: hidden;

  * {
    position: relative;
  }

  &:before {
    content: '';
    background-image: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 0;
    filter: blur(5px);
    transition: filter 0.2 ease-in;
  }

  &.lazyloaded:before {
    filter: blur(0px);
  }

  .message {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    padding: 1rem 2rem;
    text-align: left;
  }
}
</style>
