package OOP.buoi2;

import java.util.Scanner;

public class Date{
    private int d, m, y;
    public Date(){
        d=1;
        m=1;
        y=2000;
    }
    public Date(int a, int b, int c){
        d=a;
        m=b;
        y=c;
    }
    public void in(){
        System.out.println(d+"/"+m+"/"+y);
    }
    public void nhap(){
        Scanner sc=new Scanner(System.in);
        boolean success;
        do{
            try{
                System.out.println("Nhap ngay");
                d=sc.nextInt();
                System.out.println("Nhap thang");
                m=sc.nextInt();
                System.out.println("Nhap nam");
                y=sc.nextInt(); 
                success=true;
            }
            catch(Exception e){
                System.out.println("Ban da nhap sai, vui long nhap lai!!!");
                sc.next();
                success=false;
            }
        }
        while(!success);
    }
    public boolean hopLe(){
        boolean hop=false;
        int maxd[]={0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        if((y%4==0 && y%100!=0) || (y%400==0)) maxd[2]=29;
        if(m>=0 && m<=12 && d>=0 && d<=maxd[m]) hop=true;
        return hop;
    }
    public Date ngayHomsau(){
        Date a=new Date();
        int maxdd[]={0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        if(d==maxdd[m]){
            a.d=1;
            if(m==12){
                a.m=1;
                a.y=y+1;
            }
            else{
                a.m=m+1;
                a.y=y;
            } 
        }
        else{
            a.d=d+1;
            a.m=m;
            a.y=y;
        } 
        return a;
    }
    public Date congNgay(int n){
        Date b=new Date();
        b.d=d;
        b.m=m;
        b.y=y;
        for(int i=0; i<n; i++){
            b = b.ngayHomsau();
        }
        return b;
    }
}
