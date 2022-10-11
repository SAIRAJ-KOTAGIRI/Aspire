<template>
    <div class="card-body font-size-20">
        <h5 class="card-title align-right">Aspire</h5>
        <h4 class="card-user-name">{{cardDetails.cardHolderName}}</h4>
        <p class="py-2 card-number letter-spacing-6">{{cardDetails.cardNumber}}</p>
        <div class="py-2 card-vaildity row">
            <div class="col-md-6 col-sm-12 ">
                Validity : <span class="">{{cardDetails.validityEndMonth}}/{{cardDetails.validityEndYear}}</span>
            </div>
            <div class="col-md-6">
                CVV : <span class="letter-spacing-6">{{cardDetails.cardCVV}}</span>
            </div>
        </div>
        <h2 class="align-right">VISA</h2>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
        name: 'CardComponent',
        props: ['cardDetails'],
        mounted() {
            this.cardDetails.cardNumber = this.splitNumber(this.cardDetails.cardNumber)
        },
        methods: {
            splitNumber: function(value) {
                return value.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
            }
        }
    }
</script>
