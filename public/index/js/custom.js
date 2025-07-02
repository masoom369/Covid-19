(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;




    // Preloader -section
    //-------------------------------------------------------
    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });


    // on ready function
    jQuery(document).ready(function($) {

        //--------------------up scroll js-----------------------------
        // ===== Scroll to Top ==== 
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
        $('#return-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });

        // ----------------------main slider------------------------------------

        /*------------------OWL MAIN SLIDER-------------------------*/
        $(document).ready(function() {
            var owl = $('.cc_slider_img_section .owl-carousel');
            owl.owlCarousel({
                loop: true,
                margin: 0,
                autoplay: false,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                items: 1

            });
            //*-----------------------animation ------------------*//
            function setAnimation(_elem, _InOut) {
                var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                _elem.each(function() {
                    var $elem = $(this);
                    var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                    $elem.addClass($animationType).one(animationEndEvent, function() {
                        $elem.removeClass($animationType);
                    });
                });
            }

            owl.on('change.owl.carousel', function(event) {
                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-out]");
                setAnimation($elemsToanim, 'out');
            });

            owl.on('changed.owl.carousel', function(event) {

                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");
                setAnimation($elemsToanim, 'in');
            })

        });


        // Menu js for Position fixed
        $(window).scroll(function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 30) {
                $('.menu_wrapper').addClass('menu_fixed animated fadeIn');
            } else {
                $('.menu_wrapper').removeClass('menu_fixed animated fadeIn');
            }
        });

        //*-----------------------owl caouresel choose---------------------------*//	
        $(document).ready(function() {
            $('.med_slider_img .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                smartSpeed: 1200,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 0
                    }
                }
            })
        });
        //*-----------------------owl caouresel blog---------------------------*//	

        $(document).ready(function() {
            $('.post_blog_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                smartSpeed: 1200,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 0
                    }
                }
            })
        });
        //*-----------------------owl caouresel Team---------------------------*//	
        $(document).ready(function() {
            $('.team_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                smartSpeed: 1200,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 30
                    }
                }
            })
        });




        //----------------------- SHOW HIDE LOGIN FORM JS -----------------------//


        $('#search_button').on("click", function(e) {
            $('#search_open').slideToggle();
            e.stopPropagation();
        });

        $(document).on("click", function(e) {
            if (!(e.target.closest('#search_open'))) {
                $("#search_open").slideUp();
            }
        });




        // Magnific popup-video
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });


        //--------------------- testimonial slider-----------------//
        $(document).ready(function() {
            $('.test_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                smartSpeed: 1200,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
        //---------------------partner slider---------------//
        $(document).ready(function() {
            $('.partner_slider_img .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					400: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 4,
                        nav: true
                    },
                    1000: {
                        items: 6,
                        nav: true,
                        loop: true,
                        margin: 10
                    }
                }
            })
        });

        // Wow js
        $(window).on("load", function() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
        });

        /*------------calender css-------*/
        (function($, undefined) {

            var $window = $(window);

            function UTCDate() {
                return new Date(Date.UTC.apply(Date, arguments));
            }

            function UTCToday() {
                var today = new Date();
                return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
            }

            function alias(method) {
                return function() {
                    return this[method].apply(this, arguments);
                };
            }

            var DateArray = (function() {
                var extras = {
                    get: function(i) {
                        return this.slice(i)[0];
                    },
                    contains: function(d) {
                        // Array.indexOf is not cross-browser;
                        // $.inArray doesn't work with Dates
                        var val = d && d.valueOf();
                        for (var i = 0, l = this.length; i < l; i++)
                            if (this[i].valueOf() === val)
                                return i;
                        return -1;
                    },
                    remove: function(i) {
                        this.splice(i, 1);
                    },
                    replace: function(new_array) {
                        if (!new_array)
                            return;
                        if (!$.isArray(new_array))
                            new_array = [new_array];
                        this.clear();
                        this.push.apply(this, new_array);
                    },
                    clear: function() {
                        this.length = 0;
                    },
                    copy: function() {
                        var a = new DateArray();
                        a.replace(this);
                        return a;
                    }
                };

                return function() {
                    var a = [];
                    a.push.apply(a, arguments);
                    $.extend(a, extras);
                    return a;
                };
            })();


            // Picker object

            var Datepicker = function(element, options) {
                this.dates = new DateArray();
                this.viewDate = UTCToday();
                this.focusDate = null;

                this._process_options(options);

                this.element = $(element);
                this.isInline = false;
                this.isInput = this.element.is('input');
                this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
                this.hasInput = this.component && this.element.find('input').length;
                if (this.component && this.component.length === 0)
                    this.component = false;

                this.picker = $(DPGlobal.template);
                this._buildEvents();
                this._attachEvents();

                if (this.isInline) {
                    this.picker.addClass('datepicker-inline').appendTo(this.element);
                } else {
                    this.picker.addClass('datepicker-dropdown dropdown-menu');
                }

                if (this.o.rtl) {
                    this.picker.addClass('datepicker-rtl');
                }

                this.viewMode = this.o.startView;

                if (this.o.calendarWeeks)
                    this.picker.find('tfoot th.today')
                    .attr('colspan', function(i, val) {
                        return parseInt(val) + 1;
                    });

                this._allow_update = false;

                this.setStartDate(this._o.startDate);
                this.setEndDate(this._o.endDate);
                this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

                this.fillDow();
                this.fillMonths();

                this._allow_update = true;

                this.update();
                this.showMode();

                if (this.isInline) {
                    this.show();
                }
            };

            Datepicker.prototype = {
                constructor: Datepicker,

                _process_options: function(opts) {
                    // Store raw options for reference
                    this._o = $.extend({}, this._o, opts);
                    // Processed options
                    var o = this.o = $.extend({}, this._o);

                    // Check if "de-DE" style date is available, if not language should
                    // fallback to 2 letter code eg "de"
                    var lang = o.language;
                    if (!dates[lang]) {
                        lang = lang.split('-')[0];
                        if (!dates[lang])
                            lang = defaults.language;
                    }
                    o.language = lang;

                    switch (o.startView) {
                        case 2:
                        case 'decade':
                            o.startView = 2;
                            break;
                        case 1:
                        case 'year':
                            o.startView = 1;
                            break;
                        default:
                            o.startView = 0;
                    }

                    switch (o.minViewMode) {
                        case 1:
                        case 'months':
                            o.minViewMode = 1;
                            break;
                        case 2:
                        case 'years':
                            o.minViewMode = 2;
                            break;
                        default:
                            o.minViewMode = 0;
                    }

                    o.startView = Math.max(o.startView, o.minViewMode);

                    // true, false, or Number > 0
                    if (o.multidate !== true) {
                        o.multidate = Number(o.multidate) || false;
                        if (o.multidate !== false)
                            o.multidate = Math.max(0, o.multidate);
                        else
                            o.multidate = 1;
                    }
                    o.multidateSeparator = String(o.multidateSeparator);

                    o.weekStart %= 7;
                    o.weekEnd = ((o.weekStart + 6) % 7);

                    var format = DPGlobal.parseFormat(o.format);
                    if (o.startDate !== -Infinity) {
                        if (!!o.startDate) {
                            if (o.startDate instanceof Date)
                                o.startDate = this._local_to_utc(this._zero_time(o.startDate));
                            else
                                o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
                        } else {
                            o.startDate = -Infinity;
                        }
                    }
                    if (o.endDate !== Infinity) {
                        if (!!o.endDate) {
                            if (o.endDate instanceof Date)
                                o.endDate = this._local_to_utc(this._zero_time(o.endDate));
                            else
                                o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
                        } else {
                            o.endDate = Infinity;
                        }
                    }

                    o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
                    if (!$.isArray(o.daysOfWeekDisabled))
                        o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
                    o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d) {
                        return parseInt(d, 10);
                    });

                    var plc = String(o.orientation).toLowerCase().split(/\s+/g),
                        _plc = o.orientation.toLowerCase();
                    plc = $.grep(plc, function(word) {
                        return (/^auto|left|right|top|bottom$/).test(word);
                    });
                    o.orientation = {
                        x: 'auto',
                        y: 'auto'
                    };
                    if (!_plc || _plc === 'auto')
                    ; // no action
                    else if (plc.length === 1) {
                        switch (plc[0]) {
                            case 'top':
                            case 'bottom':
                                o.orientation.y = plc[0];
                                break;
                            case 'left':
                            case 'right':
                                o.orientation.x = plc[0];
                                break;
                        }
                    } else {
                        _plc = $.grep(plc, function(word) {
                            return (/^left|right$/).test(word);
                        });
                        o.orientation.x = _plc[0] || 'auto';

                        _plc = $.grep(plc, function(word) {
                            return (/^top|bottom$/).test(word);
                        });
                        o.orientation.y = _plc[0] || 'auto';
                    }
                },
                _events: [],
                _secondaryEvents: [],
                _applyEvents: function(evs) {
                    for (var i = 0, el, ch, ev; i < evs.length; i++) {
                        el = evs[i][0];
                        if (evs[i].length === 2) {
                            ch = undefined;
                            ev = evs[i][1];
                        } else if (evs[i].length === 3) {
                            ch = evs[i][1];
                            ev = evs[i][2];
                        }
                        el.on(ev, ch);
                    }
                },
                _unapplyEvents: function(evs) {
                    for (var i = 0, el, ev, ch; i < evs.length; i++) {
                        el = evs[i][0];
                        if (evs[i].length === 2) {
                            ch = undefined;
                            ev = evs[i][1];
                        } else if (evs[i].length === 3) {
                            ch = evs[i][1];
                            ev = evs[i][2];
                        }
                        el.off(ev, ch);
                    }
                },
                _buildEvents: function() {
                    if (this.isInput) { // single input
                        this._events = [
                            [this.element, {
                                focus: $.proxy(this.show, this),
                                keyup: $.proxy(function(e) {
                                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                                        this.update();
                                }, this),
                                keydown: $.proxy(this.keydown, this)
                            }]
                        ];
                    } else if (this.component && this.hasInput) { // component: input + button
                        this._events = [
                            // For components that are not readonly, allow keyboard nav
                            [this.element.find('input'), {
                                focus: $.proxy(this.show, this),
                                keyup: $.proxy(function(e) {
                                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                                        this.update();
                                }, this),
                                keydown: $.proxy(this.keydown, this)
                            }],
                            [this.component, {
                                click: $.proxy(this.show, this)
                            }]
                        ];
                    } else if (this.element.is('div')) { // inline datepicker
                        this.isInline = true;
                    } else {
                        this._events = [
                            [this.element, {
                                click: $.proxy(this.show, this)
                            }]
                        ];
                    }
                    this._events.push(
                        // Component: listen for blur on element descendants
                        [this.element, '*', {
                            blur: $.proxy(function(e) {
                                this._focused_from = e.target;
                            }, this)
                        }],
                        // Input: listen for blur on element
                        [this.element, {
                            blur: $.proxy(function(e) {
                                this._focused_from = e.target;
                            }, this)
                        }]
                    );

                    this._secondaryEvents = [
                        [this.picker, {
                            click: $.proxy(this.click, this)
                        }],
                        [$(window), {
                            resize: $.proxy(this.place, this)
                        }],
                        [$(document), {
                            'mousedown touchstart': $.proxy(function(e) {
                                // Clicked outside the datepicker, hide it
                                if (!(
                                        this.element.is(e.target) ||
                                        this.element.find(e.target).length ||
                                        this.picker.is(e.target) ||
                                        this.picker.find(e.target).length
                                    )) {
                                    this.hide();
                                }
                            }, this)
                        }]
                    ];
                },
                _attachEvents: function() {
                    this._detachEvents();
                    this._applyEvents(this._events);
                },
                _detachEvents: function() {
                    this._unapplyEvents(this._events);
                },
                _attachSecondaryEvents: function() {
                    this._detachSecondaryEvents();
                    this._applyEvents(this._secondaryEvents);
                },
                _detachSecondaryEvents: function() {
                    this._unapplyEvents(this._secondaryEvents);
                },
                _trigger: function(event, altdate) {
                    var date = altdate || this.dates.get(-1),
                        local_date = this._utc_to_local(date);

                    this.element.trigger({
                        type: event,
                        date: local_date,
                        dates: $.map(this.dates, this._utc_to_local),
                        format: $.proxy(function(ix, format) {
                            if (arguments.length === 0) {
                                ix = this.dates.length - 1;
                                format = this.o.format;
                            } else if (typeof ix === 'string') {
                                format = ix;
                                ix = this.dates.length - 1;
                            }
                            format = format || this.o.format;
                            var date = this.dates.get(ix);
                            return DPGlobal.formatDate(date, format, this.o.language);
                        }, this)
                    });
                },

                show: function() {
                    if (!this.isInline)
                        this.picker.appendTo('body');
                    this.picker.show();
                    this.place();
                    this._attachSecondaryEvents();
                    this._trigger('show');
                },

                hide: function() {
                    if (this.isInline)
                        return;
                    if (!this.picker.is(':visible'))
                        return;
                    this.focusDate = null;
                    this.picker.hide().detach();
                    this._detachSecondaryEvents();
                    this.viewMode = this.o.startView;
                    this.showMode();

                    if (
                        this.o.forceParse &&
                        (
                            this.isInput && this.element.val() ||
                            this.hasInput && this.element.find('input').val()
                        )
                    )
                        this.setValue();
                    this._trigger('hide');
                },

                remove: function() {
                    this.hide();
                    this._detachEvents();
                    this._detachSecondaryEvents();
                    this.picker.remove();
                    delete this.element.data().datepicker;
                    if (!this.isInput) {
                        delete this.element.data().date;
                    }
                },

                _utc_to_local: function(utc) {
                    return utc && new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));
                },
                _local_to_utc: function(local) {
                    return local && new Date(local.getTime() - (local.getTimezoneOffset() * 60000));
                },
                _zero_time: function(local) {
                    return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
                },
                _zero_utc_time: function(utc) {
                    return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
                },

                getDates: function() {
                    return $.map(this.dates, this._utc_to_local);
                },

                getUTCDates: function() {
                    return $.map(this.dates, function(d) {
                        return new Date(d);
                    });
                },

                getDate: function() {
                    return this._utc_to_local(this.getUTCDate());
                },

                getUTCDate: function() {
                    return new Date(this.dates.get(-1));
                },

                setDates: function() {
                    var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
                    this.update.apply(this, args);
                    this._trigger('changeDate');
                    this.setValue();
                },

                setUTCDates: function() {
                    var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
                    this.update.apply(this, $.map(args, this._utc_to_local));
                    this._trigger('changeDate');
                    this.setValue();
                },

                setDate: alias('setDates'),
                setUTCDate: alias('setUTCDates'),

                setValue: function() {
                    var formatted = this.getFormattedDate();
                    if (!this.isInput) {
                        if (this.component) {
                            this.element.find('input').val(formatted).change();
                        }
                    } else {
                        this.element.val(formatted).change();
                    }
                },

                getFormattedDate: function(format) {
                    if (format === undefined)
                        format = this.o.format;

                    var lang = this.o.language;
                    return $.map(this.dates, function(d) {
                        return DPGlobal.formatDate(d, format, lang);
                    }).join(this.o.multidateSeparator);
                },

                setStartDate: function(startDate) {
                    this._process_options({
                        startDate: startDate
                    });
                    this.update();
                    this.updateNavArrows();
                },

                setEndDate: function(endDate) {
                    this._process_options({
                        endDate: endDate
                    });
                    this.update();
                    this.updateNavArrows();
                },

                setDaysOfWeekDisabled: function(daysOfWeekDisabled) {
                    this._process_options({
                        daysOfWeekDisabled: daysOfWeekDisabled
                    });
                    this.update();
                    this.updateNavArrows();
                },

                place: function() {
                    if (this.isInline)
                        return;
                    var calendarWidth = this.picker.outerWidth(),
                        calendarHeight = this.picker.outerHeight(),
                        visualPadding = 10,
                        windowWidth = $window.width(),
                        windowHeight = $window.height(),
                        scrollTop = $window.scrollTop();

                    var zIndex = parseInt(this.element.parents().filter(function() {
                        return $(this).css('z-index') !== 'auto';
                    }).first().css('z-index')) + 10;
                    var offset = this.component ? this.component.parent().offset() : this.element.offset();
                    var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
                    var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
                    var left = offset.left,
                        top = offset.top;

                    this.picker.removeClass(
                        'datepicker-orient-top datepicker-orient-bottom ' +
                        'datepicker-orient-right datepicker-orient-left'
                    );

                    if (this.o.orientation.x !== 'auto') {
                        this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
                        if (this.o.orientation.x === 'right')
                            left -= calendarWidth - width;
                    }
                    // auto x orientation is best-placement: if it crosses a window
                    // edge, fudge it sideways
                    else {
                        // Default to left
                        this.picker.addClass('datepicker-orient-left');
                        if (offset.left < 0)
                            left -= offset.left - visualPadding;
                        else if (offset.left + calendarWidth > windowWidth)
                            left = windowWidth - calendarWidth - visualPadding;
                    }

                    // auto y orientation is best-situation: top or bottom, no fudging,
                    // decision based on which shows more of the calendar
                    var yorient = this.o.orientation.y,
                        top_overflow, bottom_overflow;
                    if (yorient === 'auto') {
                        top_overflow = -scrollTop + offset.top - calendarHeight;
                        bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
                        if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
                            yorient = 'top';
                        else
                            yorient = 'bottom';
                    }
                    this.picker.addClass('datepicker-orient-' + yorient);
                    if (yorient === 'top')
                        top += height;
                    else
                        top -= calendarHeight + parseInt(this.picker.css('padding-top'));

                    this.picker.css({
                        top: top,
                        left: left,
                        zIndex: zIndex
                    });
                },

                _allow_update: true,
                update: function() {
                    if (!this._allow_update)
                        return;

                    var oldDates = this.dates.copy(),
                        dates = [],
                        fromArgs = false;
                    if (arguments.length) {
                        $.each(arguments, $.proxy(function(i, date) {
                            if (date instanceof Date)
                                date = this._local_to_utc(date);
                            dates.push(date);
                        }, this));
                        fromArgs = true;
                    } else {
                        dates = this.isInput ?
                            this.element.val() :
                            this.element.data('date') || this.element.find('input').val();
                        if (dates && this.o.multidate)
                            dates = dates.split(this.o.multidateSeparator);
                        else
                            dates = [dates];
                        delete this.element.data().date;
                    }

                    dates = $.map(dates, $.proxy(function(date) {
                        return DPGlobal.parseDate(date, this.o.format, this.o.language);
                    }, this));
                    dates = $.grep(dates, $.proxy(function(date) {
                        return (
                            date < this.o.startDate ||
                            date > this.o.endDate ||
                            !date
                        );
                    }, this), true);
                    this.dates.replace(dates);

                    if (this.dates.length)
                        this.viewDate = new Date(this.dates.get(-1));
                    else if (this.viewDate < this.o.startDate)
                        this.viewDate = new Date(this.o.startDate);
                    else if (this.viewDate > this.o.endDate)
                        this.viewDate = new Date(this.o.endDate);

                    if (fromArgs) {
                        // setting date by clicking
                        this.setValue();
                    } else if (dates.length) {
                        // setting date by typing
                        if (String(oldDates) !== String(this.dates))
                            this._trigger('changeDate');
                    }
                    if (!this.dates.length && oldDates.length)
                        this._trigger('clearDate');

                    this.fill();
                },

                fillDow: function() {
                    var dowCnt = this.o.weekStart,
                        html = '<tr>';
                    if (this.o.calendarWeeks) {
                        var cell = '<th class="cw">&nbsp;</th>';
                        html += cell;
                        this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
                    }
                    while (dowCnt < this.o.weekStart + 7) {
                        html += '<th class="dow">' + dates[this.o.language].daysMin[(dowCnt++) % 7] + '</th>';
                    }
                    html += '</tr>';
                    this.picker.find('.datepicker-days thead').append(html);
                },

                fillMonths: function() {
                    var html = '',
                        i = 0;
                    while (i < 12) {
                        html += '<span class="month">' + dates[this.o.language].monthsShort[i++] + '</span>';
                    }
                    this.picker.find('.datepicker-months td').html(html);
                },

                setRange: function(range) {
                    if (!range || !range.length)
                        delete this.range;
                    else
                        this.range = $.map(range, function(d) {
                            return d.valueOf();
                        });
                    this.fill();
                },

                getClassNames: function(date) {
                    var cls = [],
                        year = this.viewDate.getUTCFullYear(),
                        month = this.viewDate.getUTCMonth(),
                        today = new Date();
                    if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)) {
                        cls.push('old');
                    } else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)) {
                        cls.push('new');
                    }
                    if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
                        cls.push('focused');
                    // Compare internal UTC date with local today, not UTC today
                    if (this.o.todayHighlight &&
                        date.getUTCFullYear() === today.getFullYear() &&
                        date.getUTCMonth() === today.getMonth() &&
                        date.getUTCDate() === today.getDate()) {
                        cls.push('today');
                    }
                    if (this.dates.contains(date) !== -1)
                        cls.push('active');
                    if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
                        $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
                        cls.push('disabled');
                    }
                    if (this.range) {
                        if (date > this.range[0] && date < this.range[this.range.length - 1]) {
                            cls.push('range');
                        }
                        if ($.inArray(date.valueOf(), this.range) !== -1) {
                            cls.push('selected');
                        }
                    }
                    return cls;
                },

                fill: function() {
                    var d = new Date(this.viewDate),
                        year = d.getUTCFullYear(),
                        month = d.getUTCMonth(),
                        startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                        startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                        endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                        endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                        todaytxt = dates[this.o.language].today || dates['en'].today || '',
                        cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
                        tooltip;
                    this.picker.find('.datepicker-days thead th.datepicker-switch')
                        .text(dates[this.o.language].months[month] + ' ' + year);
                    this.picker.find('tfoot th.today')
                        .text(todaytxt)
                        .toggle(this.o.todayBtn !== false);
                    this.picker.find('tfoot th.clear')
                        .text(cleartxt)
                        .toggle(this.o.clearBtn !== false);
                    this.updateNavArrows();
                    this.fillMonths();
                    var prevMonth = UTCDate(year, month - 1, 28),
                        day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
                    prevMonth.setUTCDate(day);
                    prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
                    var nextMonth = new Date(prevMonth);
                    nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
                    nextMonth = nextMonth.valueOf();
                    var html = [];
                    var clsName;
                    while (prevMonth.valueOf() < nextMonth) {
                        if (prevMonth.getUTCDay() === this.o.weekStart) {
                            html.push('<tr>');
                            if (this.o.calendarWeeks) {
                                // ISO 8601: First week contains first thursday.
                                // ISO also states week starts on Monday, but we can be more abstract here.
                                var
                                    // Start of current week: based on weekstart/current date
                                    ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
                                    // Thursday of this week
                                    th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                                    // First Thursday of year, year from thursday
                                    yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
                                    // Calendar week: ms between thursdays, div ms per day, div 7 days
                                    calWeek = (th - yth) / 864e5 / 7 + 1;
                                html.push('<td class="cw">' + calWeek + '</td>');

                            }
                        }
                        clsName = this.getClassNames(prevMonth);
                        clsName.push('day');

                        if (this.o.beforeShowDay !== $.noop) {
                            var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
                            if (before === undefined)
                                before = {};
                            else if (typeof(before) === 'boolean')
                                before = {
                                    enabled: before
                                };
                            else if (typeof(before) === 'string')
                                before = {
                                    classes: before
                                };
                            if (before.enabled === false)
                                clsName.push('disabled');
                            if (before.classes)
                                clsName = clsName.concat(before.classes.split(/\s+/));
                            if (before.tooltip)
                                tooltip = before.tooltip;
                        }

                        clsName = $.unique(clsName);
                        html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');
                        if (prevMonth.getUTCDay() === this.o.weekEnd) {
                            html.push('</tr>');
                        }
                        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
                    }
                    this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

                    var months = this.picker.find('.datepicker-months')
                        .find('th:eq(1)')
                        .text(year)
                        .end()
                        .find('span').removeClass('active');

                    $.each(this.dates, function(i, d) {
                        if (d.getUTCFullYear() === year)
                            months.eq(d.getUTCMonth()).addClass('active');
                    });

                    if (year < startYear || year > endYear) {
                        months.addClass('disabled');
                    }
                    if (year === startYear) {
                        months.slice(0, startMonth).addClass('disabled');
                    }
                    if (year === endYear) {
                        months.slice(endMonth + 1).addClass('disabled');
                    }

                    html = '';
                    year = parseInt(year / 10, 10) * 10;
                    var yearCont = this.picker.find('.datepicker-years')
                        .find('th:eq(1)')
                        .text(year + '-' + (year + 9))
                        .end()
                        .find('td');
                    year -= 1;
                    var years = $.map(this.dates, function(d) {
                            return d.getUTCFullYear();
                        }),
                        classes;
                    for (var i = -1; i < 11; i++) {
                        classes = ['year'];
                        if (i === -1)
                            classes.push('old');
                        else if (i === 10)
                            classes.push('new');
                        if ($.inArray(year, years) !== -1)
                            classes.push('active');
                        if (year < startYear || year > endYear)
                            classes.push('disabled');
                        html += '<span class="' + classes.join(' ') + '">' + year + '</span>';
                        year += 1;
                    }
                    yearCont.html(html);
                },

                updateNavArrows: function() {
                    if (!this._allow_update)
                        return;

                    var d = new Date(this.viewDate),
                        year = d.getUTCFullYear(),
                        month = d.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
                                this.picker.find('.prev').css({
                                    visibility: 'hidden'
                                });
                            } else {
                                this.picker.find('.prev').css({
                                    visibility: 'visible'
                                });
                            }
                            if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
                                this.picker.find('.next').css({
                                    visibility: 'hidden'
                                });
                            } else {
                                this.picker.find('.next').css({
                                    visibility: 'visible'
                                });
                            }
                            break;
                        case 1:
                        case 2:
                            if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
                                this.picker.find('.prev').css({
                                    visibility: 'hidden'
                                });
                            } else {
                                this.picker.find('.prev').css({
                                    visibility: 'visible'
                                });
                            }
                            if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
                                this.picker.find('.next').css({
                                    visibility: 'hidden'
                                });
                            } else {
                                this.picker.find('.next').css({
                                    visibility: 'visible'
                                });
                            }
                            break;
                    }
                },

                click: function(e) {
                    e.preventDefault();
                    var target = $(e.target).closest('span, td, th'),
                        year, month, day;
                    if (target.length === 1) {
                        switch (target[0].nodeName.toLowerCase()) {
                            case 'th':
                                switch (target[0].className) {
                                    case 'datepicker-switch':
                                        this.showMode(1);
                                        break;
                                    case 'prev':
                                    case 'next':
                                        var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
                                        switch (this.viewMode) {
                                            case 0:
                                                this.viewDate = this.moveMonth(this.viewDate, dir);
                                                this._trigger('changeMonth', this.viewDate);
                                                break;
                                            case 1:
                                            case 2:
                                                this.viewDate = this.moveYear(this.viewDate, dir);
                                                if (this.viewMode === 1)
                                                    this._trigger('changeYear', this.viewDate);
                                                break;
                                        }
                                        this.fill();
                                        break;
                                    case 'today':
                                        var date = new Date();
                                        date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

                                        this.showMode(-2);
                                        var which = this.o.todayBtn === 'linked' ? null : 'view';
                                        this._setDate(date, which);
                                        break;
                                    case 'clear':
                                        var element;
                                        if (this.isInput)
                                            element = this.element;
                                        else if (this.component)
                                            element = this.element.find('input');
                                        if (element)
                                            element.val("").change();
                                        this.update();
                                        this._trigger('changeDate');
                                        if (this.o.autoclose)
                                            this.hide();
                                        break;
                                }
                                break;
                            case 'span':
                                if (!target.is('.disabled')) {
                                    this.viewDate.setUTCDate(1);
                                    if (target.is('.month')) {
                                        day = 1;
                                        month = target.parent().find('span').index(target);
                                        year = this.viewDate.getUTCFullYear();
                                        this.viewDate.setUTCMonth(month);
                                        this._trigger('changeMonth', this.viewDate);
                                        if (this.o.minViewMode === 1) {
                                            this._setDate(UTCDate(year, month, day));
                                        }
                                    } else {
                                        day = 1;
                                        month = 0;
                                        year = parseInt(target.text(), 10) || 0;
                                        this.viewDate.setUTCFullYear(year);
                                        this._trigger('changeYear', this.viewDate);
                                        if (this.o.minViewMode === 2) {
                                            this._setDate(UTCDate(year, month, day));
                                        }
                                    }
                                    this.showMode(-1);
                                    this.fill();
                                }
                                break;
                            case 'td':
                                if (target.is('.day') && !target.is('.disabled')) {
                                    day = parseInt(target.text(), 10) || 1;
                                    year = this.viewDate.getUTCFullYear();
                                    month = this.viewDate.getUTCMonth();
                                    if (target.is('.old')) {
                                        if (month === 0) {
                                            month = 11;
                                            year -= 1;
                                        } else {
                                            month -= 1;
                                        }
                                    } else if (target.is('.new')) {
                                        if (month === 11) {
                                            month = 0;
                                            year += 1;
                                        } else {
                                            month += 1;
                                        }
                                    }
                                    this._setDate(UTCDate(year, month, day));
                                }
                                break;
                        }
                    }
                    if (this.picker.is(':visible') && this._focused_from) {
                        $(this._focused_from).focus();
                    }
                    delete this._focused_from;
                },

                _toggle_multidate: function(date) {
                    var ix = this.dates.contains(date);
                    if (!date) {
                        this.dates.clear();
                    } else if (ix !== -1) {
                        this.dates.remove(ix);
                    } else {
                        this.dates.push(date);
                    }
                    if (typeof this.o.multidate === 'number')
                        while (this.dates.length > this.o.multidate)
                            this.dates.remove(0);
                },

                _setDate: function(date, which) {
                    if (!which || which === 'date')
                        this._toggle_multidate(date && new Date(date));
                    if (!which || which === 'view')
                        this.viewDate = date && new Date(date);

                    this.fill();
                    this.setValue();
                    this._trigger('changeDate');
                    var element;
                    if (this.isInput) {
                        element = this.element;
                    } else if (this.component) {
                        element = this.element.find('input');
                    }
                    if (element) {
                        element.change();
                    }
                    if (this.o.autoclose && (!which || which === 'date')) {
                        this.hide();
                    }
                },

                moveMonth: function(date, dir) {
                    if (!date)
                        return undefined;
                    if (!dir)
                        return date;
                    var new_date = new Date(date.valueOf()),
                        day = new_date.getUTCDate(),
                        month = new_date.getUTCMonth(),
                        mag = Math.abs(dir),
                        new_month, test;
                    dir = dir > 0 ? 1 : -1;
                    if (mag === 1) {
                        test = dir === -1
                            // If going back one month, make sure month is not current month
                            // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                            ?
                            function() {
                                return new_date.getUTCMonth() === month;
                            }
                            // If going forward one month, make sure month is as expected
                            // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                            :
                            function() {
                                return new_date.getUTCMonth() !== new_month;
                            };
                        new_month = month + dir;
                        new_date.setUTCMonth(new_month);
                        // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                        if (new_month < 0 || new_month > 11)
                            new_month = (new_month + 12) % 12;
                    } else {
                        // For magnitudes >1, move one month at a time...
                        for (var i = 0; i < mag; i++)
                            // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                            new_date = this.moveMonth(new_date, dir);
                        // ...then reset the day, keeping it in the new month
                        new_month = new_date.getUTCMonth();
                        new_date.setUTCDate(day);
                        test = function() {
                            return new_month !== new_date.getUTCMonth();
                        };
                    }
                    // Common date-resetting loop -- if date is beyond end of month, make it
                    // end of month
                    while (test()) {
                        new_date.setUTCDate(--day);
                        new_date.setUTCMonth(new_month);
                    }
                    return new_date;
                },

                moveYear: function(date, dir) {
                    return this.moveMonth(date, dir * 12);
                },

                dateWithinRange: function(date) {
                    return date >= this.o.startDate && date <= this.o.endDate;
                },

                keydown: function(e) {
                    if (this.picker.is(':not(:visible)')) {
                        if (e.keyCode === 27) // allow escape to hide and re-show picker
                            this.show();
                        return;
                    }
                    var dateChanged = false,
                        dir, newDate, newViewDate,
                        focusDate = this.focusDate || this.viewDate;
                    switch (e.keyCode) {
                        case 27: // escape
                            if (this.focusDate) {
                                this.focusDate = null;
                                this.viewDate = this.dates.get(-1) || this.viewDate;
                                this.fill();
                            } else
                                this.hide();
                            e.preventDefault();
                            break;
                        case 37: // left
                        case 39: // right
                            if (!this.o.keyboardNavigation)
                                break;
                            dir = e.keyCode === 37 ? -1 : 1;
                            if (e.ctrlKey) {
                                newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                                newViewDate = this.moveYear(focusDate, dir);
                                this._trigger('changeYear', this.viewDate);
                            } else if (e.shiftKey) {
                                newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                                newViewDate = this.moveMonth(focusDate, dir);
                                this._trigger('changeMonth', this.viewDate);
                            } else {
                                newDate = new Date(this.dates.get(-1) || UTCToday());
                                newDate.setUTCDate(newDate.getUTCDate() + dir);
                                newViewDate = new Date(focusDate);
                                newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
                            }
                            if (this.dateWithinRange(newDate)) {
                                this.focusDate = this.viewDate = newViewDate;
                                this.setValue();
                                this.fill();
                                e.preventDefault();
                            }
                            break;
                        case 38: // up
                        case 40: // down
                            if (!this.o.keyboardNavigation)
                                break;
                            dir = e.keyCode === 38 ? -1 : 1;
                            if (e.ctrlKey) {
                                newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                                newViewDate = this.moveYear(focusDate, dir);
                                this._trigger('changeYear', this.viewDate);
                            } else if (e.shiftKey) {
                                newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                                newViewDate = this.moveMonth(focusDate, dir);
                                this._trigger('changeMonth', this.viewDate);
                            } else {
                                newDate = new Date(this.dates.get(-1) || UTCToday());
                                newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
                                newViewDate = new Date(focusDate);
                                newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
                            }
                            if (this.dateWithinRange(newDate)) {
                                this.focusDate = this.viewDate = newViewDate;
                                this.setValue();
                                this.fill();
                                e.preventDefault();
                            }
                            break;
                        case 32: // spacebar
                            // Spacebar is used in manually typing dates in some formats.
                            // As such, its behavior should not be hijacked.
                            break;
                        case 13: // enter
                            focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
                            this._toggle_multidate(focusDate);
                            dateChanged = true;
                            this.focusDate = null;
                            this.viewDate = this.dates.get(-1) || this.viewDate;
                            this.setValue();
                            this.fill();
                            if (this.picker.is(':visible')) {
                                e.preventDefault();
                                if (this.o.autoclose)
                                    this.hide();
                            }
                            break;
                        case 9: // tab
                            this.focusDate = null;
                            this.viewDate = this.dates.get(-1) || this.viewDate;
                            this.fill();
                            this.hide();
                            break;
                    }
                    if (dateChanged) {
                        if (this.dates.length)
                            this._trigger('changeDate');
                        else
                            this._trigger('clearDate');
                        var element;
                        if (this.isInput) {
                            element = this.element;
                        } else if (this.component) {
                            element = this.element.find('input');
                        }
                        if (element) {
                            element.change();
                        }
                    }
                },

                showMode: function(dir) {
                    if (dir) {
                        this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
                    }
                    this.picker
                        .find('>div')
                        .hide()
                        .filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
                        .css('display', 'block');
                    this.updateNavArrows();
                }
            };

            var DateRangePicker = function(element, options) {
                this.element = $(element);
                this.inputs = $.map(options.inputs, function(i) {
                    return i.jquery ? i[0] : i;
                });
                delete options.inputs;

                $(this.inputs)
                    .datepicker(options)
                    .bind('changeDate', $.proxy(this.dateUpdated, this));

                this.pickers = $.map(this.inputs, function(i) {
                    return $(i).data('datepicker');
                });
                this.updateDates();
            };
            DateRangePicker.prototype = {
                updateDates: function() {
                    this.dates = $.map(this.pickers, function(i) {
                        return i.getUTCDate();
                    });
                    this.updateRanges();
                },
                updateRanges: function() {
                    var range = $.map(this.dates, function(d) {
                        return d.valueOf();
                    });
                    $.each(this.pickers, function(i, p) {
                        p.setRange(range);
                    });
                },
                dateUpdated: function(e) {
                    // `this.updating` is a workaround for preventing infinite recursion
                    // between `changeDate` triggering and `setUTCDate` calling.  Until
                    // there is a better mechanism.
                    if (this.updating)
                        return;
                    this.updating = true;

                    var dp = $(e.target).data('datepicker'),
                        new_date = dp.getUTCDate(),
                        i = $.inArray(e.target, this.inputs),
                        l = this.inputs.length;
                    if (i === -1)
                        return;

                    $.each(this.pickers, function(i, p) {
                        if (!p.getUTCDate())
                            p.setUTCDate(new_date);
                    });

                    if (new_date < this.dates[i]) {
                        // Date being moved earlier/left
                        while (i >= 0 && new_date < this.dates[i]) {
                            this.pickers[i--].setUTCDate(new_date);
                        }
                    } else if (new_date > this.dates[i]) {
                        // Date being moved later/right
                        while (i < l && new_date > this.dates[i]) {
                            this.pickers[i++].setUTCDate(new_date);
                        }
                    }
                    this.updateDates();

                    delete this.updating;
                },
                remove: function() {
                    $.map(this.pickers, function(p) {
                        p.remove();
                    });
                    delete this.element.data().datepicker;
                }
            };

            function opts_from_el(el, prefix) {
                // Derive options from element data-attrs
                var data = $(el).data(),
                    out = {},
                    inkey,
                    replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
                prefix = new RegExp('^' + prefix.toLowerCase());

                function re_lower(_, a) {
                    return a.toLowerCase();
                }
                for (var key in data)
                    if (prefix.test(key)) {
                        inkey = key.replace(replace, re_lower);
                        out[inkey] = data[key];
                    }
                return out;
            }

            function opts_from_locale(lang) {
                // Derive options from locale plugins
                var out = {};
                // Check if "de-DE" style date is available, if not language should
                // fallback to 2 letter code eg "de"
                if (!dates[lang]) {
                    lang = lang.split('-')[0];
                    if (!dates[lang])
                        return;
                }
                var d = dates[lang];
                $.each(locale_opts, function(i, k) {
                    if (k in d)
                        out[k] = d[k];
                });
                return out;
            }

            var old = $.fn.datepicker;
            $.fn.datepicker = function(option) {
                var args = Array.apply(null, arguments);
                args.shift();
                var internal_return;
                this.each(function() {
                    var $this = $(this),
                        data = $this.data('datepicker'),
                        options = typeof option === 'object' && option;
                    if (!data) {
                        var elopts = opts_from_el(this, 'date'),
                            // Preliminary otions
                            xopts = $.extend({}, defaults, elopts, options),
                            locopts = opts_from_locale(xopts.language),
                            // Options priority: js args, data-attrs, locales, defaults
                            opts = $.extend({}, defaults, locopts, elopts, options);
                        if ($this.is('.input-daterange') || opts.inputs) {
                            var ropts = {
                                inputs: opts.inputs || $this.find('input').toArray()
                            };
                            $this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
                        } else {
                            $this.data('datepicker', (data = new Datepicker(this, opts)));
                        }
                    }
                    if (typeof option === 'string' && typeof data[option] === 'function') {
                        internal_return = data[option].apply(data, args);
                        if (internal_return !== undefined)
                            return false;
                    }
                });
                if (internal_return !== undefined)
                    return internal_return;
                else
                    return this;
            };

            var defaults = $.fn.datepicker.defaults = {
                autoclose: false,
                beforeShowDay: $.noop,
                calendarWeeks: false,
                clearBtn: false,
                daysOfWeekDisabled: [],
                endDate: Infinity,
                forceParse: true,
                format: 'mm/dd/yyyy',
                keyboardNavigation: true,
                language: 'en',
                minViewMode: 0,
                multidate: false,
                multidateSeparator: ',',
                orientation: "auto",
                rtl: false,
                startDate: -Infinity,
                startView: 0,
                todayBtn: false,
                todayHighlight: false,
                weekStart: 0
            };
            var locale_opts = $.fn.datepicker.locale_opts = [
                'format',
                'rtl',
                'weekStart'
            ];
            $.fn.datepicker.Constructor = Datepicker;
            var dates = $.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear"
                }
            };

            var DPGlobal = {
                modes: [{
                        clsName: 'days',
                        navFnc: 'Month',
                        navStep: 1
                    },
                    {
                        clsName: 'months',
                        navFnc: 'FullYear',
                        navStep: 1
                    },
                    {
                        clsName: 'years',
                        navFnc: 'FullYear',
                        navStep: 10
                    }
                ],
                isLeapYear: function(year) {
                    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
                },
                getDaysInMonth: function(year, month) {
                    return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(format) {
                    // IE treats \0 as a string end in inputs (truncating the value),
                    // so it's a bad format delimiter, anyway
                    var separators = format.replace(this.validParts, '\0').split('\0'),
                        parts = format.match(this.validParts);
                    if (!separators || !separators.length || !parts || parts.length === 0) {
                        throw new Error("Invalid date format.");
                    }
                    return {
                        separators: separators,
                        parts: parts
                    };
                },
                parseDate: function(date, format, language) {
                    if (!date)
                        return undefined;
                    if (date instanceof Date)
                        return date;
                    if (typeof format === 'string')
                        format = DPGlobal.parseFormat(format);
                    var part_re = /([\-+]\d+)([dmwy])/,
                        parts = date.match(/([\-+]\d+)([dmwy])/g),
                        part, dir, i;
                    if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
                        date = new Date();
                        for (i = 0; i < parts.length; i++) {
                            part = part_re.exec(parts[i]);
                            dir = parseInt(part[1]);
                            switch (part[2]) {
                                case 'd':
                                    date.setUTCDate(date.getUTCDate() + dir);
                                    break;
                                case 'm':
                                    date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                                    break;
                                case 'w':
                                    date.setUTCDate(date.getUTCDate() + dir * 7);
                                    break;
                                case 'y':
                                    date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                                    break;
                            }
                        }
                        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
                    }
                    parts = date && date.match(this.nonpunctuation) || [];
                    date = new Date();
                    var parsed = {},
                        setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                        setters_map = {
                            yyyy: function(d, v) {
                                return d.setUTCFullYear(v);
                            },
                            yy: function(d, v) {
                                return d.setUTCFullYear(2000 + v);
                            },
                            m: function(d, v) {
                                if (isNaN(d))
                                    return d;
                                v -= 1;
                                while (v < 0) v += 12;
                                v %= 12;
                                d.setUTCMonth(v);
                                while (d.getUTCMonth() !== v)
                                    d.setUTCDate(d.getUTCDate() - 1);
                                return d;
                            },
                            d: function(d, v) {
                                return d.setUTCDate(v);
                            }
                        },
                        val, filtered;
                    setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
                    setters_map['dd'] = setters_map['d'];
                    date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                    var fparts = format.parts.slice();
                    // Remove noop parts
                    if (parts.length !== fparts.length) {
                        fparts = $(fparts).filter(function(i, p) {
                            return $.inArray(p, setters_order) !== -1;
                        }).toArray();
                    }
                    // Process remainder
                    function match_part() {
                        var m = this.slice(0, parts[i].length),
                            p = parts[i].slice(0, m.length);
                        return m === p;
                    }
                    if (parts.length === fparts.length) {
                        var cnt;
                        for (i = 0, cnt = fparts.length; i < cnt; i++) {
                            val = parseInt(parts[i], 10);
                            part = fparts[i];
                            if (isNaN(val)) {
                                switch (part) {
                                    case 'MM':
                                        filtered = $(dates[language].months).filter(match_part);
                                        val = $.inArray(filtered[0], dates[language].months) + 1;
                                        break;
                                    case 'M':
                                        filtered = $(dates[language].monthsShort).filter(match_part);
                                        val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                        break;
                                }
                            }
                            parsed[part] = val;
                        }
                        var _date, s;
                        for (i = 0; i < setters_order.length; i++) {
                            s = setters_order[i];
                            if (s in parsed && !isNaN(parsed[s])) {
                                _date = new Date(date);
                                setters_map[s](_date, parsed[s]);
                                if (!isNaN(_date))
                                    date = _date;
                            }
                        }
                    }
                    return date;
                },
                formatDate: function(date, format, language) {
                    if (!date)
                        return '';
                    if (typeof format === 'string')
                        format = DPGlobal.parseFormat(format);
                    var val = {
                        d: date.getUTCDate(),
                        D: dates[language].daysShort[date.getUTCDay()],
                        DD: dates[language].days[date.getUTCDay()],
                        m: date.getUTCMonth() + 1,
                        M: dates[language].monthsShort[date.getUTCMonth()],
                        MM: dates[language].months[date.getUTCMonth()],
                        yy: date.getUTCFullYear().toString().substring(2),
                        yyyy: date.getUTCFullYear()
                    };
                    val.dd = (val.d < 10 ? '0' : '') + val.d;
                    val.mm = (val.m < 10 ? '0' : '') + val.m;
                    date = [];
                    var seps = $.extend([], format.separators);
                    for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
                        if (seps.length)
                            date.push(seps.shift());
                        date.push(val[format.parts[i]]);
                    }
                    return date.join('');
                },
                headTemplate: '<thead>' +
                    '<tr>' +
                    '<th class="prev">&laquo;</th>' +
                    '<th colspan="5" class="datepicker-switch"></th>' +
                    '<th class="next">&raquo;</th>' +
                    '</tr>' +
                    '</thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot>' +
                    '<tr>' +
                    '<th colspan="7" class="today"></th>' +
                    '</tr>' +
                    '<tr>' +
                    '<th colspan="7" class="clear"></th>' +
                    '</tr>' +
                    '</tfoot>'
            };
            DPGlobal.template = '<div class="datepicker">' +
                '<div class="datepicker-days">' +
                '<table class=" table-condensed">' +
                DPGlobal.headTemplate +
                '<tbody></tbody>' +
                DPGlobal.footTemplate +
                '</table>' +
                '</div>' +
                '<div class="datepicker-months">' +
                '<table class="table-condensed">' +
                DPGlobal.headTemplate +
                DPGlobal.contTemplate +
                DPGlobal.footTemplate +
                '</table>' +
                '</div>' +
                '<div class="datepicker-years">' +
                '<table class="table-condensed">' +
                DPGlobal.headTemplate +
                DPGlobal.contTemplate +
                DPGlobal.footTemplate +
                '</table>' +
                '</div>' +
                '</div>';

            $.fn.datepicker.DPGlobal = DPGlobal;


            /* DATEPICKER NO CONFLICT
             * =================== */

            $.fn.datepicker.noConflict = function() {
                $.fn.datepicker = old;
                return this;
            };


            /* DATEPICKER DATA-API
             * ================== */

            $(document).on(
                'focus.datepicker.data-api click.datepicker.data-api',
                '[data-provide="datepicker"]',
                function(e) {
                    var $this = $(this);
                    if ($this.data('datepicker'))
                        return;
                    e.preventDefault();
                    // component click requires us to explicitly show it
                    $this.datepicker('show');
                }
            );
            $(function() {
                $('[data-provide="datepicker-inline"]').datepicker();
            });

        }(window.jQuery));

        /*
         * Date Format 1.2.3
         * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
         * MIT license
         *
         * Includes enhancements by Scott Trenda <scott.trenda.net>
         * and Kris Kowal <cixar.com/~kris.kowal/>
         *
         * Accepts a date, a mask, or a date and a mask.
         * Returns a formatted version of the given date.
         * The date defaults to the current date/time.
         * The mask defaults to dateFormat.masks.default.
         */

        var dateFormat = function() {
            var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                timezoneClip = /[^-+\dA-Z]/g,
                pad = function(val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) val = "0" + val;
                    return val;
                };

            // Regexes and supporting functions are cached through closure
            return function(date, mask, utc) {
                var dF = dateFormat;

                // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
                if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                    mask = date;
                    date = undefined;
                }

                // Passing date through Date applies Date.parse, if necessary
                date = date ? new Date(date) : new Date;
                if (isNaN(date)) throw SyntaxError("invalid date");

                mask = String(dF.masks[mask] || mask || dF.masks["default"]);

                // Allow setting the utc argument via the mask
                if (mask.slice(0, 4) == "UTC:") {
                    mask = mask.slice(4);
                    utc = true;
                }

                var _ = utc ? "getUTC" : "get",
                    d = date[_ + "Date"](),
                    D = date[_ + "Day"](),
                    m = date[_ + "Month"](),
                    y = date[_ + "FullYear"](),
                    H = date[_ + "Hours"](),
                    M = date[_ + "Minutes"](),
                    s = date[_ + "Seconds"](),
                    L = date[_ + "Milliseconds"](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                        d: d,
                        dd: pad(d),
                        ddd: dF.i18n.dayNames[D],
                        dddd: dF.i18n.dayNames[D + 7],
                        m: m + 1,
                        mm: pad(m + 1),
                        mmm: dF.i18n.monthNames[m],
                        mmmm: dF.i18n.monthNames[m + 12],
                        yy: String(y).slice(2),
                        yyyy: y,
                        h: H % 12 || 12,
                        hh: pad(H % 12 || 12),
                        H: H,
                        HH: pad(H),
                        M: M,
                        MM: pad(M),
                        s: s,
                        ss: pad(s),
                        l: pad(L, 3),
                        L: pad(L > 99 ? Math.round(L / 10) : L),
                        t: H < 12 ? "a" : "p",
                        tt: H < 12 ? "am" : "pm",
                        T: H < 12 ? "A" : "P",
                        TT: H < 12 ? "AM" : "PM",
                        Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                        o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                        S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

                return mask.replace(token, function($0) {
                    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
                });
            };
        }();

        // Some common format strings
        dateFormat.masks = {
            "default": "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

        // Internationalization strings
        dateFormat.i18n = {
            dayNames: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            monthNames: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]
        };

        // For convenience...
        Date.prototype.format = function(mask, utc) {
            return dateFormat(this, mask, utc);
        };

        $.fn.notes = function(name) {
            return this.each(function() {
                var self = $(this);
                var add = self.find(name + "__add");
                var time = self.find(name + "__time");
                var field = self.find(name + "__field");
                var list = self.find(name + "__list");

                var prevHtml = '';

                add.on('click', function() {
                    if (field.val() != '' && field.val() != prevHtml) {
                        var html = "<li><span>" + (time.val() ? time.val() : "00:00") + "</span>" + field.val() + "</li>";
                        prevHtml = field.val();

                        list.append(html);

                        setInterval(function() {
                            prevHtml = '';
                        }, 5000)
                    }

                    return false;
                });
            });
        }

        $(function() {
            $(".b-notes").notes(".b-notes");

            $("#calendar").datepicker({
                todayHighlight: true,
                weekStart: 1
            }).on({

                'changeDate': function(e) {

                    if (typeof(e.date) == "undefined") return false;

                    var milliseconds = Date.parse(e.date);

                    setCelendarDay(milliseconds);
                }

            });

            var today = new Date();
            var milliseconds = Date.parse(today);

            setCelendarDay(milliseconds);

            function setCelendarDay(milliseconds) {
                var date = new Date(milliseconds).format("dd/mm/yyyy");
                var formatTitle = new Date(milliseconds).format("dddd, <b>d mmmm</b>");
                var list = $(".b-notes__list");
                var title = $(".b-app__title");


            }
        });

        /*--- Responsive Menu End ----*/


        //zoom popup
        $('.zoom_popup').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });


        $('.et_footer_text').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });


        // Contact Form Submition
        function checkRequire(formId, targetResp) {
            targetResp.html('');
            var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
            var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
            var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
            var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
            var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
            var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
            var check = 0;
            $('#er_msg').remove();
            var target = (typeof formId == 'object') ? $(formId) : $('#' + formId);
            target.find('input , textarea , select').each(function() {
                if ($(this).hasClass('require')) {
                    if ($(this).val().trim() == '') {
                        check = 1;
                        $(this).focus();
                        targetResp.html('You missed out some fields.');
                        $(this).addClass('error');
                        return false;
                    } else {
                        $(this).removeClass('error');
                    }
                }
                if ($(this).val().trim() != '') {
                    var valid = $(this).attr('data-valid');
                    if (typeof valid != 'undefined') {
                        if (!eval(valid).test($(this).val().trim())) {
                            $(this).addClass('error');
                            $(this).focus();
                            check = 1;
                            targetResp.html($(this).attr('data-error'));
                            return false;
                        } else {
                            $(this).removeClass('error');
                        }
                    }
                }
            });
            return check;
        }
        $(".submitForm").on("click", function() {
            var _this = $(this);
            var targetForm = _this.closest('form');
            var errroTarget = targetForm.find('.response');
            var check = checkRequire(targetForm, errroTarget);
            if (check == 0) {
                var formDetail = new FormData(targetForm[0]);
                formDetail.append('form_type', _this.attr('form-type'));
                $.ajax({
                    method: 'post',
                    url: 'ajax.php',
                    data: formDetail,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(resp) {
                    if (resp == 1) {
                        targetForm.find('input').val('');
                        targetForm.find('textarea').val('');
                        errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
                    } else {
                        errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
                    }
                });
            }
        });


        //* Isotope js

        function protfolioIsotope() {
            if ($('.portfolio-area').length) {
                // Activate isotope in container
                $(".portfoli_inner, .protfoli_inner").imagesLoaded(function() {
                    $(".protfoli_inner, .protfoli_inner").isotope({
                        layoutMode: 'grid',
                    });
                });

                // Add isotope click function 
                $(".protfoli_filter li").on('click', function() {
                    $(".protfoli_filter li").removeClass("active");
                    $(this).addClass("active");
                    var selector = $(this).attr("data-filter");
                    $(".protfoli_inner, .portfoli_inner").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 450,
                            easing: "linear",
                            queue: false,
                        }
                    });
                    return false;
                });
            };
        };

        protfolioIsotope();


        /*--- Responsive Menu Start ----*/

        $("#toggle").on("click", function() {
            var w = $('#sidebar').width();
            var pos = $('#sidebar').offset().left;

            if (pos == 0) {
                $("#sidebar").animate({
                    "left": -w
                }, "slow");
            } else {
                $("#sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#toggle_close").on("click", function() {
            var w = $('#sidebar').width();
            var pos = $('#sidebar').offset().left;

            if (pos == 0) {
                $("#sidebar").animate({
                    "left": -w
                }, "slow");
            } else {
                $("#sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        $('#cssmenu li.active').addClass('open').children('ul').show();
        $('#cssmenu li.has-sub>a').on('click', function() {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            } else {
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });

    });

})(jQuery);