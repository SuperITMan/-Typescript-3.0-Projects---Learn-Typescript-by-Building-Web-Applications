<template>
  <el-container class="lf-lyrics-view" direction="vertical">
    <span>{{song.name}}</span>
    <el-divider></el-divider>

    <el-container class="lf-lyrics-view-lyrics">
      <span v-html="songLyrics.lyrics"></span>
    </el-container>
    <router-link to="/"><i class="el-icon-back"></i></router-link>

    <el-divider></el-divider>
    <span>{{songLyrics.copyright}}</span>
  </el-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Song, SongLyrics} from '@/domain';

@Component({})
export default class Lyrics extends Vue {
  @Prop({
    required: true,
    type: SongLyrics,
  })
  private songLyrics!: SongLyrics;

  @Prop({
    required: true,
    type: Song,
  })
  private song!: Song;

  public mounted() {
    console.log('Lyrics component mounted');
  }
}
</script>

<style scoped>
  .lf-lyrics-view {
    color: var(--font-color);
  }

  .lf-lyrics-view-lyrics > span {
    width: 100%;
  }

  i {
    font-size: 50px;
  }
</style>
