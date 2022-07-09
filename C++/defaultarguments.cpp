//Default arguments in C++


#include<iostream>  
using namespace std;  
int sum(int x, int y, int z=0, int w=0) // Here there are two values in the default arguments   
{ // Both z and w are initialised to zero   
    return (x + y + z + w); // return sum of all parameter values  
}  
int main()  
{  
    cout << sum(10, 15) << endl; // x = 10, y = 15, z = 0, w = 0  
    cout << sum(10, 15, 25) << endl; // x = 10, y = 15, z = 25, w = 0  
    cout << sum(10, 15, 25, 30) << endl; // x = 10, y = 15, z = 25, w = 30  
    return 0;  
}  
