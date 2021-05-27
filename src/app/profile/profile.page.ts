import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http'
import {Haptics, HapticsImpactStyle} from '@capacitor/haptics';
import {Toast} from '@capacitor/toast';
import {Browser} from '@capacitor/browser';
import {Share} from '@capacitor/share';
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
  showLoveLive(){
    const LoveLive = async() => {
      await Browser.open({url:'https://schoolido.lu/'});
    }
    LoveLive();
  }
  shareLoveLive(){
    const shareLove = async() => {
      await Share.share({
        title: '{{character.idol.name}}',
        text: 'Descubre más en',
        url: 'https://schoolido.lu/',
        dialogTitle: 'Comparte mas de Love Live'
      });
    }
    shareLove();
  }
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
