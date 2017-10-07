
<template>
  <div>
    <div id='example-1' class="examplePanel">
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>

    <div class="examplePanel" style="height: 250px">
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <br>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
    </div>

    <div id='example-2' class="examplePanel">
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>

    <div id='example-3' class="examplePanel">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div id="example-4" class="examplePanel">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <div id="example-5" class="examplePanel">
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div class="examplePanel">
      <select v-model="selectedArray" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selectedArray }}</span>

    </div>

    <div class="examplePanel">
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div class="examplePanel">
      <input id="checkbox_vbind"
             type="checkbox"
             v-model="toggle"
             v-bind:true-value="a"
             v-bind:false-value="b"
      >
      <p > toggle is : {{ toggle }}</p>

    </div>


    <div class="examplePanel">
      <input type="text" v-model="message" v-on:keyup="keyUp" v-on:keyup.enter="keyUpEnter" />
      <button  v-on:click="submitData">Submit</button>
    </div>

  </div>
</template>

<script>

  const messageInit = 'Hello Vue Form';

  export default {
    name: 'form',
    data() {
      return {
        message: messageInit,
        checked: false,
        checkedNames: [],
        picked: '',
        selected: '',
        selectedArray: [],
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' },
        ],
        toggle: true,
        a: 'Selected show value a ',
        b: 'Unselected show value b',
      };
    },
    methods: {
      submitData() {
        // eslint-disable-next-line
        alert('submit the datas! ');
      },
      keyUp(e) {
        // eslint-disable-next-line
        console.info(e.target.value);
      },
      keyUpEnter() {
        // eslint-disable-next-line
        console.info('you hit the enter key.');
      },
    },
  };

</script>

<style>
  .examplePanel {
    border: dashed;
    border-color: cornflowerblue;
    border-width: 0 0 1px 0;
    margin: 35px auto 20px;
    background-color: ghostwhite;
    width: 400px;
    height: 100px;

  }

  .examplePanel:nth-child(even) {
    background: ghostwhite
  }

  .examplePanel:nth-child(odd) {
    background: gainsboro
  }

  .examplePanel:before {
    content: 'Exmaple';
    display: block;
    text-align: left;
    padding-left: 10px;
    color: red;
    right: 25px;
    border-width: 0 0 3px 3px;
    border-style: solid;
    border-color: #245991 transparent;
    background-color: cornflowerblue;

  }

</style>

