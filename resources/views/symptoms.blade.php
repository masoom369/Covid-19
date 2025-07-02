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
                        <h1>Coronavirus SYMPTOMS </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- med_tittle_section End -->
<!--event wrapper start-->
<div class="event_wrapper med_toppadder100 med_bottompadder70">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="event_slider_wrapper">

                    <div class="item">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="img_section d-lg-block">
                                    <div class="icon_wrapper_event">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div class="img_wrapper1">

                                        <img src="{{asset('index/images/corona/event_1.jpg')}}" alt="img"
                                            class="img-responsive">
                                    </div>
                                    <div class="event_icon1">
                                        <h2>COUGH</h2>
                                        <p>Coughing is another key symptom, but it's not just any cough, said Schaffner.
                                            It should be a dry cough that you feel in your chest.
                                        </p>
                                    </div>
                                </div>
                                <div class="img_section">
                                    <div class="icon_wrapper_event">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div class="img_wrapper1">
                                        <img src="{{asset('index/images/corona/event_2.jpg')}}" alt="img"
                                            class="img-responsive">
                                    </div>
                                    <div class="event_icon1">
                                        <h2>FEVER</h2>

                                        <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's
                                            really not a fever until your temperature reaches at least 100 degrees.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="img_section d-lg-block">
                                    <div class="icon_wrapper_event">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div class="img_wrapper1">
                                        <img src="{{asset('index/images/corona/event_3.jpg')}}" alt="img"
                                            class="img-responsive">
                                    </div>
                                    <div class="event_icon1">
                                        <h2>TIREDNESS</h2>

                                        <p>But the pristine forest and surrounding view was more than worth the
                                            tiredness that crept into the arms and legs.
                                        </p>
                                    </div>
                                </div>
                                <div class="img_section d-lg-block">
                                    <div class="icon_wrapper_event">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div class="img_wrapper1">
                                        <img src="{{asset('index/images/corona/event_4.jpg')}}" alt="img"
                                            class="img-responsive">
                                    </div>
                                    <div class="event_icon1">
                                        <h2>Breathing</h2>

                                        <p>Shortness of breath can be a third and very serious manifestation of
                                            Covid-19, and it can occur on its own, without a cough. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<!-- event wrapper end-->

<div class="about_wrapper co_abt">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="abt_img abt_box">
                    <img src="{{asset('index/images/corona/spred.jpg')}}" alt="img" class="img-responsive">
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
@endsection