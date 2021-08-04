(function ($) {
    'use strict';


    const ABI = [{"inputs":[{"internalType":"contract ITRC20","name":"newToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"token","type":"uint256"}],"name":"Airdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"Upline","type":"event"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"indx","type":"uint256"}],"name":"getAirdrop","outputs":[{"internalType":"uint256","name":"_airdrops","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getBuyerInfo","outputs":[{"internalType":"address","name":"_upline","type":"address"},{"internalType":"uint256","name":"_structure","type":"uint256"},{"internalType":"uint256","name":"_purchases","type":"uint256"},{"internalType":"uint256","name":"_income","type":"uint256"},{"internalType":"uint256","name":"_airdropcycle","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractInfo","outputs":[{"internalType":"uint40","name":"_startsale","type":"uint40"},{"internalType":"uint256","name":"_currentprice","type":"uint256"},{"internalType":"bool","name":"_salesenabled","type":"bool"},{"internalType":"uint256","name":"_totalbuyers","type":"uint256"},{"internalType":"uint256","name":"_totalpurchases","type":"uint256"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_airdropcycle","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentPeriod","outputs":[{"internalType":"uint256","name":"currentperiod","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"upline","type":"address"}],"name":"purchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverTRC20","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTRX","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"toogleSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newAdmin","type":"address"}],"name":"transferAdminship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    const ABITOKEN = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverTRC20","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTRX","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    let contract, token, odometer1, odometer2;

    let VueTRON = {
        data() {
            return {
                tron: {
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created() {
            let self = this,
                tries = 0;

            setTimeout(function initTimer() {
                if(!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;

                self.tron.tronWeb = !!window.tronWeb;

                window.tronWeb.on('addressChanged', function() {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                });

                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if(!self.tron.auth) setTimeout(chechAuth, 200);
                    else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
        },
        methods: {
            getTronWeb() {
                return new Promise((resolve, reject) => {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            },
            awaitTx(tx) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, 8000);
                });
            }
        }
    };

    Vue.directive('timer', {
        bind(el, binding) {
            el.__time = binding.value;
            el.__timer = setInterval(() => {
                let f = v => (v < 10 ? '0' + v : v),
                    o = Math.abs(el.__time + 86400000 * 10000 - Date.now()),
                    d = Math.floor(o / 86400000),
                    h = Math.floor((o - d * 86400000) / 3600000),
                    m = Math.floor((o - d * 86400000 - h * 3600000) / 60000),
                    s = Math.floor((o - d * 86400000 - h * 3600000 - m * 60000) / 1000);

                el.innerText = el.__time > 0 ? f(h) + ':' + f(m) + ':' + f(s)  : '00:00:00';
            }, 1000);
        },
        update(el, binding) {
            el.__time = binding.value;
        },
        unbind(el, binding) {
            clearInterval(el.__timer);
        }
    });

    const i18n = new VueI18n({
        locale: 'en',
        messages,
    })

    // Main
    new Vue({
        i18n,
        mixins: [VueTRON],
        el: '#App',
        data: {
            tab: 'main',
            contract_address: 'TQDEXHkXDReiWN5eKJA4hSoi4dbt5dKrZX',
            token_address: 'TCm7XjNmFeeUNn5hUXgFLrzxrEbzMoxra7',
            root_address: 'TKJnEYM119B4CMqAdU485jXpDkjvnVU4JT',
            null_address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
            upline: '',
            contract: {
                startsale: 0,
                startprice: 0.00000002,
                salesenabled: true,
                currentprice: 0,
                totalbuyers: 0,
                totalpurchases: 0,
                period: 0,
                airdropcycle: 0
            },
            user: {
                upline: 0,
                structure: 0,
                purchases: 0,
                income: 0,
                airdropcycle: 0
            },
            rates: {},
            mintoken: 100000000,
            upmodal: {
                show: false,
                upline: document.querySelector('meta[name="upline"]').content,
                upline_edit: '',
                edit: false
            },
            mapmodal: {
                show: false,
            }
        },
        mounted() {
            // Upline
            var m = (location.hash + '; ' + document.cookie).match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) {
                document.cookie = "ref=" + m[1] + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
                this.upline = this.upmodal.upline = m[1];
            }

            // Rates
            /*
            fetch('https://api.smartcontract.ru/gateway/rates_usd.json').then(r => r.json()).then(r => {
                this.rates = r.data;
                this.contract.balance = parseFloat(document.querySelector('meta[name="sc.balance"]').content);
            });
            */
            this.contract.currentprice = parseFloat(document.querySelector('meta[name="currentprice"]').content);
            this.contract.totalbuyers = parseFloat(document.querySelector('meta[name="totalusers"]').content)+this.countf();
            this.contract.totalpurchases = parseFloat(document.querySelector('meta[name="totalpurchases"]').content)/1e6+72329+this.countf()*70;


            if(!document.cookie.match(/coopolice=1/)) {
                this.notice('This website uses cookies for functionality, analytics and advertising purposes as described in our Privacy Policy. If you agree to our use of cookies, please continue to use our site.<br/><br/><a href="javascript:void()" style="color:#fff; text-decoration:none"><b>OK</b></a>', '000000', 0)
                    .then(() => { document.cookie = 'coopolice=1; Max-Age=31536000; path=/'; });
            }

            var $window = $(window);

            // :: Preloader Active Code
            $window.on('load', function () {
                $('#preloader').fadeOut('1000', function () {
                    $(this).remove();
                });
            });

            // :: Sticky Active Code

            $window.on('scroll', function () {
                if ($window.scrollTop() > 0) {
                    $('.header-area').addClass('sticky');
                } else {
                    $('.header-area').removeClass('sticky');
                }
            });


            // :: Carousel Active Code
            if ($.fn.owlCarousel) {
                var welcomeSlider = $('.welcome_slides');

                welcomeSlider.owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    smartSpeed: 1500,
                    nav: true,
                    navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
                    dots: true,
                    animateIn: 'fadeIn',
                    animateOut: 'fadeOut'
                })
                welcomeSlider.on('translate.owl.carousel', function () {
                    var layer = $("[data-animation]");
                    layer.each(function () {
                        var anim_name = $(this).data('animation');
                        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
                    });
                });
                $("[data-delay]").each(function () {
                    var anim_del = $(this).data('delay');
                    $(this).css('animation-delay', anim_del);
                });
                $("[data-duration]").each(function () {
                    var anim_dur = $(this).data('duration');
                    $(this).css('animation-duration', anim_dur);
                });
                welcomeSlider.on('translated.owl.carousel', function () {
                    var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
                    layer.each(function () {
                        var anim_name = $(this).data('animation');
                        $(this).addClass('animated ' + anim_name).css('opacity', '1');
                    });
                });

                $(".client_slides").owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    smartSpeed: 700,
                    dots: true
                });

                var dot = $('.client_slides .owl-dot');
                dot.each(function () {
                    var index = $(this).index() + 1;
                    if (index < 10) {
                        $(this).html('0').append(index);
                    } else {
                        $(this).html(index);
                    }
                });
            }

            // :: Magnific-popup Video Active Code
            if ($.fn.magnificPopup) {
                $('#videobtn').magnificPopup({
                    type: 'iframe'
                });
                $('.gallery_img').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                    removalDelay: 300,
                    mainClass: 'mfp-fade',
                    preloader: true
                });
            }

            // :: Masonary Gallery Active Code
            if ($.fn.imagesLoaded) {
                $('.dream-portfolio').imagesLoaded(function () {
                    // filter items on button click
                    $('.portfolio-menu').on('click', 'button', function () {
                        var filterValue = $(this).attr('data-filter');
                        $grid.isotope({
                            filter: filterValue
                        });
                    });
                    // init Isotope
                    var $grid = $('.dream-portfolio').isotope({
                        itemSelector: '.single_gallery_item',
                        percentPosition: true,
                        masonry: {
                            columnWidth: '.single_gallery_item'
                        }
                    });
                });
            }

            // :: Gallery Menu Style Active Code
            $('.portfolio-menu button.btn').on('click', function () {
                $('.portfolio-menu button.btn').removeClass('active');
                $(this).addClass('active');
            })

            // :: ScrollUp Active Code
            if ($.fn.scrollUp) {
                $.scrollUp({
                    scrollSpeed: 1500,
                    scrollText: 'Scroll Top'
                });
            }

            // :: onePageNav Active Code
            if ($.fn.onePageNav) {
                $('#nav').onePageNav({
                    currentClass: 'active',
                    scrollSpeed: 1500,
                    easing: 'easeOutQuad'
                });
            }

            // :: CounterUp Active Code
            /*
            if ($.fn.counterUp) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 2000
                });
            }
            */

            // :: Wow Active Code
            if ($window.width() > 767) {
                new WOW().init();
            }

            // :: Jarallax Active JS
            /*
            if ($.fn.jarallax) {
                $('.jarallax').jarallax({
                    speed: 0.2
                });
            }
            */
            // :: PreventDefault a Click
            $("a[href='#']").on('click', function ($) {
                $.preventDefault();
            });


            // :: Accordian Active Code
            (function () {
                var dd = $('dd');
                dd.filter(':nth-child(n+3)').hide();
                $('dl').on('click', 'dt', function () {
                    $(this).next().slideDown(500).siblings('dd').slideUp(500);
                })
            })();

            // :: Nav Active Code
            if ($.fn.classyNav) {
                $('#dreamNav').classyNav({
                    theme: "dark"
                });
            }

            // :: niceScroll Active Code
            if ($.fn.niceScroll) {
                $(".timelineBody").niceScroll();
            }

            $('.simple_timer').syotimer({
                year: 2021,
                month: 8,
                day: 15,
                hour: 0,
                minute: 0
            })

            $window.on('focus', () => {
                this.updateInfo();
            });
        },
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    token = tronWeb.contract(ABITOKEN, tronWeb.address.toHex(this.token_address));
                    this.updateInfo();
                });
            },
            'contract.totalbuyers'() {
                if(!odometer1) {
                    odometer1 = new Odometer({
                        el: this.$refs.odometer1,
                        format: 'd,ddd,ddd',
                        theme: 'train-station'
                    });
                }
                odometer1.update(parseInt(this.contract.totalbuyers));
                //odometer.update(parseInt(this.contract.balance * this.rates.usdt));
            },
            'contract.totalpurchases'() {
                if(!odometer2) {
                    odometer2 = new Odometer({
                        el: this.$refs.odometer2,
                        format: 'd,ddd,ddd',
                        theme: 'train-station'
                    });
                }
                odometer2.update(parseInt(this.contract.totalpurchases));
                //odometer.update(parseInt(this.contract.balance * this.rates.usdt));
            }
        },
        methods: {
            // colors: primary = 007eff; success = 4caf50; warning = fb8c00; error = e53935
            notice(msg, color = '007eff', time = 3000) {
                return new Promise((resolve, reject) => {
                    let wrap = $('<div style="box-sizing:border-box; position:fixed; left:calc(50% - 160px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '007eff') + '; border-radius:10px; color:#fff; padding:20px 20px; text-transform:none; font:16px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>')
                        .on('click', () => { wrap.remove(); resolve(); })
                        .appendTo('body');
                    if(time > 0) setTimeout(() => { wrap.remove(); }, time);
                });
            },
            copyText(value) {
                let s = document.createElement('input');
                s.value = value;
                document.body.appendChild(s);

                if(navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    s.contentEditable = true;
                    s.readOnly = false;
                    let range = document.createRange();
                    range.selectNodeContents(s);
                    let sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    s.setSelectionRange(0, 999999);
                }
                else s.select();

                try { document.execCommand('copy'); this.notice('Copied!', '4caf50'); }
                catch (err) { this.notice('Copy error', 'e53935'); }

                s.remove();
            },
            safe(value) {
                return this.tron.account ? value : '---';
            },
            countf(){
                return Math.floor((Date.now() / 1000-1609333966)/60/60);
            },
            updateInfo() {
                this.getTronWeb().then(tronWeb => {
                    /*
                    token.balanceOf(this.tron.account).call().then(balance => {
                        this.user.balance = parseInt(tronWeb.fromSun(balance));
                    });
                    */
                    contract.getContractInfo().call().then(res => {
                        this.contract.startsale = parseInt(tronWeb.fromSun(res._startsale));
                        this.contract.currentprice = parseInt(res._currentprice);
                        this.contract.salesenabled = tronWeb.fromSun(res._salesenabled).toString() == 'true';
                        this.contract.totalbuyers = parseInt(res._totalbuyers)+this.countf();
                        this.contract.totalpurchases = parseFloat(tronWeb.fromSun(res._totalpurchases))+72329+this.countf()*70;
                        this.contract.period = parseInt(res._period);
                        this.contract.airdropcycle = parseInt(res._airdropcycle);
                    });
                    contract.getBuyerInfo(this.tron.account).call().then(res => {
                        this.user.upline = (res._upline).toString();
                        this.user.structure = parseInt(res._structure);
                        this.user.purchases = parseFloat(tronWeb.fromSun(res._purchases));
                        this.user.income = parseFloat(tronWeb.fromSun(res._income));
                        this.user.airdropcycle = parseInt(res._airdropcycle);
                    });
                });
            },
            sendTx(name, address) {
                this.getTronWeb().then(tronWeb => {
                    (address ? tronWeb.contract(ABI, tronWeb.address.toHex(address)) : contract)[name]().send().then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            this.updateInfo();
                        });
                    });
                });
            },
            purchases(upline) {
                let auto_upline = false;
                if(!(this.mintoken >= 70)) return this.notice('The minimum amount of the token is 70', 'fb8c00');
                if(!this.tron.account) return this.notice('To join the project you need to use the Tron wallet.', 'fb8c00');
                if(this.user.upline) {
                    if(upline) {
                        if(upline.toLowerCase() == this.tron.account.toLowerCase()) {
                            upline = this.null_address;
                            auto_upline = true;
                        }
                        this.upline = upline;
                    }
                    else return this.upmodal.show = true;
                }
                else if(!this.upline) this.upline = this.null_address;
                this.getTronWeb().then(tronWeb => {
                    contract.getCurrentPrice().call().then(res => {
                        this.contract.currentprice = parseInt(res.price);
                        contract.purchase(this.upline).send({
                            callValue: this.mintoken*res.price,
                            feeLimit: 500000000
                        }).then(tx => {
                            this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                            this.awaitTx(tx).then(() => {
                                //if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                                this.updateInfo();
                            });
                        });
                    });
                });
            },
            airdrop() {
                this.getTronWeb().then(tronWeb => {
                    contract.airdrop().send({ feeLimit: 500000000 }).then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            this.updateInfo();
                        });
                    });
                });
            },
            showReferrals(_users) {
                if(document.getElementById('span_l_' + _users)){
                    let _act = document.getElementById('span_l_' + _users).getAttribute('data-key');
                    if(_act == 0) return;
                }
                let contract_addr = this.contract_address;
                this.getTronWeb().then(tronWeb => {
                    tronWeb.getEventResult(this.contract_address, {
                        eventName: 'Upline',
                        size: 200
                    }).then(_events => {
                        let _usr = tronWeb.address.toHex(_users);
                        _usr = '0x' + _usr.substring(2);
                        _events = _events.filter(function(event) {
                            return event.result.upline == _usr;
                        });
                        if(_events.length > 0) {
                            document.getElementById('ul_l_' + _users).innerHTML = '';
                            document.getElementById('li_l_' + _users).classList.remove('refs_circle_li_closed');
                            document.getElementById('li_l_' + _users).classList.add('refs_circle_li_opened');
                        }
                        _events.forEach(function(event) {
                            let _address = tronWeb.address.fromHex(event.result.buyer);
                            document.getElementById('ul_l_' + _users).innerHTML += '<li id="li_l_' + _address + '" class="refs_circle_li refs_circle_li_closed"><div class="refs_circle_block"><div class="refs_circle_id_block"><span id="user_id_l_' + _address + '" class="refs_circle_id_content"><i class="fas fa-ellipsis-h"></i></span></div><div id="for_s_l_' + _address + '" class="refs_circle_content"><div class="refs_circle_content_info_block"><a class="refs_circle_content_info_a"><span class="refs_circle_content_info_span"><span class="refs_circle_content_info_span_cornerbox"><span class="refs_circle_content_info_span_corner"></span></span><span id="info_l_' + _address + '" class="refs_circle_content_info_span_text"></span></span></a></div><div class="refs_circle_content_more_block"><a href="https://tronscan.io/#/address/' + _address + '" target="_blank" class="refs_circle_content_more_a"> <span class="refs_circle_content_more_span"><span class="refs_circle_content_more_span_cornerbox"><span class="refs_circle_content_more_span_corner"></span></span><span id="level_l_' + _address + '" class="refs_circle_content_more_span_text"></span></span></a></div><span id="span_l_' + _address + '" class="refs_circle_content_main_block" onclick="showReferrals2(\''+_address+'\');" data-key="0"></span><div id="div_l_' + _address + '" class="refs_circle_content_smallrefs_block"><i class="refs_circle_content_smallref1"></i><i class="refs_circle_content_smallref2"></i><i class="refs_circle_content_smallref3"></i></div></div></div><ul id="ul_l_' + _address + '"></ul></li>';
                            document.getElementById('level_l_' + _address).innerHTML += _address;
                            contract.userInfo(_address).call({
                                'from': _address
                            }, (_err, _user) => {
                                if (_user && _user[0] != 0) {
                                    document.getElementById('user_id_l_' + _address).innerHTML = 'A';
                                    document.getElementById('info_l_' + _address).innerHTML = 'deposit: '+parseInt(_user['deposit_amount'])/1e6+'<br/>upline: '+tronWeb.address.fromHex(_user['upline']);
                                    document.getElementById('span_l_' + _address).innerHTML = 'U';
                                }
                            });
                            tronWeb.getEventResult(contract_addr, {
                                eventName: 'Upline',
                                size: 200
                            }).then(_referrals_2 => {
                                let _adr = tronWeb.address.toHex(_address);
                                _adr = '0x' + _adr.substring(2);
                                _referrals_2 = _referrals_2.filter(function(event) {
                                    return event.result.upline == _adr;
                                });
                                if (_referrals_2.length > 0) {
                                    document.getElementById('span_l_' + _address).setAttribute('data-key', '1');
                                    document.getElementById('div_l_' + _address).classList.add('refs_circle_content_smallrefs_block_' + (_referrals_2.length>3?3:_referrals_2.length));
                                }
                            });
                        });
                    });
                });
            }
        }
    });
})(jQuery);

const ABI_2 = [{"inputs":[{"internalType":"contract ITRC20","name":"newToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"token","type":"uint256"}],"name":"Airdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"Upline","type":"event"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"indx","type":"uint256"}],"name":"getAirdrop","outputs":[{"internalType":"uint256","name":"_airdrops","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getBuyerInfo","outputs":[{"internalType":"address","name":"_upline","type":"address"},{"internalType":"uint256","name":"_structure","type":"uint256"},{"internalType":"uint256","name":"_purchases","type":"uint256"},{"internalType":"uint256","name":"_income","type":"uint256"},{"internalType":"uint256","name":"_airdropcycle","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractInfo","outputs":[{"internalType":"uint40","name":"_startsale","type":"uint40"},{"internalType":"uint256","name":"_currentprice","type":"uint256"},{"internalType":"bool","name":"_salesenabled","type":"bool"},{"internalType":"uint256","name":"_totalbuyers","type":"uint256"},{"internalType":"uint256","name":"_totalpurchases","type":"uint256"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_airdropcycle","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentPeriod","outputs":[{"internalType":"uint256","name":"currentperiod","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"upline","type":"address"}],"name":"purchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverTRC20","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTRX","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"toogleSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newAdmin","type":"address"}],"name":"transferAdminship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var contract_address = 'TFAXq5LakKpqcM9tVjvB8PpFJAAX6Q5yDg';
async function showReferrals2(_users) {
    if(document.getElementById('span_l_' + _users)){
        var _act = document.getElementById('span_l_' + _users).getAttribute('data-key');
        if(_act == 0) return;
    }
    var _events = await window.tronWeb.getEventResult(contract_address, {
        eventName: 'Upline',
        size: 200
    });
    var _usr = window.tronWeb.address.toHex(_users);
    _usr = '0x' + _usr.substring(2);
    _events = _events.filter(function(event) {
        return event.result.upline == _usr;
    });
    if(_events.length > 0) {
        document.getElementById('ul_l_' + _users).innerHTML = '';
        document.getElementById('li_l_' + _users).classList.remove('refs_circle_li_closed');
        document.getElementById('li_l_' + _users).classList.add('refs_circle_li_opened');
    }
    var contract2 = await window.tronWeb.contract(ABI_2, contract_address);
    _events.forEach(function(event) {
        var _address = window.tronWeb.address.fromHex(event.result.buyer);
        document.getElementById('ul_l_' + _users).innerHTML += '<li id="li_l_' + _address + '" class="refs_circle_li refs_circle_li_closed"><div class="refs_circle_block"><div class="refs_circle_id_block"><span id="user_id_l_' + _address + '" class="refs_circle_id_content"><i class="fas fa-ellipsis-h"></i></span></div><div id="for_s_l_' + _address + '" class="refs_circle_content"><div class="refs_circle_content_info_block"><a class="refs_circle_content_info_a"><span class="refs_circle_content_info_span"><span class="refs_circle_content_info_span_cornerbox"><span class="refs_circle_content_info_span_corner"></span></span><span id="info_l_' + _address + '" class="refs_circle_content_info_span_text"></span></span></a></div><div class="refs_circle_content_more_block"><a href="https://tronscan.io/#/address/' + _address + '" target="_blank" class="refs_circle_content_more_a"> <span class="refs_circle_content_more_span"><span class="refs_circle_content_more_span_cornerbox"><span class="refs_circle_content_more_span_corner"></span></span><span id="level_l_' + _address + '" class="refs_circle_content_more_span_text"></span></span></a></div><span id="span_l_' + _address + '" class="refs_circle_content_main_block" onclick="showReferrals2(\''+_address+'\');" data-key="0"></span><div id="div_l_' + _address + '" class="refs_circle_content_smallrefs_block"><i class="refs_circle_content_smallref1"></i><i class="refs_circle_content_smallref2"></i><i class="refs_circle_content_smallref3"></i></div></div></div><ul id="ul_l_' + _address + '"></ul></li>';
        document.getElementById('level_l_' + _address).innerHTML += _address;
        contract2.userInfo(_address).call({
            'from': _address
        }, (_err, _user) => {
            if (_user && _user[0] != 0) {
                document.getElementById('user_id_l_' + _address).innerHTML = 'A';
                document.getElementById('info_l_' + _address).innerHTML = 'deposit: '+parseInt(_user['deposit_amount'])/1e6+'<br/>upline: '+window.tronWeb.address.fromHex(_user['upline']);
                document.getElementById('span_l_' + _address).innerHTML = 'U';
            }
        });
        window.tronWeb.getEventResult(contract_address, {
            eventName: 'Upline',
            size: 200
        }).then(_referrals_2 => {
            var _adr = window.tronWeb.address.toHex(_address);
            _adr = '0x' + _adr.substring(2);
            _referrals_2 = _referrals_2.filter(function(event) {
                return event.result.upline == _adr;
            });
            if (_referrals_2.length > 0) {
                document.getElementById('span_l_' + _address).setAttribute('data-key', '1');
                document.getElementById('div_l_' + _address).classList.add('refs_circle_content_smallrefs_block_' + (_referrals_2.length>3?3:_referrals_2.length));
            }
        });
    });
}
var oldAddress = '';
function findAccountL() {
    var account_for_s = document.getElementById('account_for_s_l').value;
    if (document.getElementById('for_s_l_' + oldAddress) != null)
        document.getElementById('for_s_l_' + oldAddress).classList.remove('refs_circle_content_s');
    oldAddress = account_for_s;
    if (document.getElementById('for_s_l_' + account_for_s))
        document.getElementById('for_s_l_' + account_for_s).classList.add('refs_circle_content_s');
    return ![];
}
