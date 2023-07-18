<script lang="ts">
  import { CCarousel, CCarouselSlider } from '@casual-ui/svelte'

  let activeIndex = 0
</script>

<CCarousel bind:activeIndex interval={5000} infinity arrowTiming="hover">
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-red-apple" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-banana" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-grapes" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
