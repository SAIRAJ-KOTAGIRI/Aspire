<template>
    <div class="col py-3">
        <div class="col py-3">
            <div class="d-flex bd-highlight">
                <div class="p-2 flex-grow-1 bd-highlight">
                    <div class="d-inline-block d-flex">Available Balance</div>
                    <div class="d-inline-block">
                        <button class="btn btn-primary plane logo-color border-0 m-1 font-sytle-12 fw-bold">S$</button>
                        <span class="fw-bold">
                            3,000
                        </span>
                    </div>
                </div>
                <div class="pt-4 bd-highlight">
                    <button type="button" class="btn btn-primary new-card-button" v-on:click="onClickOnAddNewCard(true)">
                        <span class="d-lnline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                        </span>
                        <span class="d-lnline-block  ps-2">
                            New Card
                        </span>
                    </button>
                </div>
            </div>
            <div class="">
                <div class="tabbable-line">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a class="nav-link" data-toggle="tab">My Debit Cards </a>
                        </li>
                        <li>
                            <a class="nav-link" data-toggle="tab">All Company Cards</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="tab_default_1">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="atm-card card text-white  mb-3" >
                                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="false">
                                            <div class="carousel-inner" v-if="cardDetails.length">
                                                <div v-for="(eachCard, index) in cardDetails" :key="index">
                                                    <div class="carousel-item" :id="eachCard.cardId" :class="eachCard.active ? 'active' : ''">
                                                        <div :class="eachCard.freeze ? 'freeze' : ''">
                                                            <CardComponent :card-details="eachCard" :key="index"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button class="carousel-control-prev" v-on:click="onClickOnNextOrPrevious(true)" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden" >Previous</span>
                                                </button>
                                                <button class="carousel-control-next" v-on:click="onClickOnNextOrPrevious(false)" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card card-options-main-sec" v-if="cardDetails.length">
                                        <ul>
                                            <li class="d-inline-block w-twenty-percent" v-on:click="onClickOnFreezeUnFreezeCard(!activeCardDetails.freeze)">
                                                <span class="d-block card-options">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snow2" viewBox="0 0 16 16">
                                                        <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/>
                                                    </svg>
                                                </span>
                                                <span>{{activeCardDetails.freeze ? 'Un-Freeze' : 'Freeze'}}<br/>Card</span>
                                            </li>
                                            <li class="d-inline-block card-options-li w-twenty-percent">
                                                <span class="d-block card-options">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                                        <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                                                    </svg>
                                                </span>
                                                <span>Spend Card<br/>Limit</span>
                                            </li>
                                            <li class="d-inline-block card-options-li w-twenty-percent">
                                                <span class="d-block card-options">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                                    </svg>
                                                </span>
                                                <span>Add to<br/>Gpay</span>
                                            </li>
                                            <li class="d-inline-block card-options-li w-twenty-percent">
                                                <span class="d-block card-options">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                                    </svg>
                                                </span>
                                                <span>Replace<br/>Card</span>
                                            </li>
                                            <li class="d-inline-block card-options-li w-twenty-percent" v-on:click="onClickOnCardDelete">
                                                <span class="d-block card-options">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                    </svg>
                                                </span>
                                                <span>Cancel<br/>Card</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <div class="card accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <div class="card-detail-info">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Card Details
                                                        </span>
                                                    </div>
                                                </div>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li class="">
                                                            <span class="">
                                                                Card Holder Name
                                                            </span>
                                                            <span><h4 class="py-2 card-user-name">{{activeCardDetails.cardHolderName}}</h4></span>
                                                        </li>
                                                        <li class="">
                                                            <span class="">
                                                                Card Number
                                                            </span>
                                                            <span><h4 class="py-2 card-number letter-spacing-6">{{activeCardDetails.cardNumber}}</h4></span>
                                                        </li>
                                                        <li class="">
                                                            <div class="py-2 card-vaildity row">
                                                                <div class="col-md-6 col-sm-12">
                                                                    Validity : <span class="">{{activeCardDetails.validityEndMonth}}/{{activeCardDetails.validityEndYear}}</span>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    CVV : <span class="letter-spacing-6">{{activeCardDetails.cardCVV}}</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                            <div class="card accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div class="card-detail-info">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        Recent Transcations
                                                    </span>
                                                </div>
                                            </div>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div class="">
                                                    <div class="pt-4 px-4">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="d-flex">
                                                                <div>
                                                                    <span class="d-block card-options delete-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#57bfff" class="bi bi-archive-fill" viewBox="0 0 16 16">
                                                                            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="ml-20">
                                                                    <span class="d-block fs-6">Hamleys</span>
                                                                    <span class="d-inline-block font-sytle-12 pb-2">20 May 2020</span>
                                                                    <div class="d-flex credit-card-details">
                                                                        <span class="d-block card-options">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                                                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="label">Refund on debit card</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div>
                                                                <span class="logo-color fw-bold"> 
                                                                    + S$ 150
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="d-flex justify-content-between">
                                                            <div class="d-flex">
                                                                <div>
                                                                    <span class="d-block card-options plane">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#02d6b6" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                                                                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="ml-20">
                                                                    <span class="d-block fs-6">Hamleys</span>
                                                                    <span class="d-inline-block font-sytle-12 pb-2">20 May 2020</span>
                                                                    <div class="d-flex credit-card-details">
                                                                        <span class="d-block card-options">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                                                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="label">Refund on debit card</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span class="fw-bold"> 
                                                                    + S$ 150
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="d-flex justify-content-between">
                                                            <div class="d-flex">
                                                                <div>
                                                                    <span class="d-block card-options horn">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f25598" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
                                                                            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="ml-20">
                                                                    <span class="d-block fs-6">Hamleys</span>
                                                                    <span class="d-inline-block font-sytle-12 pb-2">20 May 2020</span>
                                                                    <div class="d-flex credit-card-details">
                                                                        <span class="d-block card-options">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                                                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="label">Refund on debit card</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span class="fw-bold"> 
                                                                    + S$ 150
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="d-flex justify-content-between">
                                                            <div class="d-flex">
                                                                <div>
                                                                    <span class="d-block card-options delete-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#57bfff" class="bi bi-archive-fill" viewBox="0 0 16 16">
                                                                            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="ml-20">
                                                                    <span class="d-block fs-6">Hamleys</span>
                                                                    <span class="d-inline-block font-sytle-12 pb-2">20 May 2020</span>
                                                                    <div class="d-flex credit-card-details">
                                                                        <span class="d-block card-options">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                                                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="label">Refund on debit card</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div>
                                                                <span class="fw-bold"> 
                                                                    + S$ 150
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-grid mt-4">
                                                        <button class="btn btn-primary plane text-logo-color border-0  p-3">
                                                            View All Transcations
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="tab_default_2">
                            <p>
                                Tab 2.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Transition name="modal">
            <div v-if="showAddNewModal" class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <slot name="header"><h4>Add New Card</h4></slot>
                        </div>
                        <div class="modal-body">
                            <slot name="body">
                                <form id="app">
                                    <div class="atm-card card text-white mb-3">
                                        <CardModal 
                                            @input-change-callback="cardNameInputCallback"
                                        />
                                    </div>
                                    <p>
                                        <input type="button" class="btn btn-primary new-card-button" :class="addNewCardButton" v-on:click="addNewCard(this)" value="Add Card">
                                    </p>
                                </form>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <router-view></router-view>
    </div>
</template>
<script>
    import CardComponent from './CardComponent.vue';
    import CardModal from './cardModal.vue';
    export default {
        name: "MainComp",
        data() {
            return {
                addNewCardButton: 'disabled',
                tempCardDetails: {},
                counter: 1,
                showAddNewModal: false,
                activeCaurosleString: ' aria-current="true" ',
                cardDetails: [
                    {
                        cardHolderName: 'Sairaj',
                        validityEndMonth: 12,
                        validityEndYear: 23,
                        cardNumber: Math.floor(1000000000000000 + Math.random() * 9000000000000000),
                        cardCVV: 214,
                        cardId: 1,
                        freeze: false,
                        active: false
                    },
                    {
                        cardHolderName: 'Sairaj1',
                        validityEndMonth: 12,
                        validityEndYear: 28,
                        cardNumber: Math.floor(1000000000000000 + Math.random() * 9000000000000000),
                        cardCVV: 214,
                        cardId: 2,
                        freeze: false,
                        active: false
                    },
                    {
                        cardHolderName: 'Sairaj2',
                        validityEndMonth: 12,
                        validityEndYear: 30,
                        cardNumber: Math.floor(1000000000000000 + Math.random() * 9000000000000000),
                        cardCVV: 214,
                        cardId: 3,
                        freeze: false,
                        active: false
                    },
                    {
                        cardHolderName: 'Sairaj3',
                        validityEndMonth: 12,
                        validityEndYear: 24,
                        cardNumber: Math.floor(1000000000000000 + Math.random() * 9000000000000000),
                        cardCVV: 214,
                        cardId: 4,
                        freeze: false,
                        active: false
                    }
                ],
                activeCardDetails: {}
            };
        },
        mounted() {
            if(this.cardDetails.length) {
                this.cardDetails[0].active = true;
                this.activeCardDetails = this.cardDetails.length ? this.cardDetails[0] : {}
                console.log('mounted')
            }
            this.counter++;
        },
        // updated() {
        //     document.querySelector('.caurosel-paginator.active')?.setAttribute('aria-current', 'true');
        // },
        methods: {
            onClickOnNextOrPrevious: function (check) {
                let id = -1;
                if(check) {
                    id = document.querySelector('.carousel-item.carousel-item-prev.carousel-item-end').getAttribute('id');
                } else {
                    id = document.querySelector('.carousel-item.carousel-item-next.carousel-item-start').getAttribute('id');
                }
                if(this.cardDetails.length) {
                    this.cardDetails.forEach((eachRecord) => {
                        if(parseInt(id) == eachRecord.cardId) {
                            this.activeCardDetails = eachRecord;
                            eachRecord.active = true;
                        } else {
                            eachRecord.active = false;
                        }
                    })
                }
            },
            onClickOnFreezeUnFreezeCard: function (freezeCheck) {
                this.activeCardDetails.freeze = freezeCheck;
                this.makeDefaultCardActive(this.activeCardDetails.cardId);
                this.counter++;
            },
            onClickOnCardDelete: function () {
                let vm = this;
                this.cardDetails = this.cardDetails.filter(function( obj ) {
                    return obj.cardId != parseInt(vm.activeCardDetails.cardId);
                });
                console.log(this.cardDetails)
                if(this.cardDetails.length) {
                    this.makeDefaultCardActive(this.cardDetails[0].cardId);
                    this.activeCardDetails = this.cardDetails[0];
                } else {
                    this.activeCardDetails = {};
                }
            },
            makeDefaultCardActive: function  (id) {
                this.cardDetails.forEach((eachRecord) => {
                    if(parseInt(id) == eachRecord.cardId) {
                        eachRecord.active = true;
                    } else {
                        eachRecord.active = false;
                    }
                })
                this.counter++;
            },
            cardNameInputCallback: function (e, cardDetails) {
                if(e.target.value && e.target.value.length) {
                    this.addNewCardButton = '';
                    this.tempCardDetails = {...cardDetails, ...{cardHolderName: e.target.value}}
                } else {
                    this.addNewCardButton = 'disabled';
                }
            },
            addNewCard: function () {
                console.log('asdasd')
                // e.preventDefault()
                let cardId = this.cardDetails.length + 1;
                this.cardDetails.push({...this.tempCardDetails, ...{ cardId: cardId, freeze: false }});
                this.tempCardDetails = {};
                this.showAddNewModal = false;
                this.makeDefaultCardActive(cardId);
            },
            blr: function() {
                let cr = document.getElementsByClassName('card--credit__card')[0];
                cr.classList.remove('cvv-active')
            },
            fcs: function() {
                let cr = document.getElementsByClassName('card--credit__card')[0];
                cr.classList.add('cvv-active')
            },
            inputFormat: function() {
                let text = this.cardNumber.split(" ").join("")
                //this.cardVdid is not formated in 4 spaces
                this.cardVadid = text
                if (text.length > 0) {
                    //regExp 4 in 4 number add an space between
                    text = text.match(new RegExp(/.{1,4}/, 'g')).join(" ")
                                                    //accept only numbers
                        .replace(new RegExp(/[^\d]/, 'ig'), " ");
                }
                //this.cardNumber is formated on 4 spaces
                this.cardNumber = text
                //after formatd they callback cardType for choose a type of the card
                this.GetCardType(this.cardVadid)
            },
            //loop for the next 9 years for expire data on credit card
            expirationDate: function() {
                let yearNow = new Date().getFullYear()
                for (let i = yearNow; i < yearNow + this.timeToExpire; i++) {
                    this.years.push({ year: i })
                }
            },
            validCreditCard: function(value) {
                let inputValidate = document.getElementById('cardNumber')
                // luhn algorithm
                let numCheck = 0,
                    bEven = false;
                value = value.toString().replace(new RegExp(/\D/g, ""));
                for (let n = value.length - 1; n >= 0; n--) {
                    let cDigit = value.charAt(n),
                        digit = parseInt(cDigit, 10);
    
                    if (bEven && (digit *= 2) > 9) digit -= 9;
                    numCheck += digit;
                    bEven = !bEven;
                }
                let len = value.length;
                //true: return valid number
                //this.cardType return true if have an valid number on regx array
                if (numCheck % 10 === 0 && len === 16 && this.cardType) {
                    inputValidate.classList.remove('notValid')
                    inputValidate.classList.add('valid')
                }
                //false: return not valid number
                else if (!numCheck % 10 === 0 && len === 16) {
                    inputValidate.classList.remove('valid')
                    inputValidate.classList.add('notValid')
                    //if not have number on input
                } else {
                    inputValidate.classList.remove('valid')
                    inputValidate.classList.remove('notValid')
                }
    
            },
            //get the name of the card name 
            GetCardType: function(number) {
                this.regx.forEach((item) => {
                    if (number.match(item.re) != null) {
                        this.cardType = item.logo
                        //cClass add a class with the name of cardName to manipulate with css
                        this.cClass = item.name.toLowerCase()
                    } else if (!number) {
                        this.cardType = ''
                        this.cClass = ''
                    }
                })
                //after choose a cardtype return the number for the luhn algorithm 
                this.validCreditCard(number)
            },
            //mouse down on btn
            mouseDw: function() {
                this.btnClassName = 'btn__active'
            },
            //mouse up on btn
            mouseUp: function() {
                this.btnClassName = ''
            },
            formatCardNumber: function(e){
                let nn = e.target.value;
                this.cardNumber = (nn.length - (nn.split(" ").length - 1)) % 4 === 0 ? this.card += ' ' : ''
                // this.cardNumber = value ? value.match(/.{1,4}/g).join(' ') : '';
            },
            onClickOnAddNewCard: function(value) {
                this.showAddNewModal = value
            },
            checkForm: function (e) {
                if (this.name && this.month) {
                    return true;
                }
                this.errors = [];
    
                if (!this.name) {
                    this.errors.push('Name required.');
                }
                if (!this.month) {
                    this.errors.push('Age required.');
                }
    
                e.preventDefault();
            }
        },
        components: { CardComponent, CardModal }
        
    }
    </script>