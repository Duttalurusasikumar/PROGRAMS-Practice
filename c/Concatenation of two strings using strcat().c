//Concatenation of two strings using strcat()


#include <stdio.h>  
#include<string.h>  
int main()  
{  
  char s1[20]; // declaration of char array  
  char s2[20]; // declaration of char array  
printf("Enter the first string : ");  
scanf("%s", s1);  
printf("\nEnter the second string :");  
scanf("%s",s2);  
strcat(s1,s2);  
printf("The concatenated string is : %s",s1);  
    return 0;  
}  
