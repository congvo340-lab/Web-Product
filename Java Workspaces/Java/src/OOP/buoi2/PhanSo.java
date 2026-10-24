package OOP.buoi2;

import java.util.Scanner;

public class PhanSo {
    private int tu, mau;
    public PhanSo(){
        tu=0;
        mau=1;
    }
    public PhanSo(int a, int b){
        tu=a;
        mau=b;
    }
    public void nhap(){
        Scanner sc=new Scanner(System.in);
        do{
            System.out.println("Nhap tu so");
            tu=sc.nextInt();
            System.out.println("Nhap mau so");
            mau=sc.nextInt();
        }
        while(mau==0);
    }
    public void hienThi(){
        if(tu==0) System.out.println("0");
        else if(mau==1) System.out.println(tu);
        else System.out.println(tu+"/"+mau);
    }
    public void nghichDao(){
        int tmp=tu;
        tu=mau;
        mau=tmp;
    }
    public PhanSo giaTriNghichDao(){
        PhanSo a = new PhanSo();
        a.tu=mau;
        a.mau=tu;
        return a;
    }
    public float giaTri(){
        return tu/mau;
    }
    public boolean lonHon(PhanSo a){
        boolean sc;
        if((mau>0 && a.mau>0) || (mau<0 && a.mau<0)){
            sc = (tu*a.mau)>(a.tu*mau) ? true : false;
        }
        else{
            sc = (tu*a.mau)<(a.tu*mau) ? true : false;
        }
        return sc;
    }
    public int ucln(int a, int b){
        while(b!=0){
            int r=a%b;
            a=b;
            b=r;
        }
        return a;
    }
    public int bcnn(int a, int b){
        int bc=(a*b)/ucln(a, b);
        return bc;
    }
    public void rutGon(){
        int uc=ucln(tu, mau);
        tu/=uc;
        mau/=uc;
    }
    public PhanSo cong(PhanSo a){
        PhanSo f=new PhanSo();
        rutGon();
        a.rutGon();
        int bc=bcnn(mau, a.mau);
        f.tu=(tu*(bc/mau)) + (a.tu*(bc/a.mau));
        f.mau=bc;
        return f;
    }
    public PhanSo tru(PhanSo a){
        PhanSo f=new PhanSo();
        rutGon();
        a.rutGon();
        int bc=bcnn(mau, a.mau);
        f.tu=(tu*(bc/mau)) - (a.tu*(bc/a.mau));
        f.mau=bc;
        return f;
    }
    public PhanSo nhan(PhanSo a){
        PhanSo f=new PhanSo();
        rutGon();
        a.rutGon();
        f.tu=tu*a.tu;
        f.mau=mau*a.mau;
        return f;
    }
    public PhanSo chia(PhanSo a){
        PhanSo f=new PhanSo();
        rutGon();
        a.rutGon();
        f.tu=tu*a.mau;
        f.mau=mau*a.tu;
        return f;
    }
    public PhanSo cong(int n){
        PhanSo k=new PhanSo(n, 1);
        return cong(k);
    }
     public PhanSo tru(int n){
        PhanSo k=new PhanSo(n, 1);
        return tru(k);
    }
     public PhanSo nhan(int n){
        PhanSo k=new PhanSo(n, 1);
        return nhan(k);
    }
     public PhanSo chia(int n){
        PhanSo k=new PhanSo(n, 1);
        return chia(k);
    }
}
