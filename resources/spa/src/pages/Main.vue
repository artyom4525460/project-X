<template>
  <div class="page">
    <div class="top-block">
      <div class="desctop">
        <b>Create a message</b> or <b>Pick a card</b> and add <br><b>video</b> or <b>audio</b> or <b>text</b> to the back (you can only choose one type of message)
      </div>
      <div class="mobile">
        Create a message or pick a card and add your message to the back.
      </div>
      <div class="buttons-line">
            <router-link :to="{ name: 'video' }" class="secondary-button">
                <img src="@/assets/images/video_message.svg">
                <img src="@/assets/images/video_message_active.svg" class="active">
                Add a video message
            </router-link>
            <router-link :to="{ name: 'audio' }" class="secondary-button">
                <img src="@/assets/images/audio_message.svg">
                <img src="@/assets/images/audio_message_active.svg" class="active">
                Add an audio message
            </router-link>
            <router-link :to="{ name: 'text' }" class="secondary-button">
                <img src="@/assets/images/gift_message.svg">
                <img src="@/assets/images/gift_message_active.svg" class="active">
                Add a text message
            </router-link>
        </div>
    </div>
    <div class="cards-block pink-background">
      <div class="themes-list">
        <label>Select Occasion</label>
          <select v-model="category" name="themesList">
            <option v-for="category, key in categories" :value="category" :key="key">
              {{ category.name }}
            </option>
        </select>
      </div>
      <div class="cards-list" id="cardsList">
        <div v-for="cards, key in category.cards" :key="key" class="card-block">
            <router-link :to="{ name: 'card-preview', params: { cardId: cards.id } }" class="cander-card" data-card-id="235">
              <img :src="cards.media.thumbnailPath" />
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cards } from '@/modules/cards'

export default {
  data() {
    return {
      category: cards[0],
      categories: cards
    }
  }
}
</script>

<style lang="scss" scoped>
.themes-list {
  padding: 25px 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    font-size: 16px;
    font-weight: 700;
    margin-right: 30px;
  }
  select {
    width: 176px;
    padding: 3px 0;
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-color: transparent;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-bottom: 1px solid #d53e20;
    cursor: pointer;
  }
}
.page {
  background-color: #faf5f4;
}
.top-block {
  padding: 20px 50px;
  font-size: 16px;
  text-align: center;
  height: 25%;
  display: block;
  background-color: #fff;
  z-index: 9;
  border-top: 1px solid #e5e5e5;
  .links {
    padding-top: 20px;
  }
  .desctop{
    display: block;
    @media(max-width: 600px){
      display: none;
    }
  }
  .mobile{
    display: none;
    margin-top: 10px;
    @media(max-width: 600px){
      display: block;
    }
  }
  .buttons-line {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
  }
  .secondary-button {
    display: flex;
    width: 33%;
    margin: 0 11px;
    padding: 10px;
    max-width: 100%;
  }
}
.cards-block {
  height: 75%;
  overflow: none;
}
.cards-list {
  flex-wrap: wrap;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 8;
  height: calc(100% - 80px);
  padding-right: 40px;
  padding-left: 40px;
  margin-right: 10px;
  overflow-y: scroll;
  margin-left: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }
   
  &::-webkit-scrollbar-track {
    padding: 8px 0;
  }
   
  &::-webkit-scrollbar-thumb {
    background: #F8E9E6;
    padding: 8px 0;
  }

  .card-block {
    overflow: hidden;
    float: left;
    margin: 0;
    padding: 7px 10px;
    height: fit-content;
    box-sizing: border-box;
    width: 20%;
    a {
      display: block;
    }
    img {
      width: 100%;
    }
  }
}
</style>
