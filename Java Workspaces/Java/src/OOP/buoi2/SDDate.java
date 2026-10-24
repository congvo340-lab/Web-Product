package OOP.buoi2;

public class SDDate {
    public static void main(String[] args) {
        Date a=new Date();
        Date b=new Date(31, 12, 2026);
        b.in();
        Date c = new Date();
        c=b.ngayHomsau();
        c.in();
        Date d=new Date();
        d=b.congNgay(1000);
        d.in();
        Date e=new Date(33, 1, 1000);
        if(b.hopLe()) System.out.println("hop le");
        else System.out.println("khong hop le");
        b.in();
        b.nhap();
        b.in();
    }
}
