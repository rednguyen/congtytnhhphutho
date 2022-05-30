import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-baogia',
  templateUrl: './baogia.component.html',
  styleUrls: ['./baogia.component.css']
})
export class BaogiaComponent implements OnInit {
  formBaoGia: FormGroup;
  cacSanPham: Array<string> = ["Xi Măng", "Sắt", "Thép", "Cát Sạn", "Gạch Đá", "Tôn"]
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formBaoGia = new FormGroup ({
      name: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      sanpham: new FormArray([], [Validators.required])
    })
  }

  onCheckboxChange(e: any) {
    console.log(e.target.value)
    const sanphamArray: FormArray = this.formBaoGia.get('sanpham') as FormArray;
    if (e.target.checked) {
      sanphamArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      sanphamArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          sanphamArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit(){
    if (this.formBaoGia.invalid) {
      window.alert("Xin quí khách vui lòng nhập những thông tin bắc buộc")
      return;
    }
    else {
      window.alert("Cam On Qui Khach")
      this.router.navigate(['/'])
    }
  }
}
