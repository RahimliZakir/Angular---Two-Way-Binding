import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-TwoWayBinding';
  totalStyle: any = {
    color: "red",
    fontSize: "2rem",
    textAlign: "center",
    borderBottom: "5px solid teal"
  };
  imgStyles: any = {
    width: "100%",
    height: "300px",
    objectFit: "cover"
  };
  imgUrl: string = "https://picsum.photos/700/300";
  imgDivStyle: string = "100%";
  textAligner: string = "center";
  flexColumn: any = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  // NgModel

  ngModelContent: string = '';
}
