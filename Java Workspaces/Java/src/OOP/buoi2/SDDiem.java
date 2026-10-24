package OOP.buoi2;

public class SDDiem {
    public static void main(String[] args) {
        Diem a = new Diem(3, 4);
        a.hienThi();
        Diem b = new Diem();
        b.nhapDiem();
        b.hienThi();
        Diem c = new Diem(-b.giatriX(), -b.giatriY());
        c.hienThi();
        System.out.print("Khoan cach tu B den 0 la: "+ b.khoanCach());
        System.out.println("Khoan cach tu A den B la: "+ a.khoanCach(b));
    }
}
