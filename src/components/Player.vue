<template>
  <main class="container">
    <svg-icons />
    <header class="header">
      <svg class="icon-headphones">
        <use xlink:href="#icon-headphones"></use>
      </svg>
      <span class="title" v-on:click="onHeaderClick">Creeper's Player</span>
    </header>
    <Cover :mime="cover.mime" :data="cover.data" />
    <Timebar :count="duration" :current="currentTime" :width="300"/>
    <section class="metadata">
      <p class="music-title">{{tag.title || ' '}}</p>
      <p class="music-artist">{{tag.artist || ' '}}</p>
    </section>
    <controller
      v-on:play="resumeMusic"
      v-on:pause="pauseMusic"
      v-on:next="switchMusic(1)"
      v-on:prev="switchMusic(-1)"
      :resetState="currentIndex"
    />
    <div class="words">
      最怕有一天，突然就听懂了一首歌
    </div>
    <spectrum :analyser="analyser" :current="currentTime" :width="88" :height="24"/>
  </main>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  @media screen and (min-width: 451px) {
    .container {
      box-shadow: 0 0 16px 4px rgba(15, 14, 56, 0.65);
      border-radius: 16px;
      height: initial;
      width: 350px;
    }
  }
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 24px 0 40px;
    font-size: 20px;
    color: #0b0a31;
  }
  .header .title {
    cursor: pointer;
  }
  .icon-headphones {
    margin-left: 24px;
    margin-right: 12px;
    fill: #0b0a31;
    width: 24px;
    height: 24px;
  }
  .metadata {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .music-title {
    font-size: 16px;
    color: #d2d2ea;
    margin: 0;
    height: 22px;
  }
  .music-artist {
    font-size: 12px;
    color: rgb(77, 77, 137);
    margin: 0;
    height: 17px;
  }
  .words {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px 0 1px;
    font-size: 12px;
    color: #0b0a31;
  }
</style>

<script>
import { parse } from 'id3-parser'
import Cover from './Cover'
import Timebar from './Timebar'
import Controller from './Controller'
import SvgIcons from './SvgIcons'
import Spectrum from './Spectrum'

function fetchAudio (url, onload, onerror) {
  const request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.responseType = 'arraybuffer'
  request.onload = () => onload(request)
  request.onerror = onerror
  request.send()
}

export default {
  name: 'Player',
  props: ['musicList', 'initialIndex'],
  data () {
    return {
      title: `Creeper's player`,
      currentIndex: this.initialIndex || 0,
      tag: {},
      duration: 0,
      currentTime: 0,
      analyser: null
    }
  },
  computed: {
    cover () {
      return this.tag.image || {}
    }
  },
  created () {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    // Create AudioContext and buffer sourceNode
    this.audioCtx = new AudioContext()
  },
  mounted () {
    if (!this.musicList || !this.musicList.length) return

    const url = this.musicList[this.currentIndex].url
    this.play(url)
  },
  methods: {
    play (url) {
      this.destroy()
      fetchAudio(url, request => {
        const audioData = request.response
        let tag
        try {
          tag = parse(new Uint8Array(audioData))
        } catch (e) {
          this.$emit('error', '解析ID3标签失败')
          tag = {
            title: /([^/]+)\.\w+$/.test(decodeURIComponent(url)) ? RegExp.$1 : '未知曲目',
            artist: '未知歌手',
            image: {
              data: require('../assets/cover.png')
            }
          }
        }
        this.tag = tag || {}
        this.setup()
        this.audioCtx.decodeAudioData(
          audioData,
          buffer => {
            this.sourceNode.buffer = buffer
            this.sourceNode.start(0)
            this.duration = buffer.duration
          },
          e => {
            this.$emit('error', '解码音频数据失败')
          }
        )
      }, e => this.$emit('error', '从服务器获取资源失败'))
    },
    setup () {
      const audioCtx = this.audioCtx
      this.sourceNode = audioCtx.createBufferSource()
      this.scriptNode = audioCtx.createScriptProcessor(4096, 1, 1)
      this.analyser = audioCtx.createAnalyser()
      this.analyser.smoothingTimeConstant = 0.5
      this.analyser.fftSize = 1024
      this.analyser.maxDecibels = 80

      this.sourceNode.connect(this.analyser)
      this.analyser.connect(this.scriptNode)
      this.scriptNode.connect(audioCtx.destination)

      this.scriptNode.onaudioprocess = this.onAudioProcess.bind(this)
      this.sourceNode.onended = this.onEnded.bind(this)
    },
    destroy () {
      if (this.sourceNode) {
        this.sourceNode.disconnect(this.analyser)
        this.sourceNode.onended = null
        this.sourceNode = null
      }
      if (this.analyser) {
        this.analyser.disconnect(this.scriptNode)
        this.analyser = null
      }
      if (this.scriptNode) {
        if (this._disconnected) {
          this._disconnected = false
        } else {
          this.scriptNode.disconnect(this.audioCtx.destination)
        }
        this.scriptNode.onaudioprocess = null
        this.scriptNode = null
      }
    },
    onAudioProcess (audioProcessingEvent) {
      // The input buffer is the song we loaded earlier
      const inputBuffer = audioProcessingEvent.inputBuffer
      // The output buffer contains the samples that will be modified and played
      const outputBuffer = audioProcessingEvent.outputBuffer

      // Loop through the output channels (in this case there is only one)
      for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
        let inputData = inputBuffer.getChannelData(channel)
        let outputData = outputBuffer.getChannelData(channel)

        // Loop through the 4096 samples
        for (let sample = 0; sample < inputBuffer.length; sample++) {
          // make output equal to the same as the input
          outputData[sample] = inputData[sample]
        }
      }
      // Update timebar
      this.currentTime += inputBuffer.duration
      if (this.currentTime > this.duration) {
        this.currentTime = this.duration
      }
    },
    onEnded () {
      this.destroy()
      this.switchMusic(1)
    },
    pauseMusic () {
      this.scriptNode.disconnect(this.audioCtx.destination)
      this._disconnected = true
    },
    resumeMusic () {
      this.scriptNode.connect(this.audioCtx.destination)
      this._disconnected = false
    },
    switchMusic (direction) {
      let index = this.currentIndex + direction
      if (index < 0) {
        index = this.musicList.length - 1
      } else if (index > this.musicList.length - 1) {
        index = 0
      }
      this.currentIndex = index
      this.currentTime = this.duration = 0
      this.tag = {}
      this.play(this.musicList[index].url)
    },
    onHeaderClick () {
      this.$emit('clickheader')
    }
  },
  components: {
    Cover,
    Timebar,
    Controller,
    SvgIcons,
    Spectrum
  }
}
</script>
