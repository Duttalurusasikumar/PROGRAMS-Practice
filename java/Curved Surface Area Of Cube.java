import java.util.Scanner;
class CurvedSurfaceAreaOfCube 
{
      
   public static void main(String args[]) 
    {   
       
	
         Scanner s= new Scanner(System.in);
         
	 System.out.println("Enter the side of cube:");
         
	 double side=s.nextDouble();
       
         double  v=4*side*side;

         System.out.println("CurvedSurfaceArea Of Cube is:" +v);
       

       
          
   }
}
