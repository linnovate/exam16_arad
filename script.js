var parent1
var tree = [
{
	id : 1,
	title: "Alex",
	parentID: 0,
	gender: "male"
},
{
	id : 2,
	title: "Avi",
	parentID: 1,
	gender: "male"
},
{
	id : 3,
	title: "Aviva",
	parentID: 2,
	gender: "female"
},
{
	id : 4,
	title: "Bonita",
	parentID: 3,
	gender: "female"
},
{
	id : 5,
	title: "Boaz",
	parentID: 3,
	gender: "male"
},
{
	id : 6,
	title: "Joe",
	parentID: 2,
	gender: "male"
},
{
	id : 7,
	title: "Judy",
	parentID: 1,
	gender: "female"
},
{
	id : 8,
	title: "Deborah",
	parentID: 6,
	gender: "female"
},
{
	id : 9,
	title: "Hadas",
	parentID: 1,
	gender: "female"
},
{
	id : 10,
	title: "William",
	parentID: 2,
	gender: "male"
},
{
	id : 11,
	title: "Jacky",
	parentID: 10,
	gender: "male"
},
{
	id : 12,
	title: "Zvulun",
	parentID: 9,
	gender: "male"
},
{
	id : 13,
	title: "Chava",
	parentID: 9,
	gender: "female"
},
{
	id : 14,
	title: "Teddy",
	parentID: 10,
	gender: "male"
},
{
	id : 15,
	title: "Yevgeni",
	parentID: 7,
	gender: "male"
},
{
	id : 16,
	title: "Kochava",
	parentID: 1,
	gender: "female"
},
{
	id : 17,
	title: "Leon",
	parentID: 16,
	gender: "male"
},
{
	id : 18,
	title: "Meir",
	parentID: 15,
	gender: "male"
},
{
	id : 19,
	title: "Mary",
	parentID: 15,
	gender: "female"
},
{
	id : 20,
	title: "Nava",
	parentID: 15,
	gender: "female"
},
{
	id : 21,
	title: "Sigalit",
	parentID: 15,
	gender: "female"
},
{
	id : 22,
	title: "Susann",
	parentID: 6,
	gender: "female"
},
{
	id : 23,
	title: "Pablo",
	parentID: 1,
	gender: "male"
},
{
	id : 24,
	title: "Charles",
	parentID: 6,
	gender: "male"
},
{
	id : 25,
	title: "Karen",
	parentID: 15,
	gender: "female"
},
{
	id : 26,
	title: "Raul",
	parentID: 6,
	gender: "male"
},
{
	id : 27,
	title: "Shaul",
	parentID: 16,
	gender: "male"
},
{
	id : 28,
	title: "Tehila",
	parentID: 2,
	gender: "female"
},
{
	id : 29,
	title: "Tom",
	parentID: 2,
	gender: "male"
}];
 function a1()
 {
	  
 var i=0 ;
  var j=0 ;

 //alert (tree[i].id);
 var degel1=0;
 var degel2=0;
 for( i=0 ;i<tree.length && degel2==0;i++)
 {
	 degel1=0;
 for(j=0;j<tree.length && degel1==0;j++)
 {
	 
	 if (tree[i].parentID==tree[j].id)
	 degel1=1;
 }
 if(degel1==0)
	 degel2=1;
 }
 if(degel2==1)
 {
	  parent1=i-1;
	 alert (tree[parent1].id);
 }
  alert(i-1);
 }
 
  function a2()
 {
	  var cparent=parent1;
 alert(cparent);
 var idp=tree[cparent].id;
 var w=0;
  var w1=0;
 while(w<tree.length)
 {
  while(idp != tree[w1].parentID&&w1<tree.length)
  {
	  w1++;
  }
  if (idp == tree[w1].parentID)  
  {
	  alert (tree[w1].title);
	  w++;
	  //cparent=w1;
	  idp=tree[w1].id;
  }
  else
  {
	  w1=0;
	  idp=tree[w1].parentID;
  }
	  
	  
 }
  }
 

