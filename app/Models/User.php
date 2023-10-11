<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    use HasFactory;
    protected $table = 'users';
	public $timestamps = true;
	protected $fillable = [
        "full_name",
        "user_name",
        "company_name",
        "company_photo",
        "company_gst",
        "email",
        "email_verify",
        "email_otp",
        "phone",
        "phone_verify",
        "phone_otp",
        "password",
        "access_token",
        "address",
        "dmt_plan",
        "account_status",
        "account_type",
        "managed_by",
	];
    protected $hidden = [
        'password',
        'access_token',
        'phone_otp',
        'email_otp',
    ];
}
