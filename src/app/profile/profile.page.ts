import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http'
import {Haptics, HapticsImpactStyle} from '@capacitor/haptics';
import {Toast} from '@capacitor/toast';
const showToast = async (value: string) => {
  await Toast.show({
    text: value,
  });
  await Haptics.impact({style: HapticsImpactStyle.Light});
};
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileId: string;
  character;
  constructor(
    private activatedRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://schoolido.lu/api/cards/'+ this.profileId)
    .subscribe(res => {
      this.character = res;
      showToast("Mostrando");
      console.log(res)
    })
  }

}
