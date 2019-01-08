<template>
  <div style="margin: auto; top: 20%; text-align: center; padding: 15px;" class="mdl-card">
    <form action="mailto:aidanliddy@outlook.com" method="post" enctype="text/plain">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="name" name="name">
        <label class="mdl-textfield__label" for="name">Name</label>
      </div><br>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="email" name="email">
        <label class="mdl-textfield__label" for="email">Email</label>
      </div><br>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="subject" name="subject">
        <label class="mdl-textfield__label" for="subject">Subject</label>
      </div><br>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="message" name="message">
        <label class="mdl-textfield__label" for="message">Message</label>
      </div><br>
        
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" type="submit">Send</button>&nbsp;
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="reset">Reset</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  form {
    color: black;
  }
</style>
