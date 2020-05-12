<template>
  <div>
    <VueDaumMap
      :appKey="appKey"
      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad"
      @update:center="center = $event"
      style="width: 100%; height: 300px;"
    />
  </div>
</template>

<script>
import VueDaumMap from "vue-daum-map";

export default {
  name: "DaumMap",
  components: {
    VueDaumMap,
  },
  props: {
    center: {
      type: Object,
      default: undefined
    },
  },
  data: () => ({
    appKey: "e32ce420355a97d537e78b880efef74b", // 테스트용 appkey
    level: 3, // 지도의 레벨(확대, 축소 정도),
    mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
    libraries: [], // 추가로 불러올 라이브러리
    map: null, // 지도 객체. 지도가 로드되면 할당됨.
  }),

  methods: {
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad(map) {
      this.map = map;

      // kakao.maps 네임스페이스로 바로 접근
      let daummaps = window.daum.maps;
      new daummaps.Marker({
        //position: new kakao.maps.LatLng(33.450701, 126.570667),
        position: map.getCenter(),
        map: map,
      });
    },
  },
};
</script>

<style scoped>

</style>
