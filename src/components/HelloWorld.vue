<template>
  <div class="hello">
    <p>
      Initialising a FormulateInput with an empty array causes error:
      <em>"RangeError: Maximum call stack size exceeded"</em>
    </p>
    <div class="container">
      <FormulateForm
        v-model="testData"
        name="formWithObject"
        @submit="postForm"
      >
        <FormulateInput
          type="select"
          name="testObj"
          label="Form With Object"
          placeholder="Select an item"
          :options="emptyObject"
        />
      </FormulateForm>
    </div>
    <div class="container">
      <FormulateForm v-model="testData" name="formWithArray" @submit="postForm">
        <FormulateInput
          type="select"
          name="testArr"
          label="Form With Array"
          placeholder="Select an item"
          :options="emptyArray"
        />
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      testData: {
        test: null
      },
      emptyArray: [],
      emptyObject: {}
    };
  },
  methods: {
    postForm() {
      return true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 1em;
  border: red 1px solid;
}
.container + .container {
  margin: 1em 0 0 0;
}
</style>
