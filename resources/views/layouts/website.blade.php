<!doctype html>
<html lang="en">

<head>
    <title>Covid-19</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/animate.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/owl.carousel.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/magnific-popup.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/owl.theme.default.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/flaticon.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/fonts.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('index/css/responsive.css') }}" />
    <!-- favicon link-->
    <link rel="shortcut icon" href="{{ asset('favicon.ico')}}" type="image/x-icon">
</head>

<body>
    <header>
        <div class="menu_wrapper header-area hidden-menu-bar stick">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 wow bounceInDown" data-wow-delay="0.3s">
                        <div class="header_logo">
                            <a href="{{ url('/') }}" class="hidden-xs"><img src="{{ asset('logo.png') }}" style="width: 100px; height: 100px;" alt="logo"
                                    title="logo" class="img-responsive  d-none d-sm-none d-md-block d-lg-block"></a>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                        <div class="kv_navigation_wrapper mb-3">

                            <div class="mainmenu  d-xl-block d-lg-block d-md-block d-sm-none d-none">
                                <ul class="main_nav_ul">

                                    <li class="has-mega gc_main_navigation"><a href="{{ url('/') }}"
                                            class=" hover_color gc_main_navigation">Home</a>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="{{ url('/corona') }}"
                                            class=" hover_color gc_main_navigation">Corona</a>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="{{ url('/symptoms') }}"
                                            class=" hover_color gc_main_navigation">Symptoms</a>

                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="{{ url('/prevention') }}"
                                            class=" hover_color gc_main_navigation">Prevention</a>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="{{ url('patient/appointment') }}"
                                            class=" hover_color gc_main_navigation">Book Appointment</a>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="{{ url('patient/report') }}"
                                            class=" hover_color gc_main_navigation">Result</a>
                                    </li>
                                    @if (Route::has('login'))
                                        @auth
                                            <li><a href="{{ url('/home') }}" class="gc_main_navigation">Dashboard</a></li>
                                        @else
                                            <li> <a href="{{ route('login') }}" class="gc_main_navigation">Login</a></li>

                                            @if (Route::has('register'))
                                                <li> <a href="{{ route('register') }}" class="gc_main_navigation">Register</a></li>
                                            @endif
                                        @endauth
                                    @endif
                                </ul>
                            </div>
                            <!-- mainmenu end -->
                        </div>
                    </div>

                    <div class="rp_mobail_menu_main_wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none">
                        <div class="row d-flex align-items-center">
                            <div class="col-10 mb-3">
                                <div class="gc_logo logo_hidn ">
                                    <a class="d-flex" href="{{ url('/') }}"><img src="{{ asset('logo-no-bg.png')}}"
                                            style="width: 50px; height: 50px;" class="img-fluid" alt="logo">
                                        <h1 class="mt-3" style="color:#218ccd;">Covid-19</h1>
                                    </a>
                                </div>
                            </div>
                            <div class="col-2 d-flex align-items-center">
                                <div id="toggle">
                                    <i class="fa fa-bars" style="font-size: 1.5rem;"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="sidebar">
                        <h1>Covid-19</h1>
                        <div id="toggle_close">&times;</div>
                        <div id='cssmenu' class="wd_single_index_menu">
                            <ul>
                                <li class="has-mega gc_main_navigation"><a href="{{ url('/') }}"
                                        class=" hover_color">Home</a>
                                </li>
                                <li><a href='{{ url('/corona') }}'>Corona</a></li>
                                <li><a href='{{ url('/symptoms') }}'>symptoms</a></li>
                                <li><a href='{{ url('/prevention') }}'>prevention</a></li>
                                <li><a href='{{ url('patient/appointment')}}'>Book Appointment</a></li>
                                <li><a href='{{ url('patient/report') }}'>Result</a></li>
                                @if (Route::has('login'))
                                    @auth
                                        <li><a href="{{ url('/home') }}">Dashboard</a></li>
                                    @else
                                        <li> <a href="{{ route('login') }}">Login</a></li>

                                        @if (Route::has('register'))
                                            <li> <a href="{{ route('register') }}">Register</a></li>
                                        @endif
                                    @endauth
                                @endif
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        @yield('content')
    </main>
    <footer class="bg-dark text-white">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-6 mb-1 mt-3">
                    <h4>Covid-19</h4>
                    <p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose
                        when
                        an infected person coughs or sneezes...</p>
                    <a href="#" class="text-primary">Read More →</a>
                </div>
                <div class="col-md-6 mb-1 mt-3">
                    <h4>Pages</h4>
                    <ul class="list-unstyled">
                        <li><a href="{{url('/')}}" class="text-white">Home</a></li>
                        <li><a href="{{url('corona')}}" class="text-white">Corona</a></li>
                        <li><a href="{{url('prevention')}}" class="text-white">Prevention</a></li>
                        <li><a href="{{url('symptoms')}}" class="text-white">Symptoms</a></li>
                        <li><a href="{{url('patient/appointment')}}" class="text-white">Book Appointment</a></li>
                        <li><a href="{{url('patient/report')}}" class="text-white">Result</a></li>
                    </ul>
                </div>
            </div>
            <hr class="row-0" style="background-color: white;">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="mb-3">Copyright © 2024 - Covid-19.</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="{{ asset('index/js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('index/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('index/js/jquery.countTo.js') }}"></script>
    <script src="{{ asset('index/js/jquery.inview.min.js') }}"></script>
    <script src="{{ asset('index/js/wow.min.js') }}"></script>
    <script src="{{ asset('index/js/owl.carousel.js') }}"></script>
    <script src="{{ asset('index/js/jquery.magnific-popup.js') }}"></script>
    <script src="{{ asset('index/js/imagesloaded.pkgd.min.js') }}"></script>
    <script src="{{ asset('index/js/isotope.pkgd.min.js') }}"></script>
    <script src="{{ asset('index/js/custom.js') }}"></script>

</body>

</html>