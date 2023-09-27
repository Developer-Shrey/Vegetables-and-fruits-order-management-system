// import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private router: Router, private route: ActivatedRoute){ }

  loginId = "";
  passWord = "";

  login()
  {
    if (this.loginId === "Shreyash" && this.passWord === "Shreyash") 
    {
         this.router.navigate(['home']);
    }  
    else if (this.loginId === "SSS" && this.passWord === "123")
    {
         alert("Please enter valid credential");
    }
    else 
    {
     alert("Please enter the correct values")
    }
    }
    


  }

