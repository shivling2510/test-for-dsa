let curDate=new Date(2021 ,9, 5, 19);

console.log(curDate)
 curDate=curDate.getHours();
 let greeting=" ";
 const cssStyle={};


 if(curDate>=1 && curDate<12)
 {
  greeting='GOOD MORNING';
  cssStyle.color="green";}
else if(curDate>=12 && curDate<=19)
{
   greeting='GOOD AFTERNOON';
cssStyle.color='yellow';}
else

  { greeting='GOOD NIGHT';}

  cssStyle.color='black';