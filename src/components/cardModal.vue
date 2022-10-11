<template>
    <div class="card-body">
        <h5 class="card-title align-right">Aspire</h5>
        <h4 class="card-user-name">
            <input class="cardName" placeholder="Please Enter Holder Name" @input="onCardNameChange"/>
        </h4>
        <p class="py-2 card-number letter-spacing-6">{{randomCardNumber}}</p>
        <div class="py-2 card-vaildity row">
            <div class="col-md-6 col-sm-12">
                Validity : <span class="">{{randomEndMonth}}/{{randomEndYear}}</span>
            </div>
            <div class="col-md-6">
                CVV : <span class="letter-spacing-6">{{randomCvv}}</span>
            </div>
        </div>
        <h2 class="align-right">VISA</h2>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
        name: 'cardModal',
        props: ['cardDetails'],
        data () {
            return {
                randomCardNumber: 0,
                randomEndMonth: 0,
                randomEndYear: 0
            }
        },
        mounted() {
            console.log('add New Card')
            this.randomCardNumber = this.splitNumber(Math.floor(1000000000000000 + Math.random() * 9000000000000000));
            this.randomEndMonth = this.randomIntFromInterval(1,12);
            this.randomEndMonth = this.randomEndMonth.toString().length == 1 ? "0" + this.randomEndMonth : this.randomEndMonth;
            this.randomEndYear = this.randomIntFromInterval(2023, 2035);
            this.randomCvv = this.randomIntFromInterval(100, 999);
        },
        methods: {
            splitNumber: function(value) {
                return value.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
            },
            randomIntFromInterval: function(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            },
            onCardNameChange: function(e) {
                let vm = this;
                this.$emit('input-change-callback', e, {
                    validityEndMonth: this.randomEndMonth,
                    validityEndYear: this.randomEndYear,
                    cardNumber: this.randomCardNumber,
                    cardCVV: this.randomCvv
                });
            }
        }
    }
</script>
<style>
input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}
.cardName {
    width: 100%;
    color: white;
}
</style>
