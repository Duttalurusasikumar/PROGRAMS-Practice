#include <iostream>  
using namespace std;  
int main()   
{  
    char char_array[] = {'J','A','V','A','T','P','O','I','N','T'};  
    int array_size = sizeof(char_array) / sizeof(char);  
    string j = "";  
    int i = 0;  
    while(i < array_size)  
  {  
        /**retrieving and merging the value of character array on position `i`*/  
        j = j + char_array[i];  
        i++;  
    }  
    cout << j <<endl;  
}  
