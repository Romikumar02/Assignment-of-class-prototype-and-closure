 class user{
    constructor (username,password){
        this.username = username;
        this.password=password;
    }
    get maskedpassword(){
        return this.password.replace(/./g,'*')
    }
    set password(newpassword){
        if(newpassword.length>=8 && /[A-Z]/.test(newpassword) && /\d/.test(newpassword)){
            this._password=newpassword;
        }else{
            console.log('error invalid password')
        }
    }
    get password(){
        return this._password;
    }
 }
 const user1 = new user('Romi','MyPassword123')
 console.log(user1.maskedpassword);