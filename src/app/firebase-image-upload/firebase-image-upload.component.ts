import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes, listAll,  } from 'firebase/storage';

@Component({
  selector: 'app-firebase-image-upload',
  templateUrl: './firebase-image-upload.component.html',
  styleUrls: ['./firebase-image-upload.component.css']
})
export class FirebaseImageUploadComponent implements OnInit {
  selectedFile: File | null = null;
  imageUrl: any;
  imageListRef = ref(getStorage(), 'images/')
  imageList:string[]=[];
  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    this.listFilesInImagesFolder()
    console.log(this.imageList);
    
  }
  listFilesInImagesFolder(){
    listAll(this.imageListRef)
    .then((res)=>{
      res.items.forEach((itemRef)=>{
        getDownloadURL(itemRef)
        .then((url)=>{
          this.imageList.push(url)
        }).catch((error)=>{
          console.log(error);
          
        })
      })
    }).catch((error)=>{
      console.log("error listing files");
      
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  getimages(){
    
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
