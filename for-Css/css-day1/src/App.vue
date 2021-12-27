<template>
  <div class="search">
    <div class="left flex flex-column">
      <img src="@/assets/search_black_24dp.svg" alt="" />
      <p>Search jobs By KeyWords</p>
    </div>
    <div class="right flex flex-column">
      <div class="jobs flex flex-column">
        <div class="header">
          <p>All Jobs</p>
          <img src="@/assets/expand_more_black_24dp.svg" alt="" />
        </div>
      </div>
      <div class="cities flex flex-cloumn">
        <div class="header">
          <p>All Cities</p>
          <img src="@/assets/expand_more_black_24dp.svg" alt="" />
        </div>
      </div>
      <div class="fields flex flex-cloumn">
        <div class="header">
          <p>All Fields</p>
          <img src="@/assets/expand_more_black_24dp.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="list">
    <div class="list-cities">
      <h5 class="location">location</h5>
      <div class="country flex flex-column">
        <p>Country</p>
        <div class="flex flex-column">
          <p class="country-content">
            Norway
            <img src="@/assets/expand_more_black_24dp.svg" alt="" />
          </p>
        </div>
      </div>
      <div class="city flex flex-column">
        <p>City</p>
        <div class="flex flex-column">
          <p class="city-content">
            Norway
            <img src="@/assets/expand_more_black_24dp.svg" alt="" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  color: #354474;
}

.flex {
  flex: 1;
}

.flex-column {
  flex-direction: row;
}

.search {
  width: 100%;
  height: 60px;
  border: 1px solid #fce2c2;
  border-radius: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdf5e7;
  opacity: 0.5;
  box-shadow: 0px 17px 42px -16px #f3d7be;

  div {
    display: flex;
  }

  .left {
    margin: 20px 40px;
    flex-basis: 40%;
    justify-content: left;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }

    p {
      width: 201px;
      height: 23px;
      text-align: right;

      opacity: 0.2;
    }
  }

  .right {
    flex: 1;
    flex-basis: 60%;
    justify-content: flex-end;

    .jobs,
    .cities,
    .fields {
      .header {
        position: relative;
        max-width: 119px;
        height: 32px;
        margin: 10px 10px;

        &:hover {
          border: 1px solid #fce2c2;
          border-radius: 20px;
          background-color: #fff;
        }

        p {
          display: inline-flex;
          flex-direction: row;
          align-content: center;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          color: #182a6a;
          font-size: 18px;
          line-height: 32px;
          margin-left: 10px;
        }

        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}

.list {
  max-width: 200px;
  height: 100%;
  border: 1px solid;
  border-radius: 10px;

  .location {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    letter-spacing: 0.21em;
    text-transform: uppercase;
    /* 样式 */
    color: #182a6a;
    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;
  }

  .country-content,
  .city-content {
    width: 100px;
    display: inline-flex;
    flex-wrap: nowrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 10px;

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
