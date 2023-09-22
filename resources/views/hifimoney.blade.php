@include('layouts.webheader')
    <div class="card-header d-flex justify-content-between align-items-center">
        <h2 class="mb-0" style="color:#5f61e6;">HIFI Money</h2>
        <a href="{{route('auth.login')}}" class="menu-link btn btn-outline-primary">Login</a>
    </div>
    <section class="container">
        <h2 style="text-align:center; margin-bottom:5vh;">Our Branches</h2>
        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="card text-center mb-3">
                <div class="card-body">
                    <h3 class="card-title">HIFI Mobiles (Vagai)</h3>
                    <h6 class="card-text">263/1 Thennampalayam Main Road,</h6>
                    <h6 class="card-text">Vagarayampalayam, Coimbatore,</h6>
                    <h6 class="card-text">Tamil Nadu - 641659, India</h6>
                    <h6 class="card-text">Phone: 8124213202, WhatsApp: +918124213202</h6>
                </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6">
                <div class="card text-center mb-3">
                <div class="card-body">
                    <h3 class="card-title">HIFI Mobiles (KPT)</h3>
                    <h6 class="card-text">90/1 Coimbatore Main Road,</h6>
                    <h6 class="card-text">Karumathampatti, Coimbatore,</h6>
                    <h6 class="card-text">Tamil Nadu - 641659, India</h6>
                    <h6 class="card-text">Phone: 8124213202, WhatsApp: +918124213202</h6>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="card text-center mb-3">
                <div class="card-body">
                    <h3 class="card-title">HIFI Mobiles (Arasur)</h3>
                    <h6 class="card-text">21/1 Saravanampatti Main Road,</h6>
                    <h6 class="card-text">Arasur, Coimbatore,</h6>
                    <h6 class="card-text">Tamil Nadu - 641659, India</h6>
                    <h6 class="card-text">Phone: 8124213202, WhatsApp: +918124213202</h6>
                </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6">
                <div class="card text-center mb-3">
                <div class="card-body">
                    <h3 class="card-title">HIFI Xerox</h3>
                    <h6 class="card-text">90/1 Coimbatore Main Road,</h6>
                    <h6 class="card-text">Karumathampatti, Coimbatore,</h6>
                    <h6 class="card-text">Tamil Nadu - 641659, India</h6>
                    <h6 class="card-text">Phone: 8124213202, WhatsApp: +918124213202</h6>
                </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="card-header d-flex justify-content-between align-items-center">       
            ©<script>document.write(new Date().getFullYear());</script>- All Copyrights Reserved by HIFI Technologies
            <h6>Email us - Support@hifimoney.in</h6>
        </div>
    </footer>
@include('layouts.webfooter')