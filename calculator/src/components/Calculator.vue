<template>
  <div class="calculator">
    <div class="cal-result">
        {{ result }}
    </div>
    <div @click="clearResult()" class="btn">AC</div>
    <div @click="reverseResult()" class="btn">+/-</div>
    <div @click="percent()" class="btn">%</div>
    <div @click="miner()" class="btn">➗</div>
    <div @click="appendNumber('7')" class="btn">7</div>
    <div @click="appendNumber('8')" class="btn">8</div>
    <div @click="appendNumber('9')" class="btn">9</div>
    <div @click="times()" class="btn">x</div>
    <div @click="appendNumber('4')" class="btn">4</div>
    <div @click="appendNumber('5')" class="btn">5</div>
    <div @click="appendNumber('6')" class="btn">6</div>
    <div @click="sub()" class="btn">-</div>
    <div @click="appendNumber('1')" class="btn">1</div>
    <div @click="appendNumber('2')" class="btn">2</div>
    <div @click="appendNumber('3')" class="btn">3</div>
    <div @click="add()" class="btn">+</div>
    <div @click="appendNumber('0')" class="zero btn">0</div>
    <div class="btn">.</div>
    <div @click="equals()" class="btn">=</div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      previous: '',
      operator: '',
      result: ''
    }
  },
  methods: {
    clearResult(){
      this.previous = this.result;
      this.result = this.result ? 0: parseFloat(this.result);
    },
    reverseResult(){
      this.result = String(this.result).indexOf('-') === -1 ? '-'+this.result : Math.abs(this.result)
    },
    percent(){
      this.result = this.result/100
    },
    appendNumber(number){
      this.result = parseFloat(this.result+number)
    },
    miner(){
      this.clearResult()
      this.operator = '/'
    },
    times(){
      this.clearResult()
      this.operator = '*'
    },
    sub(){
      this.clearResult()
      this.operator = '-'
    },
    add(){
      this.clearResult()
      this.operator = '+'
    },
    equals(){
      console.log(this.previous);
      console.log(this.operator)
      console.log(this.result)
      if(this.previous)
      {
        switch(this.operator)
        {
          case '/':
            this.result = this.previous / this.result
            break;
          case '*':
            this.result = this.previous * this.result
            break;
          case '+':
            this.result = this.previous + this.result
            break;
          case '-':
            this.result = this.previous - this.result
            break;      
        }
      }
    }
  },
  created(){
    this.result = '0'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin: 0 auto;
  max-width: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  grid-auto-rows: minmax(10px, auto);
  background-color: rgb(243, 239, 239);
}
.cal-result {
  grid-column: 1 / 5;
  grid-row: 1;
  background-color:rgb(255, 230, 0);
}
.zero {
  grid-column: 1/3;
}
.btn {
  cursor: pointer;
  border: solid;
  border-radius: 4px;
}
</style>
