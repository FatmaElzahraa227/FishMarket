import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  public orderForm!: FormGroup;

  url: string = 'http://localhost:5000/api/v1/order/sendOrder';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      email: '',
      customer_name: '',
      phone_no: '',
      order_body: '',
    });
  }

  st: any;
  errorMessageEmail: String = '';
  errorMessageName: String = '';
  errorMessagePhone: String = '';
  errorMessageOrder: String = '';
  successMessage:String=''; 

  order() {
    this.st = this.orderForm.value;
    console.log(this.st);

    return this.http.post<any>(this.url, this.st).subscribe(
      (st) => {
        if (st.err) {
          console.log(st.err[0][0].message);
          
          if (
            st.err[0][0].message == '"customer_name" is not allowed to be empty'
          ) {
            this.errorMessagePhone = '';
            this.errorMessageName = 'برجاء كتابه الإسم';
            this.errorMessageOrder = '';
            this.errorMessageEmail = '';
            this.successMessage=''
          } else if (
            st.err[0][0].message == '"email" is not allowed to be empty' ||
            st.err[0][0].message == '"email" must be a valid email'
          ) {
            this.errorMessagePhone = '';
            this.errorMessageName = '';
            this.errorMessageOrder = '';
            this.errorMessageEmail = ' برجاء كتابه بريد إلكتروني صحيح';
            this.successMessage=''
          } else if (
            st.err[0][0].message == '"phone_no" is not allowed to be empty' ||
            st.err[0][0].message ==
              '"phone_no" length must be at least 11 characters long' ||
            st.err[0][0].message ==
              '"phone_no" length must be less than or equal to 11 characters long'
          ) {
            this.errorMessagePhone = 'صحيح برجاء كتابه رقم هاتف صحيح';
            this.errorMessageName = '';
            this.errorMessageOrder = '';
            this.successMessage=''
            this.errorMessageEmail = '';
          } else if (
            st.err[0][0].message == '"order_body" is not allowed to be empty'
            ||st.err[0][0].message == '"order_body" length must be at least 10 characters long'
          ) {
            this.errorMessagePhone = '';
            this.errorMessageName = '';
            this.successMessage=''
            this.errorMessageOrder = 'برجاء كتابه رساله تتكون من 10 حروف علي الأقل';
            this.errorMessageEmail = '';
          }
        }else{
          this.errorMessagePhone = '';
          this.errorMessageName = '';
          this.errorMessageOrder = '';
          this.errorMessageEmail = '';
          this.successMessage='تم إرسال الرساله'
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
