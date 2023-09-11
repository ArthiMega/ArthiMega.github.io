import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'; 

@Component({
  selector: 'app-firebase-image-upload',
  templateUrl: './firebase-image-upload.component.html',
  styleUrls: ['./firebase-image-upload.component.css']
})
export class FirebaseImageUploadComponent implements OnInit {
  selectedFile: File | null = null;
  imageUrl:any

  constructor() {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("ng on init");
    
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadPhoto() {
    if (!this.selectedFile) {
      console.error("No file selected");
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, 'images');
    const photoRef = ref(storageRef, this.selectedFile.name);
    
    uploadBytes(photoRef, this.selectedFile)
      .then(() => {
        console.log('Image uploaded successfully');
        this.imageUrl = getDownloadURL(photoRef)
        console.log(getDownloadURL(photoRef));
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  }
}
