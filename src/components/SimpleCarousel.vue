<template>
  <agile
    v-if="slides && slides.length > 0"
    class="carousel"
    :nav-buttons="true"
    :speed="400"
    :slides-to-show="5"
    :dots="false"
    :infinite="false"
  >
    <div
      class="carousel-slide"
      v-for="(slide, index) in slides"
      :key="'slide-' + index"
    >
      <div class="slide-content">
        <a
          class="slide-image"
          :style="
            `background-image: url('https://picsum.photos/id\/${slide.id}\/${sliderImageSize.width}\/${sliderImageSize.height}`
          "
          :href="slide.download_url"
          target="_blank"
          title="Open in full size"
        />
        <div class="author">
          By {{ slide.author }} for
          <a :href="slide.url" target="_blank">Unsplash</a>
        </div>
      </div>
    </div>

    <template slot="prevButton">
      <div class="arrow prev" />
    </template>
    <template slot="nextButton">
      <div class="arrow next" />
    </template>
  </agile>
</template>

<script>
  export default {
    name: "SimpleCarousel",
    data() {
      return {
        photosApiUrl: "https://picsum.photos/v2/list",
        sliderImageSize: {
          width: 300,
          height: 200
        },
        slides: []
      };
    },
    created() {
      this.getDataFromApi().then(() => {
        if (this.slides.length === 0) alert("Sorry, couldn't reach api");
      });
    },
    methods: {
      getDataFromApi() {
        return this.axios
          .get(this.photosApiUrl)
          .then(response => {
            this.slides = response.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>

<style scoped lang="scss">
  .carousel {
    max-width: calc(100% - 120px);
    margin: auto;

    .carousel-slide {
      display: inline-block;
      width: 300px;
      height: auto;
      text-align: center;

      .slide-content {
        background-color: #eee;
        border-radius: 5px;
        margin: auto;
        display: inline-block;

        .slide-image {
          display: block;
          width: 300px;
          height: 200px;
        }

        .author {
          margin: 10px;
        }
      }
    }
    .arrow {
      width: 28px;
      height: 50px;
      display: inline-block;
      background-image: url(../assets/arrow.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      cursor: pointer;
      &.prev {
        transform: rotate(180deg);
      }
    }
    button[disabled="disabled"] .arrow {
      opacity: 0.3;
      cursor: default;
    }
  }
</style>

<style lang="scss">
  .agile__actions {
    position: absolute;
    top: calc(50% - 25px);
    left: -60px;
    right: -60px;
  }

  .agile__nav-button {
    background: transparent !important;
    border: none;
  }

  @media (max-width: 1200px) {
    .agile__actions {
      left: 0px;
      right: 0px;
    }
    .newsList .agile__actions {
      left: -35px;
      right: -35px;
    }
  }
</style>
