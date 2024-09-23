@extends('layouts.website')
@section('content')
<!--med_tittle_section-->
<div class="med_tittle_section">
    <div class="med_img_overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="med_tittle_cont_wrapper">
                    <div class="med_tittle_cont">
                        <h1>Coronavirus Prevention </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- med_tittle_section End -->

<!--choose wrapper start-->
<div class="choose_wrapper choose_wrapper2">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="choose_heading_wrapper">
                    <h1 class="med_bottompadder20">Covid-19 protection FAQ</h1>
                    <img src="{{asset('index/images/line.png')}}" alt="title" class="med_bottompadder30">
                </div>
                <div class="sidebar_wrapper">
                    <div class="accordionFifteen">
                        <div class="panel-group" id="accordionFifteenLeft" role="tablist">
                            <div class="panel panel-default sidebar_pannel">
                                <div class="panel-heading desktop">
                                    <h4 class="panel-title">Wash your hands frequently</h4>
                                </div>
                                <div id="collapseEightLeftone" class="panel-collapse collapse show"
                                    data-parent="#accordionFifteenLeft" aria-expanded="true" role="tabpanel">
                                    <div class="panel-body">
                                        <div class="panel_cont">
                                            <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub
                                                or wash them with soap and water. <strong>Why? Washing your hands with
                                                    soap and water or using alcohol-based hand rub kills viruses that
                                                    may be on your hands.</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.panel-default -->
                            <div class="panel panel-default sidebar_pannel">
                                <div class="panel-heading horn">
                                    <h4 class="panel-title">Maintain social distancing</h4>
                                </div>
                                <div id="collapseEightLefttwo" class="panel-collapse collapse "
                                    data-parent="#accordionFifteenLeft" aria-expanded="false" style="height: 0px;"
                                    role="tabpanel">
                                    <div class="panel-body">
                                        <div class="panel_cont">
                                            <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone
                                                who is coughing or sneezing.<strong>Why? When someone coughs or sneezes
                                                    they spray small liquid droplets from their nose or mouth which may
                                                    contain virus. If you are too close, you can breathe in the
                                                    droplets, including the COVID-19 virus if the person coughing has
                                                    the disease</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.panel-default -->
                            <div class="panel panel-default sidebar_pannel">
                                <div class="panel-heading horn">
                                    <h4 class="panel-title">Avoid touching eyes, nose and mouth</h4>
                                </div>
                                <div id="collapseEightLefttwo1" class="panel-collapse collapse "
                                    data-parent="#accordionFifteenLeft" aria-expanded="false" style="height: 0px;"
                                    role="tabpanel">
                                    <div class="panel-body">
                                        <div class="panel_cont">
                                            <p>Why? Hands touch many surfaces and can pick up viruses. Once
                                                contaminated, hands can transfer the virus to your eyes, nose or mouth.
                                                From there, the virus can enter your body and can make you sick.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- /.panel-default -->
                            <div class="panel panel-default sidebar_pannel">
                                <div class="panel-heading bell">
                                    <h4 class="panel-title">Practice respiratory hygiene</h4>
                                </div>
                                <div id="collapseEightLeftfour" class="panel-collapse collapse"
                                    data-parent="#accordionFifteenLeft" aria-expanded="false" style="height: 0px;"
                                    role="tabpanel">
                                    <div class="panel-body">
                                        <div class="panel_cont">
                                            <p>Make sure you, and the people around you, follow good respiratory
                                                hygiene. This means covering your mouth and nose with your bent elbow or
                                                tissue when you cough or sneeze. Then dispose of the used tissue
                                                immediately. <strong>Why? Droplets spread virus. By following good
                                                    respiratory hygiene you protect the people around you from viruses
                                                    such as cold, flu and COVID-19.</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- /.panel-default -->
                            <div class="panel panel-default sidebar_pannel">
                                <div class="panel-heading bell">
                                    <h4 class="panel-title">
                                        Stay home if you feel unwell.
                                    </h4>
                                </div>
                                <div id="collapseEightLeftsix" class="panel-collapse collapse"
                                    data-parent="#accordionFifteenLeft" aria-expanded="false" style="height: 0px;"
                                    role="tabpanel">
                                    <div class="panel-body">
                                        <div class="panel_cont">
                                            <p>Between people who are in close contact with one another (within about 6
                                                feet).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.panel-default -->
                        </div>
                        <!--end of /.panel-group-->
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="owl_box">
                    <div class="med_slider_img">
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <img src="{{asset('index/images/corona/chs_slider_img.jpg')}}" class="img-responsive"
                                    alt="story_img" />
                            </div>
                            <div class="item">
                                <img src="{{asset('index/images/corona/chs_slider_img2.jpg')}}" class="img-responsive"
                                    alt="story_img" />
                            </div>
                            <div class="item">
                                <img src="{{asset('index/images/corona/chs_slider_img3.jpg')}}" class="img-responsive"
                                    alt="story_img" />
                            </div>
                            <div class="item">
                                <img src="{{asset('index/images/corona/chs_slider_img4.jpg')}}" class="img-responsive"
                                    alt="story_img" />
                            </div>
                            <div class="item">
                                <img src="{{asset('index/images/corona/chs_slider_img5.jpg')}}" class="img-responsive"
                                    alt="story_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--choose wrapper end-->

<!--about us wrapper start-->
<div class="about_wrapper">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="abt_img abt_box">
                    <img src="{{asset('index/images/corona/abt_img.jpg')}}" alt="img">
                </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 abt_section">
                <div class="abt_heading_wrapper">
                    <h1 class="med_bottompadder20">How COVID-19 Spreads</h1>
                    <img src="{{asset('index/images/line.png')}}" alt="title" class="med_bottompadder20">
                </div>
                <div class="abt_txt">
                    <h3>Person-to-person spread</h3>
                    <p class="med_toppadder20">The virus is thought to spread mainly from person-to-person. Between
                        people who are in close contact with one another (within about 6 feet). Through respiratory
                        droplets produced when an infected person coughs or sneezes. These droplets can land in the
                        mouths or noses of people who are nearby or possibly be inhaled into the lungs.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!--about us wrapper end-->
@endsection