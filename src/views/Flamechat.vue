<template>
  <div id="messages-card-container" class="mdl-cell mdl-cell--12-col mdl-grid">
    <div id="messages-card" class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
      <div style="width: auto; height: 100%; padding-top: 0; padding-bottom: 0;" class="mdl-card__supporting-text mdl-color-text--grey-600">
        <div id="messages">
          <span id="message-filler"></span>
        </div>
        <form id="message-form" action="#">
          <div id="mesage-form-div" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input autocomplete="off" class="mdl-textfield__input" type="text" id="message">
            <label class="mdl-textfield__label" for="message">Message...</label>
          </div>
          <button id="submit" disabled type="submit" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect">
            <i class="material-icons">send</i>
          </button>
        </form>
        <form id="image-form" action="#">
          <input id="mediaCapture" type="file" accept="image/*" capture="camera">
          <button id="submitImage" type="submit" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect">
            <i class="material-icons">image</i>
          </button>
        </form>
      </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop" style="height: 100%; padding-bottom: 0; margin-top: 15px;">
      <div style="width: auto; height: 100%; padding-top: 0; padding-bottom: 0; margin-top: 15px; padding-top: 10px;" class="mdl-card__supporting-text mdl-color-text--grey-600">
        <div style="text-align: center; padding-top: 20vh; width: 100%; margin: auto;">
          <span class="mdl-color-text--blue-900" style="font-size: 125px;">:/</span>
          <hr style="margin: 50px;">
          <h2 style="color: black;">Direct Messages are Not Ready Yet</h2>
        </div>
      </div>
    </div>
    <div id="must-signin-snackbar" class="mdl-js-snackbar mdl-snackbar">
      <div class="mdl-snackbar__text"></div>
      <button class="mdl-snackbar__action" type="button"></button>
    </div>
  </div>
</template>
