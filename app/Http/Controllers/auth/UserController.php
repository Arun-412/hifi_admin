<?php

namespace App\Http\Controllers\auth;
use App\Models\user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Redirect;
use Auth;

class UserController extends Controller
{
    function register (Request $request) {
        return view('auth.register');
    }
    function login (Request $request) {
        return view('auth.login');
    }
    public function verifyUser (Request $request) {
        try {
            $validate = Validator::make($request->all(), [
                'login_username' => 'required|string|min:3|max:20',
                'login_password' => 'required|string|min:8|max:30',
            ],);
            if($validate->fails()){
                return back()->withInput()->withErrors($validate);
            }
            else if(!empty(user::where(['user_name'=>$request->login_username])->exists()) || !empty(user::where(['phone'=>$request->login_username])->exists())) {
                if(!empty(user::where(['user_name'=>$request->login_username])->exists())){
                    $login_user = user::where(['user_name'=>$request->login_username])->first();
                    if($login_user->password == hash("sha512",$request->login_password)) {
                        $login_user->phone_otp = 123456;
                        $login_user->access_token = hash("sha256", $login_user->phone);
                        $login_user->save();
                        $user['type'] = "login";
                        $user['phone'] = $login_user->phone;
                        $user['key'] = $login_user->access_token;
                        return $this->viewOtp($user);
                    }else{
                        return back()->withInput()->with('failed',"Invalid phone number or username");
                    }
                }else {
                    $login_user = user::where(['phone'=>$request->login_username])->first();
                    if($login_user->password == hash("sha512",$request->login_password)) {
                        $login_user->phone_otp = 123456;
                        $login_user->access_token = hash("sha256", $login_user->phone);
                        $login_user->save();
                        $user['type'] = "login";
                        $user['phone'] = $login_user->phone;
                        $user['key'] = $login_user->access_token;
                        return $this->viewOtp($user);
                    }else{
                        return back()->withInput()->with('failed',"Invalid phone number or username");
                    }
                }
            }
            else{
                return back()->withInput()->with('failed',"Invalid phone number or username");
            }
        }
        catch(\Exception $exception){
            return back()->withInput()->with('failed',$exception->getMessage());
        } 
        catch (\Illuminate\Database\QueryException $exception ){
            return back()->withInput()->with('failed',$exception->getMessage());
        }   
    }

    public function authentication (Request $request) {
        try{
            $validate = Validator::make($request->all(), [
                'username' => 'required|string|min:3|max:20',
                'phone_number' => 'required|string|min:10|max:10',
                'email' => 'required|email|max:50',
                'password' => 'required|string|min:8|max:30',
            ],);
            if($validate->fails()){
                return back()->withInput()->withErrors($validate);
                // return response()->json(["status"=>false , "message" => $validate->errors()->toArray()[array_keys($validate->errors()->toArray())[0]][0]]);
            }
            else if(!empty(user::where(['user_name'=>$request->username])->exists())){
                // return response()->json(["status"=>false , "message"=>'Username already exists']);
                return back()->withInput()->with('failed',"Username already exists");
            }
            else if(!empty(user::where(['phone'=>$request->phone_number])->exists())){
                return back()->withInput()->with('failed',"Phone Number already exists");
            }
            else if(!empty(user::where(['email'=>$request->email])->exists())){
                return back()->withInput()->with('failed',"Email already exists");
            }
            else{
                $add_user = new user;
                $add_user->user_name = $request->username;
                $add_user->email = $request->email;
                $add_user->email_verify = 0;
                $add_user->phone = $request->phone_number;
                $add_user->phone_verify = 0;
                $add_user->phone_otp = 123456;
                $add_user->account_status = 0;
                $add_user->account_type = 0;
                $add_user->managed_by = 0;
                $add_user->password = hash("sha512",$request->password);
                $add_user->access_token = hash("sha256",$request->phone_number);
                $add_user->save();
                $user['type'] = "register";
                $user['phone'] = $add_user->phone;
                $user['key'] = $add_user->access_token;
                return $this->viewOtp($user);
            }        
        }
        catch(\Exception $exception){
            // return response()->json(["status"=>false ,'message'=>$exception->getMessage()]);
            return back()->withInput()->with('failed',$exception->getMessage());
        } 
        catch (\Illuminate\Database\QueryException $exception ){
            return back()->withInput()->with('failed',$exception->getMessage());
        }   
    }

    public function viewOtp ($user = null) {
        try{
            $data['type'] = $user['type']; 
            $data['key'] =  $user['key'];
            $data['user'] = $user['phone'];
            return view('auth.verifyOtp')->with($data);
        }
        catch(\Exception $exception){
            return back()->withInput()->with('failed',$exception->getMessage());
        } 
        catch (\Illuminate\Database\QueryException $exception ){
            return back()->withInput()->with('failed',$exception->getMessage());
        } 
    }

    public function verifyOtp (Request $request) {
        try{
            $validate = Validator::make($request->all(), [
                'verify_otp' => 'required|string|min:6|max:6',
            ],);
            if($validate->fails()){
                return redirect('viewOtp')->with("failed","Invalid OTP");
            }else if(!empty($request->access)){
                if(!empty(user::where(['access_token'=>$request->access])->exists())){
                    if(!empty(user::where(['phone_otp'=>$request->verify_otp])->exists())){
                        if($request->type){
                            if($request->type == "login"){
                                return redirect()->route('admin.dashboard');
                            }else if($request->type == "register"){
                                return redirect()->route('auth.login');
                            }else{
                                return redirect('viewOtp')->with("failed","Unauthorized");
                            }
                        }else {
                            return redirect('viewOtp')->with("failed","Invalid user access");
                        }
                    }else {
                        return redirect('viewOtp')->with("failed","Invalid OTP");
                    }
                }else {
                    return redirect('viewOtp')->with("failed","Invalid Request");
                }                
            }
            else{
                return redirect('viewOtp')->with("failed","Unauthorized access");
            }
        }
        catch(\Exception $exception){
            return redirect('viewOtp')->with('failed',$exception->getMessage());
        } 
        catch (\Illuminate\Database\QueryException $exception ){
            return redirect('viewOtp')->with('failed',$exception->getMessage());
        } 
    }
}
