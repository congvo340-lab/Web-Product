package OOP.buoi2;

import java.util.Scanner;

public class SDPhanSo {
    public static void main(String[] args) {
        // PhanSo a = new PhanSo(3, 7);
        // PhanSo b = new PhanSo(4, 9);
        // a.hienThi();
        // b.hienThi();
        // PhanSo x = new PhanSo();
        // PhanSo y = new PhanSo();
        // x.nhap();
        // y=x.giaTriNghichDao();
        // y.hienThi();
        // PhanSo kq=new PhanSo();
        // kq=x.cong(y);
        // kq.hienThi();
        int n;
        Scanner sc=new Scanner(System.in);
        n=sc.nextInt();
        PhanSo ds[];
        ds=new PhanSo[n];
        for(int i=0; i<n; i++){
            ds[i]=new PhanSo();
            ds[i].nhap();
        }
        PhanSo tong = new PhanSo();
        PhanSo max = new PhanSo();
        for(int i=0; i<n; i++){
            tong.cong(ds[i]);
            if(ds[i].lonHon(max)) max=ds[i];
        }
        for(int i=0; i<n; i++){
            for(int j=i; j<n; j++){
                if(ds[j].lonHon(ds[i])){
                    PhanSo tmp=ds[j];
                    ds[j]=ds[i];
                    ds[i]=tmp;
                }
            }
        }
    }
}
