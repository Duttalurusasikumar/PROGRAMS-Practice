//Program to find strong numbers in a given range.


#include<stdio.h>  
int main()  
{  
    int fact=1,sum=0;  
    int n1,n2,r;  
    printf("Enter the first number");  
    scanf("%d",&n1);  
    printf("\nEnter the last number");  
    scanf("%d",&n2);  
    printf("\nStrong numbers are :");  
    for(int i=n1;i<=n2;i++)  
    {  
        int k=i;  
        while(k!=0)  
        {  
            r=k%10;  
            fact=factorial(r);  
            k=k/10;  
            sum=sum+fact;  
        }  
        if(sum==i){  
        printf("%d, ",i);  
        }  
           sum=0;  
    }  
   return 0;  
}  
int factorial(int f)  
 {  
        int mul=1;  
        for(int i=1; i<=f;i++)  
        {  
            mul=mul*i;  
        }  
        return mul;  
    }  
