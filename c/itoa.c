//itoa Function in C


#include <stdio.h>  
#include <math.h>  
#include <stdlib.h>  
char* itoa(int num, char* buffer, int base)   
{  
int current = 0;  
if (num == 0) {  
buffer[current++] = '0';  
buffer[current] = '\0';  
return buffer;  
}  
int num_digits = 0;  
if (num < 0) {  
if (base == 10) {  
num_digits ++;  
buffer[current] = '-';  
current ++;  
num *= -1;  
}  
else  
return NULL;  
}  
num_digits += (int)floor(log(num) / log(base)) + 1;  
while (current < num_digits)   
{  
int base_val = (int) pow(base, num_digits-1-current);  
int num_val = num / base_val;  
 char value = num_val + '0';  
buffer[current] = value;  
current ++;  
num -= base_val * num_val;  
}  
buffer[current] = '\0';  
return buffer;  
}  
int main()   
{  
int a = 123456;  
char buffer[256];  
if (itoa(a, buffer, 10) != NULL) {  
printf("Input = %d, base = %d, Buffer = %s\n", a, 10, buffer);  
}  
int b = -2310;  
if (itoa(b, buffer, 10) != NULL) {  
printf("Input = %d, base = %d, Buffer = %s\n", b, 10, buffer);  
}  
int c = 10;  
if (itoa(c, buffer, 2) != NULL) {  
printf("Input = %d, base = %d, Buffer = %s\n", c, 2, buffer);  
}  
return 0;  
} 
