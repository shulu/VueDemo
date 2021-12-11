<template>
  <div class="calculator">
    <div class="display">{{current || '0'}}</div>
    <div @click="clear()" class="btn">AC</div>
    <div @click="sign()" class="btn">+/-</div>
    <div @click="percent()" class="btn">%</div>
    <div @click="divide()" class="btn operator">/</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="times()" class="btn operator">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus()" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add()" class="btn operator">+</div>
    <div @click="append('0')" class="zero btn">0</div>
    <div @click="dot()" class="btn">.</div>
    <div @click="equal()" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: '',
      current: '',
      operator: null,
      isClickOperator: false
    }
  },
  methods: {
    clear() {
      this.current = ''
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${this.current}`/100
    },
    append(number) {
      console.log(this.isClickOperator)
      if(this.isClickOperator == true)
      {
        this.current = '';
        this.isClickOperator = false;
      }
      this.current = `${this.current}` + number;
    },
    dot(){
      if(this.current.indexOf('.') === -1)
      {
        this.append('.');
      }
    },
    setPrivious() {
      this.previous = this.current;
      this.isClickOperator = true;
    },
    divide() {
      this.operator = (a, b) => a/b;
      this.setPrivious();
    },
    times() {
      this.operator = (a, b) => a*b;
      this.setPrivious();
    },
    minus() {
      this.operator = (a, b) => a-b;
      this.setPrivious();
    },
    add() {
      this.operator = (a, b) => a+b;
      this.setPrivious();
    },
    equal() {
      console.log(this.operator)
        this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`;
        this.previous = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white
}

.zero {
  grid-column: 1/3;
}

.btn {
  cursor: pointer;
  background-color: #f2f2f2;
  border: 1px solid #999;
}

.btn:active {
   transform: scale(0.95);
}

.operator {
  background-color: orange;
  color: white
}
</style>
