@extends('layouts.admin_master')
@section('content')
  <div class="container-xxl flex-grow-1 container-p-y">
    
      <div class="col-lg-12 col-md-6 order-1">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-3 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="card-title d-flex align-items-start justify-content-between">
                  <div class="avatar flex-shrink-0">
                    <img src="{{asset('assets/img/icons/unicons/chart-success.png')}}" alt="chart success"
                      class="rounded" />
                  </div>
                </div>
                <span class="fw-semibold d-block mb-1">Distributors</span>
                <h3 class="card-title mb-2">10</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-3 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="card-title d-flex align-items-start justify-content-between">
                  <div class="avatar flex-shrink-0">
                    <img src="{{asset('assets/img/icons/unicons/wallet-info.png')}}" alt="Credit Card"
                      class="rounded" />
                  </div>
                 
                </div>
                <span class="fw-semibold d-block mb-1" >Retailers</span>
                <h3 class="card-title text-nowrap mb-1">50</h3>
              </div>
            </div>
          </div>
     
          <div class="col-3 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="card-title d-flex align-items-start justify-content-between">
                  <div class="avatar flex-shrink-0">
                    <img src="{{asset('assets/img/icons/unicons/paypal.png')}}" alt="Credit Card" class="rounded" />
                  </div>
                 
                </div>
                <span  class="fw-semibold d-block mb-1">Pending Activation</span>
                <h3 class="card-title text-nowrap mb-2">5</h3>
          
              </div>
            </div>
          </div>
          <div class="col-3 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="card-title d-flex align-items-start justify-content-between">
                  <div class="avatar flex-shrink-0">
                    <img src="{{asset('assets/img/icons/unicons/cc-primary.png')}}" alt="Credit Card" class="rounded" />
                  </div>
                 
                </div>
                <span  class="fw-semibold d-block mb-1">Pending KYC</span>
                <h3 class="card-title mb-2">16</h3>
              </div>
            </div>
          </div>
          <!-- </div>
    <div class="row"> -->
       
        </div>
      </div>
    </div>
  </div>
@endsection