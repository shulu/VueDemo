<template>
  <div class="tastes">
    <top-modal title="选择口味" />
    <div class="region-taste">
      <div class="taste-tip">
        <prefix-modal />
        <div class="taste-title">选择您喜欢的菜系（多选）和口味</div>
      </div>
      <div class="region-taste-content">
        <div
          class="choose-taste"
          v-for="(item, index) in this.tasteRegion"
          :key="index"
        >
          <div
            v-for="(taste, ti) in item"
            :key="ti"
            @click="activeTaste(index, ti)"
            :class="{ active: pickTaste.indexOf(`${index}${ti}`) > -1 }"
          >
            {{ taste }}
          </div>
        </div>
      </div>
    </div>
    <div class="spicy">
      <div class="taste-tip">
        <prefix-modal />
        <div class="taste-title">口味选择</div>
      </div>
      <div class="taste-spicy">
        <div
          class="none-spicy"
          :class="{ active: pickSpicy == '00' }"
          @click="activeSpicy('00')"
        >
          无
        </div>
        <div
          class="tast-spicy-img"
          :class="{ active: pickSpicy == '01' }"
          @click="activeSpicy('01')"
        >
          <div
            :class="{
              spicyit: pickSpicy == '01',
              nospicy: pickSpicy != '01',
            }"
          ></div>
        </div>
        <div
          class="tast-spicy-img"
          :class="{ active: pickSpicy == '02' }"
          @click="activeSpicy('02')"
        >
          <div
            :class="{
              spicyit: pickSpicy == '02',
              nospicy: pickSpicy != '02',
            }"
          ></div>
          <div
            :class="{
              spicyit: pickSpicy == '02',
              nospicy: pickSpicy != '02',
            }"
          ></div>
        </div>
        <div
          class="tast-spicy-img"
          :class="{ active: pickSpicy == '03' }"
          @click="activeSpicy('03')"
        >
          <div
            :class="{
              spicyit: pickSpicy == '03',
              nospicy: pickSpicy != '03',
            }"
          ></div>
          <div
            :class="{
              spicyit: pickSpicy == '03',
              nospicy: pickSpicy != '03',
            }"
          ></div>
          <div
            :class="{
              spicyit: pickSpicy == '03',
              nospicy: pickSpicy != '03',
            }"
          ></div>
        </div>
      </div>
    </div>
    <div class="footer">保存</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TopModal from "@/components/TopModal";
import PrefixModal from "@/components/PrefixModal";

export default {
  name: "Tastes",
  data() {
    return {
      pickTaste: ["00", "01", "02"],
      pickSpicy: "00",
    };
  },
  methods: {
    activeTaste(index, ti) {
      let pick = `${index}${ti}`;
      let indexPick = this.pickTaste.indexOf(pick);
      if (indexPick > -1) {
        this.pickTaste.splice(indexPick, 1);
      } else {
        this.pickTaste.push(pick);
      }
    },
    activeSpicy(index) {
      this.pickSpicy = index;
    },
  },
  created() {},
  components: {
    TopModal,
    PrefixModal,
  },
  computed: {
    ...mapState(["tasteRegion"]),
  },
};
</script>

<style scoped lang="scss">
.tastes {
  margin: 3.5rem 0 1rem 3rem;

  .taste-tip {
    margin-bottom: 1rem;
    .taste-title {
      margin-left: 0.8rem;
      font-weight: 800;
    }
  }

  .region-taste {
    margin-bottom: 3rem;

    .region-taste-content {
      display: flex;
      flex-direction: column;
      .choose-taste {
        margin: 0.5rem 0;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        div {
          width: 5rem;
          height: 2rem;
          line-height: 2rem;
          justify-content: center;
          align-items: left;
          text-align: center;
          border-radius: 0.5rem;
        }

        .active {
          color: #fff;
          background-color: #f37626;
        }
      }
    }
  }

  .spicy {
    .taste-spicy {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      div {
        height: 3rem;
        width: 3rem;
        text-align: center;
        line-height: 3rem;
      }

      .tast-spicy-img {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 3rem;
      }

      .none-spicy {
        color: gray;
        opacity: 0.6;
      }

      .nospicy {
        content: none;
        height: 3rem;
        background-image: url("../assets/spicy-gray.png");
        background-size: 0.8rem 1.2rem;
        background-repeat: no-repeat;
        background-position: center;
      }

      .spicyit {
        background-image: url("../assets/spicy-color.png");
        background-size: 0.8rem 1.2rem;
        background-repeat: no-repeat;
        background-position: center;
      }

      .active {
        border: 1px solid #f37626;
        border-radius: 0.5rem;
        color: #f37626;
        font-weight: 800;
        background-color: #fef1e9;
      }
    }
  }

  .footer {
    border: 1px solid #f37626;
    position: fixed;
    bottom: 1rem;
    left: 2rem;
    right: 2rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 3.5rem;
    font-weight: 800;
    color: #f37626;
  }
}
</style>
