var arr=[56,87,90,54,13,15,11,66,85,77];
var count=0;
document.write("odd numbers");
document.write("<br>");
for(let i=0;i<arr.length;i++)
{
	if(arr[i]%2!=0)
	{
		
		document.write(arr[i]);
		document.write("<br>");
		count++;
	}
	
}
	document.write("Number of odd numbers-"+count);