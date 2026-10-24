package OOP.buoi2;
import java.util.Scanner;
public class Diem{
    private int x, y;
    public Diem(){
        x=0;
        y=0;
    }
    public Diem(int a, int b){
        x=a;
        y=b;
    }
    public void nhapDiem(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap toa do x: ");
        x=sc.nextInt();
        System.out.print("Nhap toa do y: ");
        y=sc.nextInt();
    }
    public void hienThi(){
        System.out.println("("+x+","+y+")");
    }
    public void doiDiem(int dx, int dy){
        x+=dx;
        y+=dy;
    }
    public int giatriX(){
        return x;
    }
    public int giatriY(){
        return y;
    }
    public float khoanCach(){
        return (float)Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2));
    }
    public float khoanCach(Diem b){
        return (float)Math.sqrt(Math.pow(x-b.x, 2)+Math.pow(y-b.y, 2));
    }
}
