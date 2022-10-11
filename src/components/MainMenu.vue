<template>
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 left-menu">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pt-5 mb-md-0 me-md-auto text-white text-decoration-none">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512" fill="#4BB543"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"/></svg>
                </span>
                <span class="fs-5 d-none d-sm-inline">
                    <h2 class="p-1 mb-0 logo-color">aspire</h2>
                </span>
            </a>
            <span class="pb-5 d-inline-block pt-3 logo-sub-title">
                Trusted way of banking for 3000+ SMEs and startups in Singapore
            </span>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item mb-5 font-size-20">
                    
                    <router-link to="/home">
                        <span class="ms-1 d-none d-sm-inline ps-3">
                            <span class="svg-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                            </span>
                            Home
                        </span>
                    </router-link>
                </li>
                <li class="nav-item  mb-5 font-size-20">
                    <router-link to="/">
                        <span class="ms-1 d-none d-sm-inline ps-3">
                            <span class="svg-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-credit-card-2-front-fill" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                                </svg>
                            </span>
                            Cards
                        </span>
                    </router-link>
                </li>
                <li class="nav-item mb-5 font-size-20">
                    <router-link to="/payments">
                        <span class="ms-1 d-none d-sm-inline ps-3">
                            <span class="svg-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                </svg>
                            </span>
                            Payments
                        </span>
                    </router-link>
                </li>
                <li class="nav-item mb-5 font-size-20">
                    <router-link to="/credits">
                        <span class="ms-1 d-none d-sm-inline ps-3">
                            <span class="svg-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                </svg>
                            </span>
                            Credit
                        </span>
                    </router-link>
                </li>
                <li class="nav-item mb-5 font-size-20">
                    <router-link to="/settings">
                        <span class="ms-1 d-none d-sm-inline ps-3">
                            <span class="svg-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                                </svg>
                            </span>
                            Settings
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <router-view></router-view>
</template>
<script>
    /* eslint-disable */
    export default {
        name: 'MainMenu'
    }
</script>

<style>
    /* .col-md-6 #accordionExample .accordion-item .accordion-header .accordion-button {
        align-items: left !important;
    } */
    .svg-icon {
        margin-right: 10px;
    }
    .font-size-20 {
        font-size: 20px !important;
    }
    .logo-color, .nav-item .router-link-active.router-link-exact-active {
        color: #4BB543 !important;
    }
    .logo-sub-title {
        color: #adb5bd;
        font-size: 12px;
    }
    .menu-links, .nav-item a {
        color: white !important;
        text-decoration: none;
    }
    .ml-20 {
        margin-left: 20px !important;
    }
    .mr-20 {
        margin-right: 20px !important;
    }
    .left-menu {
        background-color: #0c365a !important;
    }
    .card-detail-info {
        margin-bottom: -20px !important;
    }
    .card.accordion-button {
        display: grid;
        background-color: #f5f9ff;
    }
    .accordion-button:not(.collapsed) {
        background-color: #f5f9ff !important;
        color: black !important;
    }
    .w-twenty-percent {
        width: 20%;
    }
    .card-options-main-sec {
        background-color: #edf3ff !important;
    }
    .card-options-main-sec ul {
        padding: 25px 0 !important;
        text-align: center;
    }
    .card-options-li {
        margin-left: 0px;
    }
    ul{
        margin: 0px !important;
    }
    li {
        list-style-type: none;
    }
    .card-options {
        background-color: #325baf;
        width: 35px;
        height: 35px;
        border-radius: 100%;
        text-align: center;
        padding-top: 3px;
        color: white;
        margin: auto;
    }
    .card-options.delete-icon {
        background-color: #e4f5ff !important;
    }
    .plane  {
        background-color: #e5fbf7 !important;
    }
    .text-logo-color {
        color: #02d6b6 !important;
    }
    .card-options.horn {
        background-color: #feedf4 !important;
    }
    .credit-card-details .card-options{
        width: 25px;
        height: 20px;
        border-radius: 8px;
        padding-top: 0px;
    }
    .credit-card-details svg{
        width: 12px;
        height: 12px;
        margin-bottom: 6px;
    }
    .credit-card-details .label {
        font-size: 12px;
        text-decoration: none;
        padding-left: 8px;
        padding-top: 3px;
        color: #325baf;
    }
    .freeze {
        opacity: 0.5;
    }
    .options-sec {
        position: relative;
        padding-top: 40px;
    }
    .new-card-button {
        position: relative !important;
        width: 150px !important;
        background-color: #325baf !important;
    }
    .font-sytle-12 {
        font-size: 12px !important;
    }

    .btn__active {
    bottom: 6%;
    left: 49%;
    }

    .card-container {
    position: relative;
    width: 350px;
    height: 200px;
    z-index: 2;
    left: 40px;
    top: 110px
    }

    .card--credit__card {
    position: absolute;
    transition: 1s ease;
    transform-style: preserve-3d;
    }

    .cvv-active {
    transform: rotateY(180deg);
    }

    .front {
    width: 350px;
    height: 200px;
    }

    .front,
    .back {
    position: absolute;
    backface-visibility: hidden;
    }

    .back {
    width: 350px;
    height: 200px;
    color: white;
    transform: rotateY(180deg);
    border-radius: 10px;
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtX-QkYwDKEXw_jriWgI5vplXUadOusPHRitOZKZCfBqJqK7IU");
    background-size: cover;
    z-index: 2;
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .strip {
    width: 100%;
    height: 40px;
    background: linear-gradient(135deg, #404040, #1a1a1a);
    position: relative;
    top: 25px;
    }

    .cvv-container {
    width: 90%;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

    .cvv-container p {
    z-index: 2;
    position: absolute;
    left: 65%;
    top: 25%;
    color: black;
    margin: 0;
    }

    .cvv-container .cvv-strip {
    width: 100%;
    height: 35px;
    background: white;
    position: absolute;
    top: 5%;
    }

    .valid {
    border-color: #4BB54380;
    box-shadow: 0 0 2px #4BB54380;
    background: #4BB54310;
    }

    .valid:focus {
    border-color: #4bb54310;
    box-shadow: 0 0 2px #4BB543;
    }

    .notValid {
    border-color: #D8000C;
    box-shadow: 0 0 2px #D8000C;
    background: #d800bb10;
    }

    .notValid:focus {
    border-color: #D8000C;
    box-shadow: 0 0 2px #D8000C;
    background: #d800bb10;
    }
    .caurosel-paginator {
        width: 6px !important;
    }
    .align-right {
        text-align: right;
    }
    .left-block {
        background-color: blue;    
    }
    .atm-card {
        background-color: #01d167 !important;
    }
    .tabbable-panel {
    border:1px solid #eee;
    padding: 10px;
    }

    .tabbable-line > .nav-tabs {
    border: none;
    margin: 0px;
    }
    .tabbable-line > .nav-tabs > li {
    margin-right: 2px;
    }
    .tabbable-line > .nav-tabs > li > a {
    border: 0;
    margin-right: 0;
    color: #737373;
    }
    .tabbable-line > .nav-tabs > li > a > i {
    color: #a6a6a6;
    }
    .tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {
    border-bottom: 4px solid rgb(80,144,247);
    }
    .tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {
    border: 0;
    background: none !important;
    color: #333333;
    }
    .tabbable-line > .nav-tabs > li.open > a > i, .tabbable-line > .nav-tabs > li:hover > a > i {
    color: #a6a6a6;
    }
    .tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {
    margin-top: 0px;
    }
    .tabbable-line > .nav-tabs > li.active {
    border-bottom: 4px solid #32465B;
    position: relative;
    }
    .tabbable-line > .nav-tabs > li.active > a {
    border: 0;
    color: #333333;
    }
    .tabbable-line > .nav-tabs > li.active > a > i {
    color: #404040;
    }
    .tabbable-line > .tab-content {
    margin-top: -3px;
    background-color: #fff;
    border: 0;
    border-top: 1px solid #eee;
    padding: 15px 0;
    }
    .portlet .tabbable-line > .tab-content {
    padding-bottom: 0;
    }
    .letter-spacing-6 {
        letter-spacing: 6px;
    }
    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    }

    .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    }

    .modal-container {
    width: 450px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    }

    .modal-header h3 {
    margin-top: 0;
    color: #42b983;
    }

    .modal-body {
    margin: 20px 0;
    }

    .modal-default-button {
    float: right;
    }

    .modal-enter-from {
    opacity: 0;
    }

    .modal-leave-to {
    opacity: 0;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
</style>